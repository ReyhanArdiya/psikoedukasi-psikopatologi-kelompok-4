import styled from "styled-components";
import AcrylicDouble from "./Acrylics/AcrylicDouble";

const Container = styled(AcrylicDouble)``;

const Text = styled.p`
	${({ theme }) => theme.text.titleCard};
	color: ${({ theme }) => theme.colors.primary[2]};;
`;

const TitleCard = ({ children: text, pos = "bottom" }) => {
	return (
		<Container pos={pos}>
			<Text>
				{text}
			</Text>
		</Container>
	);
};

export default TitleCard;
