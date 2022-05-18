import styled, { css } from "styled-components";
import BlurToClear from "../../Animations/BlurToClear";
import { H1 } from "../../Content/Texts";
import Section from "../Section";

const Container = styled(Section)`
	/* Centering */
	align-items: center;
	display: flex;
	justify-content: center;
	width: 100%;

	/* Background */
	background-color: black;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	/* Hopefully this will save bandwith */
	${({ theme, smallImg }) => {
		return theme.breakpoints.small(css`
			background-image: url(${smallImg});
		`);
	}}
	${({ theme, bigImg }) => {
		return theme.breakpoints.big(css`
			background-image: url(${bigImg});
		`);
	}}

	/* REFAC use this but test it out first */
	${({ theme, smallImg, bigImg }) => theme.others.responsiveBg(smallImg, bigImg)}

    /* Blur */
    position: relative;

	.hero-title:first-of-type {
		z-index: 1;
		user-select: none;
	}

	::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		${({ theme }) => theme.effects.acrylic}
		background: rgba(255, 255, 255, 0.01);
		z-index: 2;
	}

	.hero-title:last-of-type {
		z-index: 3;
	}
`;

const GradientH1 = styled(H1).attrs({ className : "hero-title" })`
	${({ theme }) => theme.effects.gradientText}
	position: absolute;
	text-align: center;
	width: 80%;
`;

const ArticleHero = ({ title, smallImg, bigImg }) => {
	return (
		<BlurToClear once>
			<Container
				bigImg={bigImg}
				className="article-hero"
				smallImg={smallImg}
			>
				<GradientH1>{title}</GradientH1>
				<GradientH1>{title}</GradientH1>
			</Container>
		</BlurToClear>
	);
};

export default ArticleHero;
