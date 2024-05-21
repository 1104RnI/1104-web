import { useLayoutEffect, useRef } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useScrollStore } from '../../../store/globalUiStore'

import Hero from '../../../components/feature/hero/hero.component'
import About from '../../../components/feature/about/about.component'
import Service from '../../../components/feature/service/service.component'
import Subscription from '../../../components/feature/subscription/subscription.component'
import Achievement from '../../../components/feature/achievement/achievement.component'
import Result from '../../../components/feature/result/result.component'
import Review from '../../../components/feature/review/review.component'
import Community from '../../../components/feature/community/community.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const ref = useRef<HTMLDivElement>(null)
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isSamePage, isScrollToSubscription, resetScrollState } =
		useScrollStore()

	useLayoutEffect(() => {
		if (isScrollToSubscription) {
			setTimeout(() => {
				ref.current?.scrollIntoView({
					behavior: isSamePage ? 'smooth' : 'auto',
					block: 'center',
				})
				resetScrollState()
			}, 100)
		}
	}, [isSamePage, isScrollToSubscription, resetScrollState])

	return (
		<HomeContainer $deviceType={deviceType}>
			<Hero />
			<About />
			<Service />
			<Subscription ref={ref} />
			<div id="achievement-result-container">
				<Achievement />
				<Result />
				<Review />
			</div>
			<Community />
		</HomeContainer>
	)
}
