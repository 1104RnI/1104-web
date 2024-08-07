import { ReactNode, MouseEvent } from 'react'

import { DeviceType } from '../../../store/layout/device-type.store'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'

export type CardProps = {
	id?: string
	className?: string
	children?: ReactNode | null
	appearance?: ComponentAppearance
	hierarchy?: ComponentHierarchy
	stroke?: ComponentStroke
	shape?: ComponentShape
	opacity?: number
	handleClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export type CardContainerProps = {
	$deviceType: DeviceType
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
	$stroke: ComponentStroke
	$shape: ComponentShape
	$opacity?: number
	$handleClick?: (e: MouseEvent<HTMLDivElement>) => void
}
