import styled from "styled-components";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H1, H2 } from "../../../components/UI/Content/Texts";
import Section from "../../../components/UI/Layouts/Section";

const Container = styled(Section)`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
`;

const Intro = () => {
	return (
		<Container id="credits-intro">
			<BlurToClear>
				<H1>CREDITS</H1>
			</BlurToClear>
			<BlurToClear>
				<H2>KELOMPOK 4</H2>
			</BlurToClear>
			<BlurToClear>
				<H2>KELAS 5 PSIKOPATOLOGI</H2>
			</BlurToClear>
			<BlurToClear>
				<H2>FAKULTAS PSIKOLOGI UNDIP</H2>
			</BlurToClear>
		</Container>
	);
};

export default Intro;