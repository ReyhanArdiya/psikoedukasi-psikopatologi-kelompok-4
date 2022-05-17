import styled from "styled-components";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";
import { Text } from "../../../../components/UI/Content/Texts";
import Section from "../../../../components/UI/Layouts/Section";

const Container = styled(Section)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	justify-self: flex-start;
	position: absolute;
	top: 0;
	width: 87.5%;
	max-width: 38.4em;
	z-index: 2;
`;

const StyledText = styled(Text)`
    & {
		width: 39.688%;
	}

	&:first-of-type {
		width: max-content;
	}

	&:nth-of-type(odd) {
		text-align: left;
	}

	&:nth-of-type(even) {
		align-self: flex-end;
		text-align: right;
	}
`;

const TreatmentText = () => {
	return (
		<Container>
			<BlurToClear>
				<StyledText>Cukup banyak, bukan?</StyledText>
			</BlurToClear>
			<BlurToClear>
				<StyledText>
					Bagaimana penanganan yang bisa dilakukan?
				</StyledText>
			</BlurToClear>
			<BlurToClear>
				<StyledText>
					Beberapa terapi & pengobatan telah dikembangkan...
				</StyledText>
			</BlurToClear>
			<BlurToClear>
				<StyledText>
					...yang diharapkan bisa membantu mengatasi mereka
				</StyledText>
			</BlurToClear>
		</Container>
	);
};

export default TreatmentText;
