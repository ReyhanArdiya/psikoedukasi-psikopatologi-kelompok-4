import styled from "styled-components";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";
import ReadMore from "../../../../components/UI/Buttons/ReadMore";
import { Text } from "../../../../components/UI/Content/Texts";
import TitleCard from "../../../../components/UI/Content/TitleCard";
import Section from "../../../../components/UI/Layouts/Section";
import FlowerBg from "./FlowerBg";

const Container = styled(Section)``;

const StyledText = styled(Text)`
	text-align: center;
	width: 71.25%;
	margin: 0 auto;
	max-width: 27.428571em;
`;

const Suicide = () => {
	return (
		<Container id="Suicide">
			<FlowerBg>
				<TitleCard>SUICIDE</TitleCard>
			</FlowerBg>

			<BlurToClear>
				<StyledText id="Suicide-text">
					Ada satu hal lagi yang penting untuk dipahami, yaitu tentang
					bunuh diri &#40;suicide&#41; yang erat kaitannya dengan
					gangguan mood
				</StyledText>
			</BlurToClear>

			<FlowerBg flip>
				<ReadMore path="/articles/suicide" />
			</FlowerBg>
		</Container>
	);
};

export default Suicide;
