import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { ChipProps } from './chip.types'
import { ChipContainer } from './chip.styles'

export default function Chip(props: ChipProps) {
	const {
		appearance,
		hierarchy,
		stroke = 'filled',
		shape = 'rounded3',
		size = 'sm',
		inverted = false,
		text,
		id,
		className,
	} = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<ChipContainer
			$deviceType={deviceType}
			$appearance={appearance}
			$hierarchy={hierarchy}
			$stroke={stroke}
			$shape={shape}
			$size={size ? size : 'sm'}
			$inverted={inverted}
			id={id}
			className={className}
		>
			{text}
		</ChipContainer>
	)
}
