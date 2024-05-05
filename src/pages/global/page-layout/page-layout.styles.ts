import styled from 'styled-components'

import { DeviceType } from '../../../store/deviceTypeStore'
import { getDeviceTypePadding } from '../../../utils/deviceUtils'

type PageLayoutContainerProps = {
	$deviceType: DeviceType
}

export const PageLayoutContainer = styled.div<PageLayoutContainerProps>`
	width: 100%;
	min-width: ${({ theme }) => theme.layout.page.minWidth};
	/* min-height: calc(100vh - 4.25rem); */
	min-height: ${({ theme }) => theme.layout.page.height};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.page.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'page')};
`

export default PageLayoutContainer
