import styled from "styled-components";
import Section from "../../../../components/UI/Layouts/Section";
import TreatmentReadMore from "./TreatmentReadMore";
import TreatmentText from "./TreatmentText";

const Container = styled(Section)`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 760px;
    height: calc(100vh + 16em);
	position: relative;
`;

const Treatment = () => {
	return (
		<Container id="Treatment">
			<TreatmentText />
			<TreatmentReadMore/>
		</Container>
	);
};

export default Treatment;