import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'

import { SectionContainer } from '../../global/section/section.styles'

export const SubscriptionContainer = styled(SectionContainer)`
	/* overflow-x: visible; */

	padding: 0;

	margin-top: ${({ theme }) => theme.layout.page.gutter};
	margin-bottom: ${({ theme }) => theme.layout.page.gutter};

	div#subscription-section-contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};
	}

	div#section-heading-container {
		width: ${({ theme }) => theme.layout.container.width};

		text-align: center;

		span#section-category-text {
			${({ theme }) => getTypography(theme, 'body')}
			font-weight: bold;
			color: ${({ theme }) => theme.colour.accent.primary.active};
		}

		h1#section-heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) => theme.colour.neutral.primary.active};
		}
	}
`
