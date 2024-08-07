import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

import {
	CheckCouponResponse,
	PurchaseProductPayload,
	PurchaseProductResponse,
	GetPurchasesResponse,
	GetPurchasedProductsResponse,
} from './payment-service.types'

/**
 * 쿠폰 코드를 확인하는 비동기 함수
 * @param {string} coupon - 확인할 쿠폰 코드
 * @returns {Promise<{ code: string }>} 확인된 쿠폰 ID 코드를 담은 Promise 객체
 */
export const checkCoupon = async (
	coupon: string,
): Promise<CheckCouponResponse> => {
	try {
		const response = await axiosInstance.post('/coupons/check', {
			code: coupon,
		})
		const { data } = response.data
		const { id, discount_price, discount_percentage } = data
		return {
			id: id,
			discount_price: discount_price,
			discount_percentage: discount_percentage,
		}
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 제품 구매 API를 호출하는 비동기 함수
 *
 * @param {Object} params - 구매에 필요한 정보를 담은 객체
 * @param {string} params.id - 구매할 제품의 고유 ID
 * @param {string} params.phone - 구매자의 전화번호
 * @param {string} params.username - 구매자의 이름
 * @returns {Promise<PurchaseProductResponse>} 구매 결과 정보를 담은 Promise
 * @throws {Error} API 요청 실패 시 발생하는 에러
 */
export const purchaseProduct = async ({
	id,
	phone,
	username,
}: PurchaseProductPayload): Promise<PurchaseProductResponse> => {
	try {
		const response = await axiosInstance.post(`/products/${id}/purchase`, {
			phone: phone,
			username: username,
		})
		const { data } = response.data
		const { id: productId, order_number, total_price, payment_status } = data
		return { id: productId, order_number, total_price, payment_status }
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 사용자가 결제한 상품 리스트를 가져오는 비동기 함수
 *
 * @returns {Promise<GetPurchasesResponse>} 결제한 상품 리스트를 담은 Promise
 * @throws {Error} API 요청 실패 시 발생하는 에러
 */
export const getPurchases = async (): Promise<GetPurchasesResponse> => {
	try {
		const response = await axiosInstance.get('/users/me/purchases')
		const { data } = response.data
		return data
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 사용자가 구매한 상품 리스트를 가져오는 비동기 함수
 *
 * @returns {Promise<GetPurchasesResponse>} 구매한 상품 리스트를 담은 Promise
 * @throws {Error} API 요청 실패 시 발생하는 에러
 */
export const getPurchasedProducts =
	async (): Promise<GetPurchasedProductsResponse> => {
		try {
			const response = await axiosInstance.get('/users/me/purchased-products')
			const { data } = response.data
			return data
		} catch (error) {
			throw new Error(handleError(error))
		}
	}
