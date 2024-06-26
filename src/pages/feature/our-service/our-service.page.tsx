import { MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { useOurServiceContentsStore } from '../../../store/contents/ourServiceContentsStore'
import { useScrollStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { OurServiceContainer } from './our-service.styles'

import Hero from '../../../components/global/hero/hero.component'
import OurServiceItem from '../../../components/feature/our-service-item/our-service-item.component'
import Button from '../../../components/global/button/button.component'

export default function OurService() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useOurServiceContentsStore((state) => state.hero)
	const serviceList = useOurServiceContentsStore((state) => state.serviceList)
	const subscribeService = useOurServiceContentsStore(
		(state) => state.subscribeService,
	)
	const location = useLocation()
	const navigate = useNavigateWithScroll()
	const updateScrollState = useScrollStore((state) => state.updateScrollState)

	const handleFreeTrial = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.FREE_TRIAL)

	const handleUseService = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(ROUTES.HOME)
		location.pathname === ROUTES.HOME
			? updateScrollState('isSamePage', true)
			: updateScrollState('isSamePage', false)
		updateScrollState('isScrollToSubscription', true)
	}

	const handleNavigate = (e: MouseEvent<HTMLButtonElement>, itemId: number) => {
		// HACK: 5010 매매 전략 D2C 판매 준비 전까지
		if (itemId === 0) {
			window.open(
				'https://kmong.com/gig/455172',
				'_blank',
				'noopener,noreferrer',
			)
		} else navigate(`${ROUTES.SERVICE_ITEM.createPath(itemId)}`)
	}

	return (
		<OurServiceContainer
			$deviceType={deviceType}
			$imageUrl={subscribeService.image}
		>
			<Hero
				id="our-service-hero"
				image={image}
				category={text.category}
				heading={text.heading}
				subheading={text.subheading}
				fullScreen={false}
				// showArrow={false}
				bodyContents={
					<>
						<hr id="our-service-hero-horizontal-line" />
						<div id="our-service-hero-body-container">
							{text.body.map((item, index) => (
								<p key={index} className="our-service-hero-body">
									{item}
								</p>
							))}
						</div>
					</>
				}
			/>
			<div id="our-service-contents-container">
				<div className="our-service-contents-row">
					{serviceList.map((item, index) => (
						<OurServiceItem
							key={index}
							imageUrl={item.image}
							heading={item.heading}
							subheading={item.subheading}
							body={item.body}
							freeTrial={item.freeTrial}
							features={item.features}
							handleSeeDetails={(e) => handleNavigate(e, item.id)}
							handleFreeTrial={handleFreeTrial}
						/>
					))}
				</div>
				<div className="our-service-contents-row">
					<div id="our-service-subscribe-service-container">
						<h3 id="our-service-subscribe-service-heading">
							{subscribeService.heading.toUpperCase()}
						</h3>
						<p id="our-service-subscribe-service-body">
							{subscribeService.body}
						</p>
						<Button
							id="our-service-subscribe-service-button"
							accessibleName="our-service-subscribe-service-container"
							appearance="accent"
							hierarchy="primary"
							stroke="filled"
							shape="rounding"
							text="서비스 이용하기"
							handleClick={handleUseService}
						/>
					</div>
				</div>
			</div>
		</OurServiceContainer>
	)
}
