import styled from "styled-components";
import Intro from "./Intro";
import Members from "./Members";

const Container = styled.div`

`;

const Credits = ({ propsDestruct }) => {
	return (
		<Container id="credits">
			<Intro />
			<Members/>
		</Container>
	);
};

export default Credits;