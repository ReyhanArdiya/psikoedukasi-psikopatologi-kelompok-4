import { css } from "styled-components";

const colors = {
	primary : {
		1 : "#000",
		2 : "#fff"
	},
	secondary : {
		1 : "#ADB5BD",
		2 : "#343A40",
		3 : "#F8F9FA"
	}
};

const effects = {
	acrylic : css`
		background: rgba(248, 249, 250, 0.5);
		backdrop-filter: blur(10px);
	`,
	dropShadow : css`
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	`,
	gradientText : css`
		background: linear-gradient(
			90deg,
			${colors.primary[2]} 0%,
			rgba(255, 255, 255, 0) 100%
		);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	`,
};

effects.acrylicWShadow = css`
	${effects.acrylic};
	${effects.dropShadow};
`;

// 1em = 10px
const text = {
	h1 : css`
		font: 700 4em/1em "Palanquin Dark", sans-serif;
		color: ${colors.primary[1]};
	`,
	h2 : css`
		font: 900 2em/1.5em "Lato", sans-serif;
		color: ${colors.primary[1]};
		font-feature-settings: "calt" off;
	`,
	note : css`
		font: 300 1.2em/1.334em "Khula", sans-serif;
		color: ${colors.primary[1]};
		font-feature-settings: "calt" off;
	`,
	text : css`
		font: 300 1.4em/1.143em "Khula", sans-serif;
		color: ${colors.primary[1]};
		font-feature-settings: "calt" off;
	`,
	titleCard : css`
		font: 900 2em/1.5em "Lato", sans-serif;
		color: ${colors.primary[1]};
		font-feature-settings: "calt" off;
	`
};

const others = {
	borderRadius : css`
		border-radius: 0.2rem;
	`
};

const breakpoints = {
	big(styles) {
		return css`
			@media screen and (min-width: 48em) {
				${styles}
			}
		`;
	},
	small(styles) {
		return css`
			@media screen and (max-width: 47.9375em) {
				${styles}
			}
		`;
	},
};

const theme = {
	breakpoints,
	colors,
	effects,
	others,
	text
};

export default theme;
