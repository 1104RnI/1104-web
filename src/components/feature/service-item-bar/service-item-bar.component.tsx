import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { ServiceItemBarProps } from './service-item-bar.types'
import { ServiceItemBarContainer } from './service-item-bar.styles'

import Button from '../../global/button/button.component'

export default function ServiceItemBar(props: ServiceItemBarProps) {
	const { item, showBar } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleCheckout = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(
			`${ROUTES.CHECKOUT}?id=${item.id}&name=${item.name}&plan=${item.plan}`,
		)
	}

	return (
		<ServiceItemBarContainer
			$deviceType={deviceType}
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: showBar ? 1 : 0 }}
			transition={{ duration: 0.5 }}
			id="service-item-bar-container"
		>
			<div id="service-item-bar-contents-container">
				{deviceType !== 'mobile' ? (
					<div id="service-item-bar-left-column">
						<img
							id="service-item-bar-img"
							src={item.thumbnailImg}
							alt="service-item-bar-img"
						/>
						<div id="service-item-bar-text-container">
							<h2 id="service-item-bar-heading">
								{item.name} | {item.plan}
							</h2>
							<span id="service-item-bar-price">
								₩{item.price.toLocaleString()}
							</span>
						</div>
					</div>
				) : null}
				<Button
					accessibleName="service-item-bar-container"
					id="service-item-bar-button"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					icon={<FontAwesomeIcon icon={faCreditCard} />}
					text="서비스 구매하기"
					size={deviceType === 'mobile' ? 'md' : 'sm'}
					handleClick={handleCheckout}
				/>
			</div>
		</ServiceItemBarContainer>
	)
}
