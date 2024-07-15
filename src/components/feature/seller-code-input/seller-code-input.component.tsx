import { useState, ChangeEvent, MouseEvent } from 'react'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { validateWithRegex } from '../../../utils/regex.utils'

import { SellerCodeInputContainer } from './seller-code-input.styles'

import Accordion from '../../global/accordion/accordion.component'
import Input from '../../global/input/input.component'

export default function SellerCodeInput() {
	const { sellerCode, updateAuthData } = useAuthDataStore()
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateAuthData(inputName, inputValue)
		setIsValid(validateWithRegex('number', inputValue))
	}

	const handleReset = (e: MouseEvent<SVGSVGElement>) => {
		updateAuthData('sellerCode', '')
		setIsValid(false)
	}

	return (
		<SellerCodeInputContainer>
			<Accordion
				heading="추천인 코드 입력"
				body={
					<Input
						name="sellerCode"
						type="number"
						pattern="\d*"
						autoComplete={false}
						value={sellerCode}
						className="login-input"
						handleChange={handleChange}
						hierarchy="secondary"
						isValid={sellerCode.length === 0 || isValid}
						placeholder="추천인 코드를 입력해 주세요."
						handleReset={handleReset}
					/>
				}
				container={false}
				size="sm"
			/>
		</SellerCodeInputContainer>
	)
}
