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
}

export const useFooterContentsStore = create<FooterContentsState>(() => ({
	logoUrl: logoImage,
	companyInfo: {
		name: '주식회사 오공일공',
		ceo: '노승준',
		address: '경기도 용인시 수지구 현암로 108',
		tel: '031-894-5019',
		regNum: '202-81-68226',
		onlineBizNum: '2024-용인수지-1350',
		privacyOfficer: '임채선',
		csNum: '010-7251-1301',
		csMail: '5010.cs.kr@5010.tech',
		hosting: '(주)가비아',
	},
}))
