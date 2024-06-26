import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useHomeContentsStore } from '../../../store/contents/homeContentsStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { ServiceContainer } from './service.styles'

import Button from '../../global/button/button.component'

export default function Service() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useHomeContentsStore((state) => state.service)
	const navigate = useNavigateWithScroll()

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(`${ROUTES.SERVICE_ITEM.createPath(1)}`)

	return (
		<ServiceContainer $deviceType={deviceType} id="service-list-container">
			{items.map((item, index) => (
				<div key={index} className="item-container">
					<div className="image-container">
						<img
							src={item.imgUrl}
							alt={item.caption}
							className="service-image"
						/>
					</div>
					<div className="text-container">
						<span className="caption">{item.caption}</span>
						<h2 className="heading">{item.heading}</h2>
						<p className="body">{item.body}</p>
					</div>
				</div>
			))}
			<Button
				accessibleName="service-list-container"
				appearance="neutral"
				hierarchy="secondary"
				stroke="outlined"
				shape="rounding"
				text="서비스 자세히 보기"
				handleClick={handleSeeDetails}
			/>
		</ServiceContainer>
	)
}
