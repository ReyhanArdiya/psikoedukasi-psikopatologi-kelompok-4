import styled from "styled-components";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H2 } from "../../../components/UI/Content/Texts";
import Intermezzo from "../Intermezzo";
import ReferenceList from "./ReferenceList";

const Container = styled(Intermezzo)`
	width: 85%;
    justify-content: flex-start;
    --padding: 2em;
    row-gap: var(--padding);
    padding-top: var(--padding);
    padding-bottom: var(--padding);
`;

const References = ({ references }) => {
	return (
		<Container id="references">
			<BlurToClear>
				<H2>REFERENCES</H2>
			</BlurToClear>
			<ReferenceList references={references}/>
		</Container>
	);
};

export default References;