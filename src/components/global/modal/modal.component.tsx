import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { ModalProps } from './modal.types'
import { ModalContainer } from './modal.styles'

import Button from '../button/button.component'

export default function Modal(props: ModalProps) {
	const {
		id,
		className,
		children,
		title,
		bottomButtonText,
		backgroundPanel = true,
		handleClose,
		handleBottomButtonClick,
		scrollToTop = true,
	} = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	useEffect(() => {
		if (scrollToTop) window.scrollTo({ top: 0, behavior: 'auto' })
		document.body.style.overflowY = 'hidden'

		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				handleClose(e)
			}
		}
		document.addEventListener('keydown', handleEscapeKey)

		return () => {
			document.body.style.overflowY = 'unset'
			document.removeEventListener('keydown', handleEscapeKey)
		}
	}, [handleClose, scrollToTop])

	const resetOverflow = () => (document.body.style.overflowY = 'unset')

	return createPortal(
		<ModalContainer
			$deviceType={deviceType}
			$backgroundPanel={backgroundPanel}
			id={id}
			className={className}
		>
			<div id="modal-contents-container">
				<div id="modal-top-bar">
					<h3 id="modal-subheading">{title}</h3>
					<button
						id="modal-close-button"
						aria-labelledby="top-bar"
						type="button"
						onClick={(e) => {
							handleClose(e)
							resetOverflow()
						}}
					>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>
				<div id="modal-body">{children}</div>
				{bottomButtonText && bottomButtonText.length !== 0 ? (
					<div id="modal-bottom-bar">
						<Button
							accessibleName="bottom-bar"
							type="button"
							appearance="neutral"
							hierarchy="primary"
							stroke="filled"
							shape="rounding"
							text={bottomButtonText}
							id="modal-bottom-button"
							handleClick={(e) => {
								handleBottomButtonClick && handleBottomButtonClick(e)
								resetOverflow()
							}}
						/>
					</div>
				) : null}
			</div>
		</ModalContainer>,
		document.body,
	)
}
