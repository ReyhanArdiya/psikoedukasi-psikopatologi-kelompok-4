import styled from "styled-components";
import AcrylicDouble from "./Acrylics/AcrylicDouble";

const Text = styled.p`
	${({ theme }) => theme.text.titleCard};
	color: ${({ theme }) => theme.colors.primary[2]};;
`;

const TitleCard = ({ children: text, pos = "bottom" }) => {
	return (
		<AcrylicDouble
			className="title-card"
			pos={pos}
		>
			<Text>
				{text}
			</Text>
		</AcrylicDouble>
	);
};

export default TitleCard;
