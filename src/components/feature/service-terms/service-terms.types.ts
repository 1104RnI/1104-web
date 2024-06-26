import { ServiceTermsList } from '../../../store/serviceTermsStore'

export type ServiceTermsProps = {
	id?: string
	className?: string
	terms: keyof ServiceTermsList
	height?: string
}

export type ServiceTermsContainerProps = {
	$height?: string
}
