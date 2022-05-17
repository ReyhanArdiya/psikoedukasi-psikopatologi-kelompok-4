import styled from "styled-components";
import flowerPetalSm from "../../../../images/content/small/flower-petal-640w.jpg";
import flowerPetalBg from "../../../../images/content/big/flower-petal-1920w.jpg";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";

const Container = styled.div`
	align-items: center;
	display: flex;
	height: 29.9em;
	justify-content: center;
	position: relative;

	::before {
		${({ flip }) => flip && "transform: scale(-1);"}
		${({ theme }) => theme.others.responsiveBg(flowerPetalSm, flowerPetalBg)}
		content: "";
		height: 100%;
		position: absolute;
		top: 0;
		width: 100%;
		background-size: contain;
	}

	> * {
		position: absolute;
	}
`;

const FlowerBg = ({ children, flip }) => {
	return (
		<BlurToClear>
			<Container flip={flip}>{children}</Container>
		</BlurToClear>
	);
};

export default FlowerBg;
