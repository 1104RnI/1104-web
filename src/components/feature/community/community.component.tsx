import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useHomeContentsStore } from '../../../store/contents/home-contents/home-contents.store'

import { CommunityContainer } from './community.styles'

import Button from '../../global/button/button.component'

export default function Community() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const image = useHomeContentsStore((state) => state.community.image)
	const { caption, heading, body } = useHomeContentsStore(
		(state) => state.community.text,
	)

	const handleJoinCommunity = (e: MouseEvent<HTMLButtonElement>) =>
		window.open(
			'https://t.me/+wihj13Yb06U3YWM1',
			'_blank',
			'noopener,noreferrer',
		)

	return (
		<CommunityContainer $deviceType={deviceType} $imageUrl={image}>
			<div id="contents-container">
				<div id="text-container">
					<span id="caption">{caption}</span>
					<h1 id="commnity-heading" className="community-text">
						{heading}
					</h1>
					<p id="body" className="community-text">
						{body}
					</p>
				</div>
				<Button
					id="community-button"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					text="JOIN TELEGRAM"
					handleClick={handleJoinCommunity}
				/>
			</div>
		</CommunityContainer>
	)
}
