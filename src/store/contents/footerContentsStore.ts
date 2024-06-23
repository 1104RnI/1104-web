import { create } from 'zustand'

import logoImage from '../../assets/logo/1104-logo-white.svg'

export interface FooterContentsState {
	logoUrl: string
	companyInfo: {
		name: string
		ceo: string
		address: string
		tel: string
		regNum: string
		onlineBizNum: string
		privacyOfficer: string
		csNum: string
		csMail: string
		hosting: string
	}
	simpleDisclaimer: string[]
}

export const useFooterContentsStore = create<FooterContentsState>(() => ({
	logoUrl: logoImage,
	companyInfo: {
		name: '주식회사 오공일공',
		ceo: '노승준',
		address: '경기도 용인시 수지구 현암로 108',
		tel: '010-7251-1301', // TODO: 070 인터넷 전화번호로 변경 필요
		regNum: '202-81-68226',
		onlineBizNum: '', // TODO: 통신 판매 사업자 등록 필요
		privacyOfficer: '임채선',
		csNum: '010-7251-1301',
		csMail: '5010.cs.kr@5010.tech',
		hosting: '(주)가비아',
	},
	simpleDisclaimer: [
		'거래에는 위험이 따르며, 대부분의 데이트레이더와 공식 및 차트 기반 투자 전략을 사용하는 투자자들은 손실을 봅니다. 이 사이트와 TEAM 5010이 제공하는 제품 및 서비스는 정보 제공과 교육 목적으로만 제공됩니다. 모든 콘텐츠는 당사의 서비스를 시연하기 위해 사후에 선택된 가상의 내용으로 간주해야 하며, 금융 조언으로 해석해서는 안 됩니다. 증권, 상품 및 기타 투자를 매수, 매도, 보유 또는 거래하는 결정에는 위험이 수반되며, 자격을 갖춘 금융 전문가의 조언에 따라 내리는 것이 가장 좋습니다. 과거의 성과가 미래의 결과를 보장하지는 않습니다.',
		'가상 또는 시뮬레이션된 성과 결과에는 특정 제한 사항이 있습니다. 실제 성과 기록과 달리, 시뮬레이션된 결과는 실제 거래를 나타내지 않습니다. 또한, 거래가 실행되지 않았기 때문에 결과는 유동성 부족과 같은 특정 시장 요인의 영향을 과소 또는 과대 평가했을 수 있습니다. 일반적으로 시뮬레이션된 거래 프로그램은 사후 판단의 이점을 통해 설계되며, 과거 정보를 기반으로 합니다. 어떠한 계정도 표시된 것과 유사한 이익 또는 손실을 달성할 가능성이 있다는 것을 보장하지 않습니다.',
		'이 웹사이트에 나타나는 고객 후기는 다른 고객을 대표하지 않을 수 있으며, 향후 성과나 성공을 보장하지 않습니다.',
		'차트 플랫폼을 위한 기술 분석 도구 제공업체로서 당사는 고객의 개인 거래 계좌나 중개 계좌에 접근할 수 없습니다. 따라서 당사가 제공하는 콘텐츠나 도구를 기반으로 고객이 전체 트레이더보다 더 나은 성과를 거둔다고 믿을 이유가 없습니다.',
		'이 사이트에 사용된 차트는 대부분의 도구가 구축된 tradingview에서 제공합니다. tradingview®는 tradingview, Inc.의 등록 상표입니다. (www.tradingview.com) tradingview®는 여기에 설명된 서비스의 소유자, 개발자 또는 제공자와 제휴하지 않습니다.',
		'이것은 당사의 전체 면책 조항을 나타내지 않으므로, 전체 면책 조항을 꼭 읽어 보시기 바랍니다.',
	],
}))
