import TitleCard from "../../../../components/UI/Content/TitleCard";
import glassWalkingBg from "../../../../images/content/big/glass-walking-1920w.jpg";
import glassWalkingSm from "../../../../images/content/small/glass-walking-640w.jpg";
import styled from "styled-components";

const Container = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
	grid-area: header;
	justify-content: flex-end;
	position: relative;

	${({ theme }) => theme.others.responsiveBg(glassWalkingSm, glassWalkingBg)}
	background-size: cover;
`;

const BDHeader = ({ className = "" }) => {
	return (
		<Container
			className={className}
			id="BD-header"
		>
			<TitleCard>BD I &amp; II</TitleCard>
		</Container>
	);
};

export default BDHeader;
