import styled, { css } from "styled-components";
import FadeInOut from "../../components/UI/Animations/FadeInOut";
import Arrow from "../../components/UI/Content/Arrow";
import { H1, H2 } from "../../components/UI/Content/Texts";
import Section from "../../components/UI/Layouts/Section";
import sittingSm from "../../images/content/small/sitting-640w.jpg";
import sittingBg from "../../images/content/big/sitting-1920w.jpg";

const Container = styled(Section)`
	${({ theme }) => theme.others.responsiveBg(sittingSm, sittingBg)}
	position: relative;
	align-items: center;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 2.4em 1.4em 1.521em 1.4em;

	${({ theme }) => theme.breakpoints.big(css`
			padding: 5em 3.4em 4.5em 3.4em;
		`)}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
				270deg,
				rgba(0, 0, 0, 0) 93.68%,
				#000000 100%
			),
			linear-gradient(90deg, rgba(0, 0, 0, 0) 81.51%, #000000 104.23%),
			linear-gradient(180deg, rgba(0, 0, 0, 0) 65.17%, #000000 100%);
		z-index: 0;
	}
`;

const GradientH1 = styled(H1).attrs({ className : "hero-title" })`
	${({ theme }) => theme.effects.gradientText}
	text-align: left;
	width: 100%;
`;

const StyledH2 = styled(H2)`
	text-align: right;
	width: 100%;
`;

const HomeHero = () => {
	return (
		<Container
			as="header"
			id="hero"
		>
			<FadeInOut>
				<GradientH1>
					MOOD DISORDERS
					<br />
					&amp;
					<br />
					SUICIDE
				</GradientH1>
			</FadeInOut>
			<FadeInOut>
				<Arrow />
			</FadeInOut>
			<FadeInOut>
				<StyledH2>
					Gangguan mood merupakan gangguan psikologis yang masih
					sering kita jumpai, yuk mari kenalan dengan mereka!
				</StyledH2>
			</FadeInOut>
		</Container>
	);
};

export default HomeHero;
