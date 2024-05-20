import { ReviewItem } from '../../../store/homeContentsStore'
import { DeviceType } from '../../../store/deviceTypeStore'

export type ReviewItemProps = ReviewItem & { id?: string; className?: string }

export type ReviewItemContainerProps = {
	$deviceType: DeviceType
}
