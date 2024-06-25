import { create } from 'zustand'

import backgroundImage from '../../assets/img/home-about-image.webp'
// import mockupImage from '../../assets/img/home-mockup-image.webp'
import serviceImage1 from '../../assets/img/service-image-1.webp'
import serviceImage2 from '../../assets/img/service-image-2.webp'
import serviceImage3 from '../../assets/img/service-image-3.webp'
import resultImage1 from '../../assets/img/result-persona-image-1.webp'
import resultImage2 from '../../assets/img/result-persona-image-2.webp'
import resultImage3 from '../../assets/img/result-persona-image-3.webp'
import resultImage4 from '../../assets/img/result-persona-image-4.webp'
import communityImage from '../../assets/img/banner-background-img.webp'

export type AchievementItem = {
	caption: string
	heading: string
	body: string
	linkUrl: string
}

export type ResultItem = {
	voice: string
	name: string
	imgUrl: string
	period: string
	result: string
	note: string
	comment: string
	linkUrl: string
}

export type ReviewItem = {
	name: string
	body: string
	platform: 'KMONG' | 'WADIZ'
}

export interface HomeContentsState {
	home: {
		image: {
			backgroundImage: string
		}
		text: {
			display: string
			subheading: string
			ctaButtonText: string
			linkText: string
		}
	}
	about: {
		text: {
			heading: string
			body: string
			caption: string
		}
		items: { subheading: string; heading: string }[]
	}
	service: {
		items: {
			imgUrl: string
			id: number | null
			caption: string
			heading: string
			body: string
		}[]
	}
	achievement: {
		heading: string
		items: AchievementItem[]
	}
	result: {
		heading: string
		items: ResultItem[]
	}
	review: {
		items: ReviewItem[]
	}
	community: {
		image: string
		text: {
			caption: string
			heading: string
			body: string
		}
		linkUrl: string
	}
}

export const useHomeContentsStore = create<HomeContentsState>((set) => ({
	home: {
		image: {
			backgroundImage: backgroundImage,
		},
		text: {
			display: 'ELEVATE YOUR BUSINESS JOURNEY',
			subheading:
				'공학자와 수학자들이 설계한 최첨단 데이터 분석 및 시각화 솔루션으로 여러분의 비즈니스를 한 층 더 향상해 보세요.',
			ctaButtonText: '지금 바로 서비스 이용하기 →',
			linkText: '1:1 상담받고 먼저 무료로 체험해 보세요!',
		},
	},
	about: {
		text: {
			heading:
				'우리는 모든 산업 분야에서 사용할 수 있는 데이터 분석 및 시각화 시스템을 만들고 있어요.',
			body: '1104 R&I는 각 분야의 전문가들과 함께 금융 서비스부터 운송, 물류, 여행 서비스 등의 다양한 산업 분야에서 사용할 수 있는 데이터 분석 및 시각화 기술을 제공하고 있어요. 나아가 1104 R&I는 최신 기술과 응용 수학의 접목을 통해 이미 다가온 데이터 시대 속, 획기적인 토탈 데이터 솔루션을 만들고자 노력하고 있어요.',
			caption: '2023. 3. ~ 현재까지',
		},
		items: [
			{
				subheading: '함께한 고객들',
				heading: '1,274+',
			},
			{
				subheading: 'R&D 기간',
				heading: '4년+',
			},
			{
				subheading: '누적 연구 투자액',
				heading: '5억 원+',
			},
		],
	},
	service: {
		items: [
			{
				imgUrl: serviceImage1,
				id: 0,
				caption: 'DATA ANALYSIS',
				heading: '빅데이터 수집 및 분석 알고리즘 제작',
				body: '다양한 산업 분야에서 발생하는 방대한 양의 빅데이터를 효율적으로 수집하고 분석하기 위한 최적화된 알고리즘을 제작하여 공급하고 있어요. 고객의 요구사항과 데이터 특성을 고려한 맞춤형 알고리즘 개발로, 복잡한 데이터 속에서 숨겨진 패턴과 인사이트를 발견하고 의미 있는 결과를 도출해요.',
			},
			{
				imgUrl: serviceImage2,
				id: 1,
				caption: 'DATA VISUALISATION',
				heading: '데이터 시각화 및 최적화 기술 공급',
				body: '수집된 방대한 양의 데이터를 분석하여 그 안에 숨겨진 규칙성과 패턴을 찾아내고, 이를 바탕으로 미래 변동성을 예측하며 최적화된 결과를 제공하고 있어요. 또한 강력하고 직관적인 시각화 도구를 활용하여 복잡한 데이터를 쉽게 이해하고 해석할 수 있도록 지원해요.',
			},
			{
				imgUrl: serviceImage3,
				id: null,
				caption: 'MACHINE LEARNING',
				heading: 'AI & 머신러닝으로 솔루션 고도화',
				body: '최신 인공지능과 머신러닝 기술을 적용하여 지속적으로 학습하고 발전하는 정교하고 고도화된 데이터 분석 및 시각화 솔루션을 개발하고 있어요. 이 솔루션은 데이터의 패턴을 자동으로 인식하고 학습하여 시간이 지날수록 더욱 정확하고 신뢰성 높은 결과를 제공해요.',
			},
		],
	},
	achievement: {
		heading: '1104 R&I가 지금까지 달성한 성과들',
		items: [
			{
				caption: '2023 KMONG AWARDS',
				heading: '신인상 수상',
				body: '최고의 전문가를 뽑는 2023년 크몽 어워즈에서 당년 신규 론칭한 서비스 중 우수 성과 TOP10에 선정, 신인상 수상',
				linkUrl: 'https://kmong.com/events/kmong-awards/2023',
			},
			{
				caption: 'KMONG 상위 2% 프리미엄 서비스',
				heading: 'PRIME 달성',
				body: '100만 건의 크몽 거래 분석과 인터뷰, 레퍼런스 체크를 통해 크몽에서 직접 엄선한 상위 2% 전문가 서비스에 선정',
				linkUrl: 'https://kmong.com/gig/475614',
			},
			{
				caption: 'KMONG 전문가 최고 등급',
				heading: 'MASTER 달성',
				body: '2024년 2월 기준, 누적 판매 건수 421건, 고객 만족도 5.0, 주문 성공률 100%, 크몽 전문가 최고 등급 달성 및 유지',
				linkUrl: 'https://kmong.com/gig/455172',
			},
			{
				caption: 'WADIZ 펀딩',
				heading: '4억+ 달성',
				body: '1,106명 펀딩 참여하여 2024. 02. 21. 펀딩 성공적으로 종료, 2024년 4월 기준 고객 만족도 5.0 (46개 리뷰) 달성',
				linkUrl: 'https://www.wadiz.kr/web/campaign/detail/224157',
			},
		],
	},
	result: {
		heading: '1104 R&I를 만나고 달라진 투자자들',
		items: [
			{
				voice:
					'그 흔한 주식과 코인 투자 경험도 없고 차트조차 본 적 없는데 가능할까?',
				name: 'Jaden',
				imgUrl: resultImage1,
				period: '2023. 04. 25. ~ 07. 12. 기준 (3달)',
				result: '600%',
				note: '이후 5010팀 스카웃',
				comment:
					'차트를 본적도 없던 수강생조차 단지 노력만으로 값진 성과를 만들어 냈습니다.',
				linkUrl: '',
			},
			{
				voice:
					'내 나이 45, 아이들 수저를 금으로 만들어주고 싶은데 너무 늦진 않았을까?',
				name: '아쿠마',
				imgUrl: resultImage2,
				period: '2023. 06. 12. ~ 07. 14. 기준 (1달)',
				result: '200%',
				note: '승률 90% 이상 유지',
				comment:
					'45세의 나이, 그리고 처음 접하는 재테크. 꾸준한 연습만으로 결국 해내셨습니다.',
				linkUrl: '',
			},
			{
				voice:
					'다년간 트레이딩을 했는데도 시드가 늘지 않아, 분명 이유가 있겠지?',
				name: '최태민',
				imgUrl: resultImage3,
				period: '2023. 06. 14. ~ 06. 22. 기준 (1주)',
				result: '200%',
				note: '1주간 $15,000 수익',
				comment:
					'기본기가 탄탄한 수강생이 1104 R&I를 만나면 그 시너지는 더욱 극대화될 수 있습니다.',
				linkUrl: '',
			},
			{
				voice:
					'정말 안해본 공부가 없고 안써본 보조 지표가 없는데, 뭐가 문제지?',
				name: '얼마나좋아',
				imgUrl: resultImage4,
				period: '2023. 04. 06. ~ 07. 22. 기준 (3달)',
				result: '1,000%',
				note: '3달간 $100,000 수익',
				comment:
					'경력자일수록 단순 명확한 5010 매매 전략의 진가를 알아보고 계십니다.',
				linkUrl: '',
			},
		],
	},
	review: {
		items: [
			{
				name: 'JHQ',
				body: '이 책은 읽자마자 느낌이 오더군요. 아, 되는 방법이다... 욕심만 버리면 월 1억 달성도 꿈이 아니라는 생각이 들었습니다. 게다가 쉽습니다. 단언컨데 이렇게 쉬우면서 실현 가능성 높은 매매법은 없었다고 생각합니다.',
				platform: 'KMONG',
			},
			{
				name: '아*****',
				body: '기초 전자책을 먼저 구매 후에 코칭 서비스의 오픈을 기다렸습니다. 1등으로 구매하고 싶어 회사 회의 중에도 몰래 급히 결제할 만큼 이 서비스를 간절히 기다렸습니다.',
				platform: 'KMONG',
			},
			{
				name: 'rab*****',
				body: '전자책만 구입하였고 다독 및 백테스팅 결과 확신이 생겨 추가 코칭까지 신청하게 되었습니다. 혹시 고민하고 계신다면 바로 코칭으로 오셔도 될 것 같습니다!',
				platform: 'KMONG',
			},
			{
				name: '윤*****',
				body: '우연히 5010 매매 기법 전자책을 먼저 구매하게 되었고, 책 내용이 예상했던 것보다 훨씬 좋아서 코칭편까지 구매하게 되었습니다.',
				platform: 'KMONG',
			},
			{
				name: 'K79*****',
				body: '전자책 구매 후 이거다! 싶은 마음에 서비스 업그레이드를 받아 코칭을 받았습니다.',
				platform: 'KMONG',
			},
			{
				name: '백*****',
				body: '5010 전자책은 처음 열어보는 순간부터, 생각과 기대 이상의 내용으로 스스로에 대한 기준을 잡는데 큰 도움이 됩니다.',
				platform: 'KMONG',
			},
			{
				name: '컬*****',
				body: '일단 전자책만으로도 많은 인사이트를 얻었다고 생각했는데, 오프라인 강의가 찐이었네요.',
				platform: 'KMONG',
			},
			{
				name: '익명의 서포터',
				body: '투자자들에게 과한 욕심을 부추기는 것이 아니라, 고정시드매매와 주기점진매매를 통한 확실한 전략으로 차분히 우리의 계좌를 우상향 하도록 5010 매매법이 설계되어 있어 감사했습니다.',
				platform: 'WADIZ',
			},
			{
				name: '익명의 서포터',
				body: "이번 펀딩은 저에게 투자의 기본적인 생각을 다시 한 번 생각하게 만들어 준 책이었습니다. 이 책을 정독하고 마지막에 든 생각은 딱 하나였습니다. '이 방법이면 나도 해볼 수 있겠는데? 이렇게만 진짜 내가 내 자신을 관리한다면 잘 할 수 있겠는데?' 였습니다.",
				platform: 'WADIZ',
			},
			{
				name: '익명의 서포터',
				body: '그동안 차트 분석하는 많은 책을 읽어봤지만, 이렇게 자산관리에 대한 좋은 내용이 담긴 책은 처음입니다. 약간 퀀트투자 같으면서 비트코인만 가지고 매매를 하고 과학적인 접근 또한 가능하게 설명해 주십니다.',
				platform: 'WADIZ',
			},
			{
				name: '김동희',
				body: "저는 약 5년 간 국내 대기업 증권사 PB 및 투자관련 회사에서 근무한 경험이 있습니다. 'Simple is the Best' 지금까지 더 좋은 보조지표를 찾기 위해, 그리고 더 높은 확률을 찾기 위해 노력했던 것들이 비워지면서 오히려 제 정신을 더 맑게 만들었습니다.",
				platform: 'WADIZ',
			},
		],
	},
	community: {
		image: communityImage,
		text: {
			caption: 'JOIN 1104 R&I TODAY',
			heading: 'START YOUR BUSINESS JOURNEY TODAY',
			body: '금융 전문가와 수학자들이 설계한 최첨단 데이터 분석 및 시각화 솔루션과 함께 새로운 여정을 시작해 보세요.',
		},
		linkUrl: '',
	},
}))
