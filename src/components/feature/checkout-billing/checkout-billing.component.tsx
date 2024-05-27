import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { CheckoutBillingProps } from './checkout-billing.types'
import { CheckoutBillingContainer } from './checkout-billing.styles'

export default function CheckoutBilling(props: CheckoutBillingProps) {
	const { item } = props
	const { price } = item
	const discount = 0 // 할인코드 관련 로직 추가시 변경 필요

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CheckoutBillingContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">결제 금액</h2>
				<div className="item-row">
					<span className="price-label">상품 금액</span>
					<p className="body">₩{price.toLocaleString()}</p>
				</div>
				<div className="item-row">
					<span className="price-label">할인 금액</span>
					<p className="body">- ₩{discount}</p>
				</div>
			</div>
			<hr />
			<div className="container-row">
				<div className="item-row">
					<span className="price-label" id="billing-price-label">
						총 결제 금액
					</span>
					<h3 className="heading-3" id="billing-price-text">
						₩{(price - discount).toLocaleString()}
					</h3>
				</div>
			</div>
		</CheckoutBillingContainer>
	)
}
