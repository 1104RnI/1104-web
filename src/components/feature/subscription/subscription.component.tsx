import { forwardRef } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useServiceDataStore } from '../../../store/serviceDataStore'

import { SubscriptionContainer } from './subscription.styles'

import SubscriptionItem from './subscription-item/subscription-item.component'

const Subscription = forwardRef<HTMLDivElement>((props, ref) => {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { service } = useServiceDataStore()

	return (
		<SubscriptionContainer
			$deviceType={deviceType}
			// $isScrolling={isScrolling}
			ref={ref}
		>
			<div id="subscription-section-contents-container">
				<div id="section-heading-container">
					<span id="section-category-text">DATA SOLUTION</span>
					<h1 id="section-heading">
						지금 바로 1104 R&I의 데이터 솔루션 서비스를 만나보세요.
					</h1>
				</div>
				{service.map((item, index) => (
					<SubscriptionItem
						key={index}
						item={item}
						hierarchy={item.isFlagship ? 'primary' : 'secondary'}
					/>
				))}
			</div>
		</SubscriptionContainer>
	)
})

export default Subscription
