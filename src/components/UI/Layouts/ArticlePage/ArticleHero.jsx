import styled, { css } from "styled-components";
import { H1 } from "../../Texts";
import Section from "../Section";

const Container = styled(Section)`
	/* Centering */
	align-items: center;
	display: flex;
	justify-content: center;

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
		<Container
			bigImg={bigImg}
			className="hero"
			smallImg={smallImg}
		>
			<GradientH1>{title}</GradientH1>
			<GradientH1>{title}</GradientH1>
		</Container>
	);
};

export default ArticleHero;
