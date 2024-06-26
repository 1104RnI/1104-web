import {
	DesignTokens,
	ColourTokens,
	TypoTokens,
	LayoutTokens,
} from './design-tokens.types'

/**
 * 디자인 토큰 객체
 */
export const designTokens: DesignTokens = {
	// 색상 토큰
	colour: {
		grayscale: {
			0: '#ffffff',
			50: '#f3f3f3',
			100: '#e7e7e7',
			200: '#cfcfcf',
			300: '#b6b6b6',
			400: '#9e9e9e',
			500: '#868686',
			600: '#6e6e6e',
			700: '#555555',
			800: '#3d3d3d',
			900: '#252525',
			1000: '#151515',
		},
		pointblue: {
			50: '#c3dcff',
			100: '#87c5fe',
			200: '#5ca0fc',
			300: '#3879fa',
			400: '#1e55f5',
			500: '#0c37ee',
			600: '#021fdf',
			700: '#000fba',
			800: '#000472',
			900: '#000033',
		},
		systemred: {
			50: '#ffeded',
			100: '#ffdada',
			200: '#ffb7b7',
			300: '#ff9090',
			400: '#ff6565',
			500: '#ff3636',
			600: '#ff0000',
			700: '#c20202',
			800: '#850101',
			900: '#470000',
		},
	} as ColourTokens,

	// 타이포그래피 토큰
	typo: {
		typeface: { default: 'Pretendard Variable', serif: 'SF_HambakSnow' },
		size: {
			xxxlg: '4rem',
			xxlg: '2rem',
			xlg: '1.5rem',
			lg: '1.25rem',
			md: '1rem',
			sm: '0.75rem',
			xsm: '0.5rem',
		},
		weight: {
			xhv: 900,
			hv: 700,
			md: 400,
			lt: 200,
		},
		leading: {
			default: '160%',
			narrow: '110%',
		},
		kerning: {
			default: '-0.0125rem',
			tight: '-0.025rem',
		},
	} as TypoTokens,

	// 레이아웃 토큰
	layout: {
		breakpoint: { desktop: 1024, tablet: 680, mobile: 380 },
		dimension: {
			horizontal: {
				full: '100vw',
				maxFull: '70rem',
				midFull: '50rem',
				minFull: '20rem',
				fill: '100%',
				fit: 'auto',
			},
			vertical: {
				full: '100vh',
				fill: '100%',
				fit: 'auto',
			},
		},
		spacing: {
			xsm: '0.25rem',
			sm: '0.5rem',
			md: '0.75rem',
			lg: '1rem',
			xlg: '1.5rem',
			xxlg: '2rem',
			xxxlg: '2.5rem',
			hg: '3rem',
			xhg: '4rem',
			xxhg: '10rem',
		},
		radii: {
			xsm: '0.25rem',
			sm: '0.5rem',
			md: '0.75rem',
			lg: '1rem',
			xlg: '1.5rem',
			xxlg: '2rem',
			max: '100vw',
		},
		depth: {
			sm: '0.5rem',
			md: '0.75rem',
			lg: '1rem',
			xlg: '1.5rem',
			xxlg: '2rem',
			xxxlg: '4rem',
		},
		weight: {
			default: '0.125rem',
			thin: '0.0625rem',
		},
		style: {
			default: 'solid',
		},
	} as LayoutTokens,
}

export default designTokens
