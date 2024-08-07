import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useAuthNavigationStore } from '../../../store/auth-navigation/auth-navigation.store'

export default function GuestOnlyRoute() {
	const { loginUser, passwordResetToken } = useAuthDataStore()
	const { authDestination } = useAuthNavigationStore()
	const location = useLocation()

	const routeState = location.state

	if (!loginUser.userId || passwordResetToken.length !== 0) {
		return <Outlet />
	} else {
		if (authDestination || routeState?.status === 'success') {
			return <Outlet />
			// <Navigate to={authDestination} />
		}
		return <Navigate to={ROUTES.HOME} />
	}
}
