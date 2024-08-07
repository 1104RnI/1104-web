/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
		REACT_APP_BASE_URL: string
		REACT_APP_SECRET_KEY: string
		REACT_APP_ENV: string

		REACT_APP_STIBEE_API_KEY: string
		REACT_APP_STIBEE_EMAIL_LIST_ID: string
		REACT_APP_STIBEE_FREE_TRIAL_LIST_ID: string
		REACT_APP_CLIENT_KEY: string

		REACT_APP_EMAILJS_SERVICE_ID: string
		REACT_APP_EMAILJS_TEMPLATE_ID: string
		REACT_APP_EMAILJS_UNREGISTER_TEMPLATE_ID: string
		REACT_APP_EMAILJS_PUBLIC_KEY: string
	}
}
