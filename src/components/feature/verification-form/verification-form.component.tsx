import { useState, useEffect, FormEvent, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import {
	sendVerification,
	confirmSignup,
	sendPasswordResetVerification,
	confirmPasswordReset,
	getLoginUserData,
} from '../../../services/auth/auth-service'
import {
	getAccessToken,
	setAccessToken,
	setRefreshToken,
} from '../../../utils/token.utils'
import {
	processUserData,
	updateUserStore,
} from '../../../utils/auth-data.utils'

import { VerificationFormProps } from './verification-form.types'
import { VerificationFormContainer } from './verification-form.styles'

import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

import VerificationInput from './verification-input/verification-input.component'

export default function VerificationForm(props: VerificationFormProps) {
	const { email } = props

	const { updateToastMessage } = useToastMessageStore()
	const {
		verificationCode,
		updateAuthData,
		updateLoginUser,
		updateIsUserDataLoaded,
		resetAuthData,
	} = useAuthDataStore()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const [isValid, setIsValid] = useState<boolean>(false)
	const maxLength = 6

	const navigate = useNavigateWithScroll()
	const location = useLocation()
	const routeState = location.state as
		| { mode: 'signup' | 'password-reset' }
		| undefined

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			if (routeState?.mode === 'signup') {
				await handleSignupConfirmation()
			} else if (routeState?.mode === 'password-reset') {
				await handlePasswordResetConfirmation()
			} else {
				throw new Error('잘못된 요청입니다.')
			}

			updateIsUserDataLoaded(true)
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	const handleSignupConfirmation = async () => {
		const { token } = await confirmSignup({
			access: getAccessToken(),
			code: verificationCode,
		})
		setAccessToken(token.access)
		setRefreshToken(token.refresh)

		const userData = await getLoginUserData()
		const processedData = processUserData(userData)

		if (processedData) {
			updateUserStore(processedData, updateLoginUser, updateIsUserDataLoaded)
		}
		resetAuthData()

		updateToastMessage('회원 가입이 완료되었습니다.')
		navigate(ROUTES.AUTH, {
			replace: true,
			state: { mode: undefined, status: 'success' },
		})
		// navigateAfterAuth(authDestination)
	}

	const handlePasswordResetConfirmation = async () => {
		const { password_reset_token } = await confirmPasswordReset({
			access: getAccessToken(),
			code: verificationCode,
		})
		updateAuthData('passwordResetToken', password_reset_token)
		resetAuthData()

		updateToastMessage('인증에 성공했습니다.')
		navigate(ROUTES.AUTH, { replace: true, state: { mode: 'password-reset' } })
	}

	const handleResendCode = async (e: MouseEvent<HTMLSpanElement>) => {
		try {
			updateIsLoading(true)

			if (routeState?.mode === 'signup') {
				await sendVerification(getAccessToken())
			} else if (routeState?.mode === 'password-reset') {
				await sendPasswordResetVerification(getAccessToken())
			}
			updateToastMessage('가입하신 이메일로 인증 코드를 전송했습니다.')
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	useEffect(() => {
		updateAuthData('verificationCode', '')

		if (routeState?.mode === undefined) {
			navigate(ROUTES.HOME)
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [updateAuthData, navigate, routeState, updateToastMessage])

	useEffect(() => {
		setIsValid(verificationCode.length < 6 ? false : true)
	}, [verificationCode])

	return (
		<>
			{routeState?.mode === undefined ? null : (
				<>
					<VerificationFormContainer>
						<div id="verification-text-container">
							<h1 id="heading">이메일 인증</h1>
							<p id="body">
								{email}
								<br />
								메일함, 또는 스팸 메일함을 확인해 주세요.
							</p>
						</div>
						<form id="verification-form" onSubmit={handleSubmit}>
							<VerificationInput maxLength={maxLength} />
							<Button
								id="submit-button"
								type="submit"
								text="이메일 인증하기"
								accessibleName="verification-form"
								appearance="accent"
								hierarchy="primary"
								stroke="filled"
								shape="rounding"
								size="md"
								disabled={!isValid}
							/>
						</form>
					</VerificationFormContainer>
					<TextLink
						description="인증코드를 못받으셨다면"
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						underlined
						text="인증코드 재전송"
						handleClick={handleResendCode}
					/>
				</>
			)}
		</>
	)
}
