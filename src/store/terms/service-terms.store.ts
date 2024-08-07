import { create } from 'zustand'
import { fetchMarkdownFile } from '../../utils/markdown.utils'

import privacyAgreement from '../../data/privacy-agreement.md'
import policyTerms from '../../data/policy-terms.md'
import privacyTerms from '../../data/privacy-terms.md'
import ageVerification from '../../data/age-verification.md'

import ecommerce from '../../data/ecommerce.md'
import privacyThirdParty from '../../data/privacy-third-party.md'
import purchaseAgreement from '../../data/purchase-agreement.md'
import subscription from '../../data/subscription.md'
import refundPolicy from '../../data/refund-policy.md'

import eventTerms from '../../data/event-terms.md'

import {
	ServiceTermsState,
	ServiceTermsAction,
	ServiceTermsList,
} from './service-terms.types'

const initialState: ServiceTermsList = {
	privacyAgreement: { data: '', agreement: false },
	privacyTerms: { data: '', agreement: false },
	policyTerms: { data: '', agreement: false },
	ageVerification: { data: '', agreement: false },
	ecommerce: { data: '', agreement: false },
	privacyThirdParty: { data: '', agreement: false },
	purchaseAgreement: { data: '', agreement: false },
	subscription: { data: '', agreement: false },
	eventTerms: { data: '', agreement: false },
	refundPolicy: { data: '', agreement: false },
}

export const useServiceTermsStore = create<
	ServiceTermsState & ServiceTermsAction
>((set) => ({
	serviceTermsList: initialState,

	fetchTermsData: async (key: keyof ServiceTermsList) => {
		const filePath = {
			privacyAgreement,
			privacyTerms,
			policyTerms,
			ageVerification,
			ecommerce,
			privacyThirdParty,
			purchaseAgreement,
			subscription,
			eventTerms,
			refundPolicy,
		}[key]

		if (!filePath) {
			throw new Error(`Invalid key: ${key}`)
		}

		const content = await fetchMarkdownFile(filePath)
		set((state) => ({
			serviceTermsList: {
				...state.serviceTermsList,
				[key]: {
					...state.serviceTermsList[key],
					data: content,
				},
			},
		}))
	},

	updateTermsAgreement: (key: keyof ServiceTermsList, value: boolean) =>
		set((state) => ({
			serviceTermsList: {
				...state.serviceTermsList,
				[key]: {
					...state.serviceTermsList[key],
					agreement: value,
				},
			},
		})),

	toggleAllTermsAgreement: (value: boolean) =>
		set((state) => {
			const updatedTermsList = Object.entries(state.serviceTermsList).reduce(
				(acc, [key, terms]) => ({
					...acc,
					[key]: {
						...terms,
						agreement: value,
					},
				}),
				{} as ServiceTermsList,
			)

			return {
				serviceTermsList: updatedTermsList,
			}
		}),

	resetServiceTermsStore: () => set({ serviceTermsList: initialState }),
}))
