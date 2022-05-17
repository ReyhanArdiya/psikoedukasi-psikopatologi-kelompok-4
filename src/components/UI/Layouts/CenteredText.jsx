import styled from "styled-components";
import { Text } from "../Content/Texts";
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

const CenteredText = ({ children: text, id = "", className = "" }) => {
	return (
		<Container
			className={className}
			id={id}
		>
			<Text>{text}</Text>
		</Container>
	);
};

export default CenteredText;
