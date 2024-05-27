import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.component'
import { getColour } from '../../../utils/colour.utils'

export const CheckoutOptionContainer = styled(StyledSectionContainer)`
	div.checkout-option-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		text-align: left;

		h3.heading-3 {
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p.body-sm {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			font-size: 0.875rem;
		}
	}
`
