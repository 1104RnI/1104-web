import styled, { css } from 'styled-components'

import { TextLinkContainerProps, LinkContainerProps } from './text-link.types'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

type LinkProps = LinkContainerProps
type ContainerProps = TextLinkContainerProps

export const LinkContainer = styled.div<LinkProps>`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;

	${({ theme }) => getTypography(theme, 'subheading')}
	color: ${({ theme, $appearance, $hierarchy }) =>
		getColour(theme, $appearance, $hierarchy, 'active')};

	${({ $icon }) =>
		$icon &&
		css`
			& > :first-child {
				height: 1rem;
				width: auto;
			}
		`}

	${({ $size }) =>
		$size === 'sm' &&
		css`
			font-size: 0.875rem;
		`}

	cursor: pointer;

	span#link-text {
		text-decoration: ${({ $underlined }) =>
			$underlined ? 'underline' : 'none'};

		&:hover {
			text-decoration: underline;
		}
	}

	&:hover {
		color: ${({ theme, $appearance, $hierarchy }) =>
			getColour(theme, $appearance, $hierarchy, 'hover')};
	}
`

export const TextLinkContainer = styled.div<ContainerProps>`
	${({ $description }) =>
		$description
			? css`
					width: 100%;

					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					gap: 0.25rem;

					span#description-text {
						${({ theme }) => getTypography(theme, 'body')}
						font-size: 0.875rem;

						color: ${({ theme }) =>
							getColour(theme, 'neutral', 'secondary', 'inactive')};
					}
			  `
			: css`
					width: auto;
					padding: 0;
			  `}
`
