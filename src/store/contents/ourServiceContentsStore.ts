import { create } from 'zustand'

import backgroundImage from '../../assets/img/home-about-image.webp'
// import educationImage from '../../assets/img/service-image-1.webp'
import quantImage from '../../assets/img/plan-thumbnail-ultimate-img.webp'
import bannerBackgroundImage from '../../assets/img/banner-background-img.webp'

type Hero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
		body: string[]
	}
}

type Service = {
	image: string
	id: number
	heading: string
	subheading: string
	features: string[]
	body: string[]
	freeTrial: boolean
}

type SubscribeService = {
	image: string
	heading: string
	subheading: string
	body: string
}

export interface OurServiceContentsState {
	hero: Hero
	serviceList: Service[]
	subscribeService: SubscribeService
}

export const useOurServiceContentsStore = create<OurServiceContentsState>(
	(set) => ({
		hero: {
			image: backgroundImage,
			text: {
				category: 'OUR SERVICE',
				heading: 'The Most Advanced Strategies & Technologies In Your Hands',
				subheading: '가장 진보된 데이터 전략과 기술들을 당신 손 안에.',
				body: [
					'1104 R&I는 첨단 기술과 전문적인 노하우의 융합을 통해 기업들에게 명확하고 과학적인 데이터 분석 전략과 시각화 도구를 제공합니다. 데이터 활용에 관심있는 개인부터 스타트업, 그리고 대규모 데이터를 다루는 대기업까지, 모든 고객들이 활용할 수 있는 다양한 수준의 서비스들이 준비되어 있습니다. 이를 통해 기업들이 데이터 기반의 현명한 의사결정을 내릴 수 있도록 지원합니다.',
					'우리는 고객 개개의 성장과 성공을 위해 최선을 다하며, 끊임없는 혁신을 통해 데이터 분석의 미래를 열어가는 파트너가 되고자 합니다. 고객들은 우리의 서비스를 통해 빅데이터와 AI에 대한 이해를 깊이 하고, 첨단 기술의 힘을 활용하여 더 나은 비즈니스 결과를 얻을 수 있을 것입니다. 1104 R&I와 함께 데이터 기반 혁신을 향한 여정을 시작하고, 여러분의 새로운 성장 지평을 열어보세요.',
				],
			},
		},
		serviceList: [
			{
				image: quantImage,
				id: 1,
				heading: '르네상스 | 데이터 분석 및 시각화 솔루션',
				subheading: '전통적 투자의 한계를 넘어',
				features: ['빅데이터 수집 및 분석', '데이터 시각화', '머신러닝 고도화'],
				body: [
					'AI 기반 데이터 분석 솔루션은 최첨단 머신러닝 기술을 활용하여 복잡한 빅데이터 패턴을 심층 분석하고, 이를 직관적으로 시각화하여 제공하는 맞춤형 통합 솔루션입니다. 지속적으로 자가 학습하며 고도화되는 알고리즘을 통해, 데이터 분석과 시각화를 무기로 최적의 전략을 수립합니다.',
					'이를 통해 고객들은 급변하는 비즈니스 환경에서 숨겨진 인사이트를 발견하고, 데이터 기반의 정확한 의사결정으로 새로운 차원의 경쟁력을 확보할 수 있습니다.',
				],
				freeTrial: false,
			},
		],
		subscribeService: {
			image: bannerBackgroundImage,
			heading: 'Start your investing journey today',
			subheading: 'with 1104 R&I',
			body: '금융 전문가와 수학자들이 설계한 최첨단 데이터 분석 및 시각화 솔루션과 함께 새로운 여정을 시작해 보세요.',
		},
	}),
)
