import { create } from 'zustand'

import heroImage from '../../../assets/img/about-us-hero-image.webp'
import backgroundImage from '../../../assets/img/background-paragraph-image.webp'
import displayImage from '../../../assets/img/about-us-display-image.webp'
import ipoImage from '../../../assets/img/about-us-ipo-image.webp'

import { AboutUsContentsState } from './aobut-us-contents.types'

export const useAboutUsContentsStore = create<AboutUsContentsState>((set) => ({
	hero: {
		image: heroImage,
		text: {
			category: 'ABOUT US',
			heading: 'We Revolutionise Crypto Market & Trading Industry',
			subheading: '우리는 암호화폐 시장과 트레이딩 산업에서 혁신하고 있습니다.',
			body: {
				heading:
					'TEAM 5010은 교육과 IT 기술을 접목하여 투자 시장에 혁신을 가져오는 것을 목표로 하는 기업입니다. 우리는 각 분야의 전문가들과 협력하여 투자 시장의 모든 것을 총망라한 5010 매매 전략을 개발하여 보급하였고, 이제는 더 높은 곳을 향해 나아가고 있습니다.',
				paragraph: [
					{
						heading:
							'TEAM 5010은 투자자들에게 시장에 대한 명확한 이해, 고차원적인 통찰력, 그리고 개개인의 투자 전략 개발에 도움을 주는 것을 목표로 합니다.',
						text: '우리는 최신 기술과 응용 수학을 활용하여 획기적인 계량적 투자 시스템을 만들고자 노력하고 있으며, 빅데이터, 인공지능, 기계학습 등의 첨단 기술을 투자 전략에 접목하여 보다 정교하고 효과적인 투자 시스템을 개발하고 있습니다. 이를 통해 우리는 투자자들에게 더 나은 투자 성과와 리스크 관리를 제공할 수 있을 것으로 기대합니다.',
					},
					{
						heading:
							'TEAM 5010은 불투명하고 허위 주장이 난무하는 투자 시장에서 투자자들에게 명확한 길잡이가 되고자 합니다.',
						text: '우리는 개발자이자 트레이더로서 우리가 알고 있는 것을 진실된 마음으로 공유하고자 하며, 투자자들을 현혹하거나 오도하지 않겠습니다. 그리고 우리는 투자 시장에 대한 깊은 이해와 기술적 전문성을 바탕으로 투자자들에게 진정으로 도움이 되는 서비스를 제공할 것이며, 앞으로도 끊임없는 연구와 혁신을 통해 투자 시장의 발전에 기여하고, 투자자들의 신뢰할 수 있는 파트너가 될 수 있도록 최선을 다하겠습니다.',
					},
				],
			},
		},
	},
	backgroundSection: {
		title: {
			caption: 'HERE WE ARE',
			heading:
				"암호화폐(CRYPTO) 시장은 아직까지 회색지대, '음지'에 머물러 있습니다.",
			body: '300명에 달하는 수강생을 교육해오며 맹목적인 투자 권유와 사기 피해 등으로 막대한 손실을 보신 분들을 숱하게 만나왔죠. 아직도 우리 주변 도처에서는 이러한 피해 사례가 여전히 발생하고 있고 어쩌면 그게 바로 여러분의 이야기거나, 가족이나 친구에게 일어난 일일지도 모릅니다.',
		},
		firstParagraph: {
			image: backgroundImage,
			heading: '암호화폐 시장을 향한 부정적인 시선과 색안경',
			body: '이러한 투자자들의 선입견을 깨부수고 좋은 트레이딩 경험을 만들기 위해서는 기존의 통념을 깨부순 새로운 접근 방식과 방법론, 그리고 혁신적인 기술이 필요했습니다.',
		},
		secondParagraph: {
			heading: '믿음에 대한 진심을 담은 보답',
			body: "무엇보다 우리를 믿고 찾아와 주시는 모든 분들에게 우리의 '진심'을 보여드리는데 집중했습니다. 그러다 보니, 우리는 계속해서 성장할 수밖에 없었고 우리와 함께하는 수강생 역시 자연스럽게 성장할 수밖에 없는 '선순환 구조'가 형성될 수 있었습니다.",
		},
		thirdParagraph: {
			quote: ['새 삶을 살아가고 있다.', '꼭 보은하겠다.'],
			body: '우리로 하여금 조금이나마 삶에 여유가 생기는 모습을 보며 TEAM 5010은 매일같이 큰 보람을 느끼곤 합니다.',
		},
		fourthParagraph: [
			'그래서 이제는 더 큰 비전과 사명감을 갖고 양지에서 양질의 교육과 서비스를 제공하여 선한 영향력을 행사해 나가겠다 다짐했습니다.',
			'그래서 이제는 우리의 서비스를 보다 더 널리 알리고 우리의 선한 영향력을 보다 널리 퍼뜨려 보기로 하였습니다.',
			'그렇게 우리는 더 큰 꿈을 꾸게 되었습니다.',
		],
	},
	objectiveSection: {
		title: {
			caption: 'WHERE WE GO',
			heading:
				'TEAM 5010은 암호화폐 시장에서 나스닥 상장(IPO)를 이루어 보고자 합니다.',
			body: '우리는 증명해 왔습니다. 국내 암호화폐 시장에서 EDU TECH와 AI를 접목시켜 국내 교육 시장에서 서비스를 전개, 지금 이 순간에도 새로운 역사를 여러분들과 함께 써 내려가고 있습니다. 이제는 글로벌 시장을 무대로 우리를 널리 알려보고자 합니다.',
		},
		display: {
			image: displayImage,
			text: [
				'SaaS for Traders & Investors.',
				'Enhance Your Trading Experience.',
			],
		},

		firstParagraph: [
			'위와 같은 슬로건으로 한국의 핀테크 위상을 드높이고 마침내 나스닥 시장에 상장(IPO)을 해보고자 합니다.',
			'암호화폐 관련 서비스로 제도권 내에서 상장을 하기란 결코 쉬운 일이 아닐겁니다. 무모한 도전이 될 것입니다. 하지만 우리는 회색 지대에서 양지로 나아가기 위해 계속해서 문을 두들겨 보고자 합니다.',
		],
		secondParagraph: {
			image: ipoImage,
			body: [
				'우리가 성장하면 여러분도 성장합니다. 우리는 계속해서 R&D에 집중하고 그 연구 결과물들을 여러분들께 지속적으로 팔로우업 해드릴 계획입니다.',
				'어쩌면, 지금 여러분이 믿고 선택해주신 TEAM 5010이라는 기업이 훗날 나스닥에 상장한다면 기분이 어떨까요?',
				'"역시 내가 믿고 투자했던 기업이네."라며, 주변 사람들에게 말할 날이 분명 올 것입니다.',
				'그 길을 여러분들과 함께 걸어가겠습니다.',
			],
			caption: 'TEAM 5010. SINCE 2023.',
		},
	},
}))
