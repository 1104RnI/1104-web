import { create } from 'zustand'

import ultimateThumbnailImg from '../assets/img/plan-thumbnail-ultimate-img.webp'
import premiumThumbnailImg from '../assets/img/plan-thumbnail-premium-img.webp'
import freeThumbnailImg from '../assets/img/plan-thumbnail-free-img.webp'

import quantDetails_01 from '../assets/img/service-details/quant/Quant_1024_01_01_gif.gif'
import quantDetails_02 from '../assets/img/service-details/quant/Quant_1024_01_02_gif.gif'
import quantDetails_03 from '../assets/img/service-details/quant/Quant_1024_01_03_s_gif.gif'
import quantDetails_04 from '../assets/img/service-details/quant/Quant_1024_02_01_gif.gif'
import quantDetails_05 from '../assets/img/service-details/quant/Quant_1024_02_02_s_gif.gif'
import quantDetails_06 from '../assets/img/service-details/quant/Quant_1024_02_03_gif.gif'
import quantDetails_07 from '../assets/img/service-details/quant/Quant_1024_02_04_gif.gif'
import quantDetails_08 from '../assets/img/service-details/quant/Quant_1024_03_01_gif.gif'
import quantDetails_09 from '../assets/img/service-details/quant/Quant_1024_03_02_gif.gif'
import quantDetails_10 from '../assets/img/service-details/quant/Quant_1024_03_03_gif.gif'
import quantDetails_11 from '../assets/img/service-details/quant/Quant_1024_03_04_gif.gif'
import quantDetails_12 from '../assets/img/service-details/quant/Quant_1024_03_05_gif.gif'
import quantDetails_13 from '../assets/img/service-details/quant/Quant_1024_04_01_gif.gif'
import quantDetails_14 from '../assets/img/service-details/quant/Quant_1024_04_02_gif.gif'
import quantDetails_15 from '../assets/img/service-details/quant/Quant_1024_04_03.jpg'
import quantDetails_16 from '../assets/img/service-details/quant/Quant_1024_04_04_gif.gif'
import quantDetails_17 from '../assets/img/service-details/quant/Quant_1024_05_01_gif.gif'
import quantDetails_18 from '../assets/img/service-details/quant/Quant_1024_05_02.jpg'
import quantDetails_19 from '../assets/img/service-details/quant/Quant_1024_05_03_gif.gif'

export type ServicePlan = 'FREE' | 'PREMIUM' | 'ULTIMATE'

const quantDetails: string[] = [
	quantDetails_01,
	quantDetails_02,
	quantDetails_03,
	quantDetails_04,
	quantDetails_05,
	quantDetails_06,
	quantDetails_07,
	quantDetails_08,
	quantDetails_09,
	quantDetails_10,
	quantDetails_11,
	quantDetails_12,
	quantDetails_13,
	quantDetails_14,
	quantDetails_15,
	quantDetails_16,
	quantDetails_17,
	quantDetails_18,
	quantDetails_19,
]

const servieNotes: string[] = [
	'전자책 및 VOD 등의 디지털 제품은 영구 소장 가능합니다.',
	'인디케이터 및 자동화 서비스는 결제일로부터 31일간 사용 가능합니다.',
	'결제 후, 서비스 초기 셋팅을 위해 5010.cs.kr@5010.tech 이메일을 통해 결제자 이메일로 업무일 기준 24시간 이내 연락을 드립니다.',
	'사용 기간 종료 이후에는 재구매를 통해 서비스를 계속해서 이용할 수 있습니다.',
	'첫 구매 이후 재구매 시에는 초기 설치 비용을 제외한 비용만 청구됩니다.',
]

export type Service = {
	id: number
	title: string
	name: string
	plan: ServicePlan
	tag: string[]
	isFlagship: boolean
	thumbnailImg: string
	summary: string
	features: string[]
	overview: string[]
	price: number
	priceCaption: string
	details?: string[]
	notes?: string[]
}

export interface ServiceDataState {
	service: Service[]
}

export type Faq = {
	heading: string
	body: string
	details?: string[]
}

export interface FaqDataState {
	faq: Faq[]
}

type AssetOption = { title: string; value: string }

export interface AssetOptionState {
	assetOptions: AssetOption[]
}

export const useServiceDataStore = create<ServiceDataState>((set) => ({
	service: [
		{
			id: 999,
			title: 'trial',
			name: '5010 매매 전략 체험판',
			plan: 'FREE',
			tag: [],
			isFlagship: false,
			thumbnailImg: freeThumbnailImg,
			summary:
				'1:1 무료 상담부터 받고, 부담없이 5010 매매 전략 전자책 체험판과 5010 인디케이터를 무료로 체험해 보세요.',
			features: [],
			overview: [
				'5010 매매 전략 전자책 체험판',
				'5010 인디케이터 무료 체험 3일',
				'체험판 이용 중 구매시 할인 혜택 (별도 안내)',
			],
			price: 0,
			priceCaption: '체험판 이용중 구매시 할인 혜택',
		},
		{
			id: 0,
			title: '5010',
			name: '5010 매매 전략',
			plan: 'PREMIUM',
			tag: ['popular'],
			isFlagship: true,
			thumbnailImg: premiumThumbnailImg,
			summary:
				'전자책, 인디케이터, 자산설계, 그리고 진입시점 및 기술적 분석 강의 VOD까지, 5010 매매 전략의 모든 것을 누려보세요.',
			features: ['전자책', 'VOD', '인디케이터'],
			overview: [
				'5010 매매 전략 전자책',
				'5010 인디케이터 + 자산 설계',
				'5010 강의 VOD + 강의자료',
				// '진입시점 강의 VOD + 강의자료',
				// '기술적 분석 강의 VOD + 강의자료',
				'24시간 어드바이저 서포트',
			],
			price: 1550000,
			priceCaption: '최초 결제 비용 | 이후 ₩228,000',
			// TODO: 추후 D2C에서 5010 매매 전략 판매시, 상세페이지 추가 필요 (최종적으로는 서버에서 처리해야함)
			notes: servieNotes,
		},
		{
			id: 1,
			title: 'quant',
			name: '르네상스 퀀트 솔루션',
			plan: 'ULTIMATE',
			tag: ['best'],
			isFlagship: false,
			thumbnailImg: ultimateThumbnailImg,
			summary:
				'새롭게 선보이는 르네상스 퀀트 솔루션은 리스크 관리에 초점을 맞춘 개량적 투자 전략과 자동 매매 시스템을 제공해요.',
			features: ['인디케이터', '자동 매매', '대시보드 (예정)'],
			overview: [
				'24시간 자동 매매 시스템',
				// '퀀트 솔루션 전용 인디케이터',
				// '퀀트 솔루션 백테스팅',
				'퀀트 솔루션 전용 자산 설계',
				'퀀트 솔루션 전용 대시보드 (예정)',
				'24시간 어드바이저 서포트',
			],
			price: 7500000,
			priceCaption: '최초 결제 비용 | 이후 ₩50,000',
			details: quantDetails,
			notes: servieNotes,
		},
	],
}))

export const useFaqDataStore = create<FaqDataState>((set) => ({
	faq: [
		{
			heading:
				'전자책에는 지지/저항 작도법 공식이나 기술적 분석 내용이 없나요?',
			body: '5010 매매 기법은 차트 분석보다는 지속 가능한 매매를 위한 매매 원칙, 전략, 자산 운용, 멘탈 관리 등을 다룬 책입니다. 누구나 쉽게 자신만의 매매 원칙과 전략을 세워 체계적이고 안전한 매매를 할 수 있도록 돕는 것이 목적입니다. 기초적인 차트 분석은 포함되나 심도 있는 기술적 분석은 배제했습니다. 대신 강의와 5010 인디케이터를 통해 지지/저항 작도 능력을 기를 수 있게 합니다. 뛰어난 테크닉만으로는 부족하며, 반드시 자신만의 매매 원칙과 전략이 뒷받침되어야 시장에서 살아남을 수 있습니다.',
		},
		{
			heading: '그러면 강의에서 기술적 분석은 왜 설명하나요?',
			body: '강의에서 전달드리는 기술적 분석의 내용은 책에서 풀기 어려웠던 5010 팀의 노하우 전수이자, 5010 매매 전략 외에도 더 많은 것을 얻어가시려는 분들을 위해 준비된 내용입니다. 또한 아무것도 모르는 상태에서 시작하는 초심자들에게 하나 하나 교육을 통해 가이드라인을 제공해 드리는 학습 커리큘럼입니다. 따라서 이는 작은 의미에서 전자책과는 다른 목표를 가진 별개의 컨텐츠라 할 수 있습니다.',
		},
		{
			heading: '5010 인디케이터는 왜 필요하나요?',
			body: '우리는 시간적, 능력적 한계와 심리적 요인 및 인지 편향으로 시장 분석에 어려움을 겪습니다. 5010 인디케이터는 이러한 문제들을 극복하기 위함입니다. 앞으로는 AI와 알고리즘이 시장을 주도할 것이므로, 우리도 기술을 활용해야 합니다. 도태되지 말고 현명하게 투자하세요. 그럼에도 불구하고 5010 인디케이터는 분석에 국한되며, 활용과 매매 전략 수립은 별개입니다. 분석 능력을 기르고 매매 전략을 깊이 이해하려면 강의를 통해 목표를 달성하시기 바랍니다.',
			details: [
				"투자 진입 장벽 해소: 알고리즘을 통해 매매에 필요한 시장 분석과 작도를 '알아서' 해주기에 시간적 한계와 번거로움이 줄어들었습니다.",
				'매매 경험 유뮤에 따른 분석 능력 격차 해소: 알고리즘은 초심자와 경험자 모두에게 동등한 분석을 제공합니다. 이로써 분석 능력의 격차로 인한 여러 문제들을 해소할 수 있습니다.',
				'분석에 있어서 주관성의 최소화: 알고리즘은 공식에 따라 작도하기 때문에 사람이 갖는 각종 편향들과 심리적인 문제들로부터 보다 자유롭습니다.',
			],
		},
		{
			heading: '5010 인디케이터로 매매하는거면 리딩방이랑 같은 거 아닌가요?',
			body: '5010 인디케이터는 리딩방과 다릅니다. 시장 분석을 객관적이고 고도화된 방법으로 자동화하기 위한 것이지, 아무런 생각 없이 매매하라는 것이 아닙니다. 전자책과 교육을 통해 인디케이터를 어떻게 활용하고 매매해야 하는지 원칙과 사례를 들어 설명하고 있으며, 잘못된 방식으로 매매하는 분들에게는 피드백을 제공합니다. 5010 인디케이터와 알러트는 바쁜 현대인에게 시간 효율성, 매매 객관성, 분석의 고도화를 제공하기 위한 것임을 강조드립니다.',
		},
		{
			heading:
				'5010 인디케이터가 분석과 작도도 알아서 해주는데 굳이 공부를 왜 해야 하나요?',
			body: '5010 인디케이터는 자율 주행과 같습니다. 자율 주행을 사용하려면 기본적인 운전 능력이 필요한 것처럼, 인디케이터를 활용하려면 매매에 대한 기본 지식과 경험이 필요합니다. 매수와 매도는 사람이 판단해야 하며, 승률을 높이는 공식도 사람이 알아내야 합니다. 시장 상황에 따라 매매를 쉬거나 관망할 때도 있는데, 이는 경험에서 나옵니다. 운전 경험이 있어야 자율 주행의 가치를 알 수 있듯이, 매매 지식이 있어야 인디케이터를 잘 활용할 수 있습니다. 공부와 함께 5010 인디케이터를 100% 활용하시기 바랍니다.',
		},
		{
			heading: '5010 매매 전략만 있으면 저도 부자가 될 수 있나요?',
			body: '5010 매매 전략은 100% 성공을 보장하지 않습니다. 우리는 과학적이고 수학적인 근거로 돈 버는 방법을 알려드리고, 확률이 높은 시스템을 구축해 드릴 뿐입니다. 우리는 투자를 권유하지 않고, 시행착오를 겪지 않기를 바라는 마음으로 책을 썼습니다. 우리는 제대로 된 공부법을 알려줄 뿐, 노력하는 사람만이 성공할 수 있습니다. 우리는 마케팅 없이 바이럴로 성장했고, 검증된 레퍼런스를 보유하고 있습니다. 선택과 노력은 여러분의 몫입니다.',
		},
	],
}))

export const useAssetOptionStore = create<AssetOptionState>((set) => ({
	assetOptions: [
		{ title: '2,000만 원', value: '2000' },
		{ title: '1,000만 원', value: '1000' },
		{ title: '400만 원', value: '400' },
		{ title: '100만 원', value: '100' },
	],
}))
