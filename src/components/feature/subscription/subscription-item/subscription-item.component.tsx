import { MouseEvent } from 'react'
import { ROUTES } from '../../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../../store/authDataStore'
import { useToastMessageStore } from '../../../../store/globalUiStore'
import { usePaymentStore } from '../../../../store/paymentStore'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'

import { SubscriptionItemProps } from './subscription-item.typs'
import { SubscriptionItemContainer } from './subscription-item.styles'

import Chip from '../../../global/chip/chip.component'
import Button from '../../../global/button/button.component'

export default function SubscriptionItem(props: SubscriptionItemProps) {
	const { item, hierarchy } = props
	const {
		thumbnailImg,
		plan,
		id,
		name,
		tag,
		summary,
		overview,
		price,
		priceCaption,
	} = item

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const { updateCheckoutItem } = usePaymentStore()
	const navigate = useNavigateWithScroll()

	const handleSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
		if (userId) {
			// TODO: updateCheckoutItem 유지할 필요 있는지 체크 필요
			updateCheckoutItem('id', id)
			navigate(`${ROUTES.CHECKOUT}?id=${id}&name=${name}&plan=${plan}`)
		} else {
			navigate(ROUTES.LOGIN, { routeState: 'signup' })
			updateToastMessage('회원가입 및 로그인이 필요합니다.')
		}
	}

	return (
		<SubscriptionItemContainer
			$deviceType={deviceType}
			$hierarchy={hierarchy}
			$imageUrl={thumbnailImg}
		>
			{deviceType !== 'mobile' ? <div id="item-image" /> : null}
			<div id="item-contents-container">
				<div id="plan-text-container">
					<span id="plan-text">{plan}</span>
					{tag.map((item, index) => (
						<Chip
							key={index}
							id="best-tag"
							appearance="system"
							hierarchy="secondary"
							stroke="filled"
							shape="rounded3"
							text={item.toUpperCase()}
						/>
					))}
				</div>
				<div id="price-text-container">
					<span id="service-name">{name}</span>
					<h1 id="heading">
						{price !== 0 ? (
							<>
								<span id="price-caption">₩</span>
								{price.toLocaleString()}
							</>
						) : (
							'무료'
						)}
					</h1>
					<span id="price-text-caption">{priceCaption}</span>
				</div>
				<div id="description-text-container">
					<p id="body">{summary}</p>
					<div id="features-text-container">
						{overview.map((item, index) => (
							<div key={index} className="feature-text">
								<FontAwesomeIcon
									icon={faCircleCheck}
									className="feature-icon"
								/>
								<span className="subheading">{item}</span>
							</div>
						))}
					</div>
				</div>
				<div id="button-container">
					<Button
						accessibleName="button-container"
						text={price !== 0 ? '지금 구매하기 →' : '무료 체험하기 →'}
						appearance={hierarchy === 'primary' ? 'accent' : 'neutral'}
						hierarchy={hierarchy}
						stroke={hierarchy === 'primary' ? 'filled' : 'outlined'}
						// stroke="filled"
						shape="rounding"
						handleClick={handleSubscribe}
					/>
					<span id="caption">
						{price !== 0
							? '구매 후 7일 이내 환불 가능'
							: '1:1 무료 상담 후 제공'}
					</span>
				</div>
			</div>
		</SubscriptionItemContainer>
	)
}
