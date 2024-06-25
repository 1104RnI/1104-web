import { create } from 'zustand'

import ultimateThumbnailImg from '../assets/img/plan-thumbnail-ultimate-img.webp'
// import premiumThumbnailImg from '../assets/img/plan-thumbnail-premium-img.webp'
// import freeThumbnailImg from '../assets/img/plan-thumbnail-free-img.webp'

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

const serviceInfo: string[] = [
	'제작자 또는 공급자: TEAM 5010',
	'이용조건: 상품 상세 참조',
	'상품 제공 방식: 상품 상세 참조',
	'최소 시스템 사양, 필수 소프트위어: 상품 상세 참조',
	'청약철회 또는 계약해지의 효과: 상품 상세 참조',
	'이용조건: 상품 상세 참조',
	'소비자상담전화: (TEAM 5010 고객센터) 010-7520-1301',
]

export type Service = {
	id: number
	title: string
	name: string
	plan: string
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
	serviceInfo?: string[]
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
			id: 1,
			title: 'dataSolution',
			name: '데이터 분석 및 시각화 솔루션',
			plan: 'RENAISSANCE',
			tag: ['best'],
			isFlagship: true,
			thumbnailImg: ultimateThumbnailImg,
			summary:
				'AI & 머신 러닝을 통한 알고리즘의 지속적 고도화와 최적화를 바탕으로 빅데이터 분석 및 시각화를 제공하는 맞춤형 통합 솔루션이에요.',
			features: ['빅데이터 수집 및 분석', '데이터 시각화', '머신러닝 고도화'],
			overview: [
				'빅테이터 수집 및 분석',
				'데이터 시각화 및 맞춤형 알고리즘 설계',
				'AI / 머신러닝 통한 솔루션 지속적 고도화 및 최적화',
				'24시간 어드바이저 서포트',
			],
			price: 7500000,
			priceCaption: '최초 결제 비용 | 이후 ₩50,000',
			details: quantDetails,
			notes: servieNotes,
			serviceInfo: serviceInfo,
		},
	],
}))

export const useFaqDataStore = create<FaqDataState>((set) => ({
	faq: [
		{
			heading: '데이터 분석 및 시각화 솔루션을 사용하면 어떤 이익이 있나요?',
			body: '저희 서비스를 통해 여러분은 데이터 기반의 의사결정을 할 수 있게 돼요. 빅데이터 분석으로 시장 트렌드를 파악하고, 고객 행동을 예측하며, 운영 효율성을 개선할 수 있어요. 이는 비용 절감, 매출 증대, 그리고 전반적인 비즈니스 경쟁력 향상으로 이어질 수 있어요.',
		},
		{
			heading: '데이터 분석 결과를 어떻게 활용할 수 있나요?',
			body: '분석 결과는 다양한 방식으로 활용 가능해요! 예를 들어, 마케팅 전략 수립, 제품 개발, 재고 관리 최적화, 고객 서비스 개선 등에 직접적으로 적용할 수 있어요. 저희는 분석 결과를 쉽게 이해하고 적용할 수 있도록 직관적인 대시보드와 보고서를 제공할 예정이에요.',
		},
		{
			heading: '데이터 보안은 어떻게 보장되나요?',
			body: '데이터 보안은 저희의 최우선 과제에요. 최신 암호화 기술을 사용하여 데이터를 안전하게 저장하고 전송하고 있어요. 또한, 철저한 접근 제어 정책을 통해 권한이 있는 인원만 데이터에 접근할 수 있도록 관리하고 있어요. 정기적인 보안 감사와 업데이트를 통해 지속적으로 보안 수준을 유지하고 있어요.',
		},
		{
			heading: 'AI와 머신러닝 기술이 실제로 어떻게 적용되나요?',
			body: 'AI와 머신러닝은 데이터 분석의 정확도와 효율성을 크게 향상시키는 데 사용되고 있어요. 예를 들어, 고객 행동 예측 모델, 이상 감지 시스템, 자동화된 의사결정 지원 시스템 등에 적용돼요. 이러한 기술은 대량의 데이터에서 패턴을 찾아내고, 시간이 지날수록 더욱 정확한 예측과 인사이트를 제공해요.',
		},
		{
			heading: '소규모 기업도 이러한 데이터 분석 서비스를 이용할 수 있나요?',
			body: '물론이죠! 저희 서비스는 기업의 규모에 관계없이 모든 기업과 심지어 개인 고객까지 맞춤형 솔루션을 제공해요. 소규모 기업을 위해 비용 효율적인 패키지와 확장 가능한 솔루션을 마련하고 있어요. 데이터의 양이 적더라도 질적인 분석을 통해 의미 있는 인사이트를 도출할 수 있으며, 기업의 성장에 따라 서비스를 쉽게 확장할 수 있어요. 또한, 직관적인 인터페이스와 교육 프로그램을 통해 데이터 전문가가 아니더라도 쉽게 사용할 수 있도록 지원해 드려요.',
		},
		{
			heading: '지속적인 기술 지원과 업데이트는 어떻게 이루어지나요?',
			body: '저희는 서비스 도입 이후에도 지속적인 기술 지원을 제공해요. 정기적인 시스템 점검과 성능 최적화를 실시하며, 최신 기술 동향을 반영한 업데이트를 제공해요. 또한, 24/7 고객 지원 센터를 운영하여 문의사항이나 문제 발생 시 신속하게 대응하고 있어요. 분기별로 성과 리뷰 미팅을 통해 서비스 개선 방안을 지속적으로 논의하기도 해요.',
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
