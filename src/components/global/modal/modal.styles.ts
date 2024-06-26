import styled, { css } from 'styled-components'

import { hexToRgba, getColour } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'

import { ModalContainerProps } from './modal.types'

export const ModalContainer = styled.div<ModalContainerProps>`
	/* position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0; */

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 120vw;
	height: 120vh;

	z-index: 100;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	${({ $backgroundPanel }) =>
		$backgroundPanel &&
		css`
			&::before {
				content: '';
				/* position: absolute; */
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;

				border: none;
				box-sizing: border-box;

				pointer-events: none;

				background-color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.5)};

				filter: blur(1.5rem);
				backdrop-filter: blur(1.5rem);
				-webkit-backdrop-filter: blur(1.5rem);
			}
		`}

	div#modal-contents-container {
		z-index: 1000;

		width: 80%;
		max-width: 28rem;
		max-height: 70vh;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'secondary', 'filled', 'rounded2', 1)}

		padding: ${({ theme }) => `${theme.layout.container.padding.sm}`};

		box-shadow: ${({ theme }) =>
			`${theme.elevation.layer2} ${hexToRgba(
				getColour(theme, 'neutral', 'primary', 'active'),
				0.5,
			)}`};

		div#modal-top-bar {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: space-between;
			align-items: center;

			padding-bottom: 0.5rem;

			h3#modal-subheading {
				${({ theme }) => getTypography(theme, 'subheading')}
				font-size: 0.875rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'primary', 'active')};
			}

			button#modal-close-button {
				all: unset;
				user-select: none;
				cursor: pointer;

				width: 2rem;
				height: 2rem;

				display: flex;
				justify-content: center;
				align-items: center;

				font-size: 1.25rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'primary', 'active')};
			}
		}

		div#modal-body {
			width: ${({ theme }) => theme.layout.container.width};
			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;

			color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
			text-align: left;
		}

		div#modal-bottom-bar {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			align-items: center;

			padding-top: 1rem;

			#button {
				min-width: 50%;
			}
		}
	}
`
