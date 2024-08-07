import { useEffect, useRef, FormEvent, MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import {
	changePassword,
	getLoginUserData,
} from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { setAccessToken, setRefreshToken } from '../../../utils/token.utils'
import {
	processUserData,
	updateUserStore,
} from '../../../utils/auth-data.utils'
import { getHelp } from '../../../utils/customer-service.utils'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function PasswordResetForm() {
	const {
		password,
		passwordResetToken,
		updateLoginUser,
		updateIsUserDataLoaded,
		resetAuthData,
		resetPasswordResetToken,
	} = useAuthDataStore()
	const { updateToastMessage } = useToastMessageStore()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const isReallyUnmounting = useRef(false)
	const navigate = useNavigateWithScroll()

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '비밀번호 변경 관련 문의사항'
		getHelp(subject)
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			const { token, is_email_verified } = await changePassword({
				password_reset_token: passwordResetToken,
				password,
			})
			setAccessToken(token.access)
			setRefreshToken(token.refresh)

			if (is_email_verified) {
				const userData = await getLoginUserData()
				const processedData = processUserData(userData)

				if (processedData) {
					updateUserStore(
						processedData,
						updateLoginUser,
						updateIsUserDataLoaded,
					)
				}
				updateToastMessage('비밀번호 변경이 완료되었습니다.')

				resetAuthData()
				resetPasswordResetToken()
				navigate(ROUTES.ACCOUNT, { replace: true })
			}
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	useEffect(() => {
		return () => {
			if (!isReallyUnmounting.current) {
				isReallyUnmounting.current = true
			} else {
				resetPasswordResetToken()
			}
		}
	}, [resetPasswordResetToken])

	return (
		<AuthForm
			variant="password-reset"
			heading="비밀번호 변경"
			submitText="비밀번호 변경하기"
			handleAuthSubmit={handleSubmit}
			textLink={{
				descriptionMessage: '도움이 필요하시다면',
				linkMessage: '여기를 클릭해 주세요.',
				handleTextLink: handleGetHelp,
			}}
		></AuthForm>
	)
}
