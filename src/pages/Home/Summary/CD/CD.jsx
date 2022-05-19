import styled from "styled-components";
import towerSm from "../../../../images/content/small/tower-640w.jpg";
import towerBg from "../../../../images/content/big/tower-1920w.jpg";
import Section from "../../../../components/UI/Layouts/Section";
import TitleCard from "../../../../components/UI/Content/TitleCard";
import { Text } from "../../../../components/UI/Content/Texts";
import ReadMore from "../../../../components/UI/Buttons/ReadMore";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";

const Container = styled(Section)`
	${({ theme }) => theme.others.responsiveBg(towerSm, towerBg)}
	position: relative;
	align-items: center;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	gap: 9em;
	width: 72.5%;
	margin: 0 auto;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
		z-index: 0;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000000ae;
		z-index: 0;
	}
`;

const StyledText = styled(Text)`
	z-index: 3;
	text-align: center;
`;

const CD = () => {
	return (
		<Container id="CD">
			<TitleCard>CD</TitleCard>
			<BlurToClear>
				<StyledText>
					Cyclothymia Disorder &#40;CD&#41; adalah keadaan ketika
					perasaan seseorang berubah-ubah sesuai siklus yang berlaku.
				</StyledText>
			</BlurToClear>
			<ReadMore path="/articles/CD" />
		</Container>
	);
};

export default CD;
