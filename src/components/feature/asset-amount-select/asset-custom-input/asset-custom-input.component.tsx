import { useState, useEffect, FocusEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { AssetCustomInputProps } from './asset-custom-input.types'
import { AssetCustomInputContainer } from './asset-custom-input.styles'

import Input from '../../../global/input/input.component'

export default function AssetCustomInput(props: AssetCustomInputProps) {
	const {
		name,
		value,
		placeholder,
		isValid,
		handleChange,
		handleFocus,
		isCustomInputSelected,
	} = props
	const [isSelected, setIsSelected] = useState<boolean>(false)
	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
		handleFocus(e)
		setIsFocused(true)
	}

	useEffect(() => {
		setIsSelected(isCustomInputSelected)
	}, [isCustomInputSelected])

	return (
		<AssetCustomInputContainer
			$isSelected={isSelected}
			$isValid={isValid}
			$isFocused={isFocused}
		>
			<Input
				id="custom-input"
				hierarchy="secondary"
				name={name}
				value={value}
				type="tel"
				autoComplete={false}
				placeholder={placeholder}
				isValid={isValid}
				handleChange={handleChange}
				handleFocus={handleInputFocus}
				handleBlur={() => setIsFocused(false)}
			/>
			{isSelected ? (
				<FontAwesomeIcon icon={faCircleCheck} id="custom-input-icon" />
			) : null}
		</AssetCustomInputContainer>
	)
}
