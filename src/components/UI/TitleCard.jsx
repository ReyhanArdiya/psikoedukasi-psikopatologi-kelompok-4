import AcrylicDouble from "./Acrylics/AcrylicDouble";
import { TitleCard as TitleCardText } from "./Texts";

const TitleCard = ({ children: text, pos = "bottom" }) => {
	return (
		<AcrylicDouble
			className="title-card"
			pos={pos}
		>
			<TitleCardText>
				{text}
			</TitleCardText>
		</AcrylicDouble>
	);
};

export default TitleCard;
