import styled, { createGlobalStyle } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

const globalStyled = { createGlobalStyle }

export const ServiceItemContainer = styled(PageLayoutContainer)`
	position: relative;

	& > * {
		margin: 0;
	}

	div#service-item-details-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		padding: ${({ theme, $deviceType }) =>
			$deviceType !== 'mobile' &&
			getDeviceTypePadding(theme, $deviceType, 'section')};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		img.service-item-details-img {
			width: ${({ theme }) => theme.layout.component.width};
		}

		hr#service-item-details-vertical-line {
			width: 0.0625rem;
			height: 6rem;

			border: none;
			background-color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}

		div#service-item-details-title-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			span#service-item-details-caption {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
			}

			h1#service-item-details-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}
	}
`

export const ServiceItemDetialsGlobalStyle = globalStyled.createGlobalStyle`
	body {
		background-color: #000;
	}
`
