import styled from "styled-components";
import ReactDOM from "react-dom";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "../Content/Texts";

const Container = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary[1]};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	overflow: hidden;
	overflow: hidden;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 12;
	gap: 3em;
`;

const BrokenHeart = styled(FontAwesomeIcon).attrs({ icon : faHeartCrack })`
	width: 50vw;
	height: 50vw;
	max-width: 30em;
	max-height: 30em;
	position: relative;
	z-index: 2;
	color: ${({ theme }) => theme.colors.primary[2]};

	@keyframes blurToClear {
		from {
			filter: blur(0px);
			opacity: 1;
		}

		to {
			filter: blur(10px);
			opacity: 0;
		}
	}

	animation-name: blurToClear;
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: ease-in-out;
`;

const StyledSpan = styled.span`
	text-decoration: underline;

	:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.secondary[1]};
	}
`;

const TryAgain = ({ onTryAgain }) => {
	return ReactDOM.createPortal(
		<Container>
			<BrokenHeart />
			<Text>
				Something went wrong,{" "}
				<StyledSpan onClick={onTryAgain}>try again?</StyledSpan>
			</Text>
		</Container>,
		document.getElementById("root")
	);
};

export default TryAgain;
