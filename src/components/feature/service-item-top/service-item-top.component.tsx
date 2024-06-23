import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { ServiceItemTopProps } from './service-item-top.types'
import { ServiceItemTopContainer } from './service-item-top.styles'

import Chip from '../../global/chip/chip.component'
import Card from '../../global/card/card.component'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

export default function ServiceItemTop(props: ServiceItemTopProps) {
	const { item } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '서비스 구매 관련 문의사항'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	const handleCheckout = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(
			`${ROUTES.CHECKOUT}?id=${item.id}&name=${item.name}&plan=${item.plan}`,
		)
	}

	return (
		<ServiceItemTopContainer $deviceType={deviceType}>
			<img
				id="service-item-img"
				src={item.thumbnailImg}
				alt="service-item-img"
			/>
			<div id="service-item-title-container">
				<div id="service-item-heading-container">
					{item.tag.length !== 0 ? (
						<div id="service-item-tags-container">
							{item.tag.map((item, index) => (
								<Chip
									key={index}
									text={item.toUpperCase()}
									appearance="accent"
									hierarchy="primary"
									stroke="filled"
									shape="rounded3"
									size="sm"
									inverted
								/>
							))}
						</div>
					) : null}
					<h1 id="service-item-name">{item.name}</h1>
					<span id="service-item-subheading">{item.plan} PLAN</span>
				</div>
				<Card className="service-item-card" hierarchy="secondary" opacity={0.1}>
					<ul className="service-item-ul">
						{item.overview.map((item, index) => (
							<li key={index} className="service-item-li">
								{item}
							</li>
						))}
					</ul>
				</Card>
				<div id="service-item-price-container">
					<span id="service-item-price">₩ {item.price.toLocaleString()}</span>
					<span id="service-item-price-caption">{item.priceCaption}</span>
				</div>
				<Button
					id="service-item-purchase-button"
					accessibleName="service-item-title-container"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					icon={<FontAwesomeIcon icon={faCreditCard} />}
					text="서비스 구매하기"
					handleClick={handleCheckout}
				/>
				<TextLink
					appearance="neutral"
					hierarchy="secondary"
					size="sm"
					description="도움이 필요하시다면"
					text="여기를 클릭해 주세요."
					handleClick={handleGetHelp}
				/>
			</div>
		</ServiceItemTopContainer>
	)
}
