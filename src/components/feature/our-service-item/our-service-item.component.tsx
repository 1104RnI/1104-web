import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { OurServiceItemProps } from './our-service-item.types'
import { OurServiceItemContainer } from './our-service-item.styles'

import Chip from '../../global/chip/chip.component'
import Button from '../../global/button/button.component'

export default function OurServiceItem(props: OurServiceItemProps) {
	const {
		imageUrl,
		heading,
		subheading,
		body,
		freeTrial,
		whitePaper,
		features,
		handleSeeDetails,
		handleFreeTrial,
		handleSeeWhitePaper,
	} = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<OurServiceItemContainer $deviceType={deviceType} $imageUrl={imageUrl}>
			<div className="our-service-item-contents-container">
				<div className="our-service-item-title-container">
					<span className="our-service-item-subheading">{subheading}</span>
					<h3 className="our-service-item-heading">{heading}</h3>
					<div className="our-service-item-features-container">
						{features.map((item, index) => (
							<Chip
								className="our-service-item-feature-chip"
								key={index}
								text={item}
								appearance="accent"
								hierarchy="primary"
								stroke="filled"
								shape="rounded3"
								inverted
							/>
						))}
					</div>
				</div>

				<div className="our-service-item-body-container">
					{body.map((item, index) => (
						<p key={index} className="our-service-item-body">
							{item}
						</p>
					))}
				</div>

				<div className="our-service-item-buttons-container">
					{freeTrial || whitePaper ? (
						<Button
							className="our-service-item-button"
							accessibleName="our-service-item-buttons-container"
							appearance="neutral"
							hierarchy="secondary"
							stroke="outlined"
							shape="rounding"
							text={
								freeTrial ? '무료 체험판 신청하기 →' : '퀀트 R&D 백서 보기 →'
							}
							handleClick={freeTrial ? handleFreeTrial : handleSeeWhitePaper}
						/>
					) : null}
					<Button
						className="our-service-item-button"
						accessibleName="our-service-item-buttons-container"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						text="서비스 자세히 보기 →"
						handleClick={handleSeeDetails}
					/>
				</div>
			</div>
		</OurServiceItemContainer>
	)
}
