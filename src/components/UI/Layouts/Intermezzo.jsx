import styled from "styled-components";
import Section from "./Section";

const Container = styled(Section)`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	max-width: 38.4em;
	text-align: center;
	width: 76.25%;
`;

let idCounter = 1;
const Intermezzo = ({ children, id = "", className = "" }) => {
	return (
		<Container
			className={className}
			id={`intermezzo-${idCounter++}`}
		>
			{children}
		</Container>
	);
};

export default Intermezzo;
