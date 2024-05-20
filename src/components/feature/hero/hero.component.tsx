import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useHomeContentsStore } from '../../../store/homeContentsStore'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

import { HeroContainer } from './hero.styles'

import { ReactComponent as Icon } from '../../../assets/svg/telegram-icon.svg'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

export default function Hero() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useHomeContentsStore((state) => state.home)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {}
	const handleTextLinkClick = (e: MouseEvent<HTMLDivElement>) => {}

	return (
		<HeroContainer
			$deviceType={deviceType}
			$imageUrl={image.backgroundImage}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div id="text-container">
				<h1 id="display">{text.display}</h1>
				<h2 id="subheading">{text.subheading}</h2>
				<div id="buttons-container">
					<Button
						id="get-sample-button"
						type="button"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						size="md"
						text={text.ctaButtonText}
						handleClick={handleButtonClick}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						icon={<Icon id="link-icon" />}
						text="1:1 무료 상담받고 할인코드 받아가세요!"
						underlined
						handleClick={handleTextLinkClick}
					/>
				</div>
			</div>
			<img id="mockup-image" src={image.mockupImage} alt={image.mockupImage} />
		</HeroContainer>
	)
}
