import styled from "styled-components";
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

    .treatment-text {
        width: 39.688%;
    }

    .treatment-text:first-of-type {
        width: max-content;
    }

    .treatment-text:nth-of-type(odd) {
        text-align: left;
    }

    .treatment-text:nth-of-type(even) {
        align-self: flex-end;
        text-align: right;
    }
`;

const TreatmentText = () => {
	return (
		<Container>
			<Text className="treatment-text">Cukup banyak, bukan?</Text>
			<Text className="treatment-text">Bagaimana penanganan yang bisa dilakukan?</Text>
			<Text className="treatment-text">Beberapa terapi & pengobatan telah dikembangkan...</Text>
			<Text className="treatment-text">...yang diharapkan bisa membantu mengatasi mereka</Text>
		</Container>
	);
};

export default TreatmentText;