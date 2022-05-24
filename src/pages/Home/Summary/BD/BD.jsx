import styled from "styled-components";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";
import { Text } from "../../../../components/UI/Content/Texts";
import Section from "../../../../components/UI/Layouts/Section";
import BDFooter from "./BDFooter";
import BDHeader from "./BDHeader";

const Container = styled(Section)`
	display: grid;
	grid-template-areas:
		"header"
		"content"
		"footer";
	grid-template-rows: minmax(22em, 0.69fr) 0.5fr minmax(22em, 0.69fr);
`;

const Content = styled(Text)`
	grid-area: content;
	align-self: center;
	height: max-content;
	justify-self: center;
	text-align: center;
	width: 16.5715em;
`;

const BD = () => {
	return (
		<Container id="BD">
			<BDHeader />
			<BlurToClear>
				<Content id="BD-content">
					<i>Bipolar Disorder</i> &#40;BD&#41; merupakan gangguan mood
					dimana pasien memiliki periode depresi dan manik.
				</Content>
			</BlurToClear>
			<BDFooter />
		</Container>
	);
};

export default BD;
