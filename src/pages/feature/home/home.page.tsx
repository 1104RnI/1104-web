import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import Hero from '../../../components/feature/hero/hero.component'
import About from '../../../components/feature/about/about.component'
import Service from '../../../components/feature/service/service.component'
import Achievement from '../../../components/feature/achievement/achievement.component'
import Result from '../../../components/feature/Result/result.component'
import Review from '../../../components/feature/review/review.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<HomeContainer $deviceType={deviceType}>
			<Hero />
			<About />
			<Service />
			<div id="achievement-result-container">
				<Achievement />
				<Result />
				<Review />
			</div>
		</HomeContainer>
	)
}
