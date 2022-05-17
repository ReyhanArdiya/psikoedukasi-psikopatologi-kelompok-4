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
        padding: 5em 3.4em  4.5em 3.4em;
    `)}
`;

const GradientH1 = styled(H1).attrs({ className : "hero-title" })`
	${({ theme }) => theme.effects.gradientText}
	position: absolute;
	text-align: left;
	top: 0;
    left: 0;
    width: 100%;
`;

const StyledH2 = styled(H2)`
    position: absolute;
	text-align: right;
	bottom: 0;
    right: 0;
    width: 100%;
`;

const HomeHero = () => {
	return (
		<Container id="hero">
			<FadeInOut>
				<GradientH1>
                    MOOD DISORDERS
					<br/>
                    &amp;
					<br/>
                    SUICIDE</GradientH1>
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
