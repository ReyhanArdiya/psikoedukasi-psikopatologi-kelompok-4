import styled from "styled-components";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: ${({ theme }) => theme.colors.primary[1]};
	z-index: 12;
	overflow: hidden;
	align-items: center;
	display: flex;
	justify-content: center;
	overflow: hidden;
`;

const Content = styled(FontAwesomeIcon).attrs({ icon : faHourglass })`
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

	animation-name: blurToClear, ${({ theme }) => theme.animations.rotate};
	animation-duration: 2s;
	animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
`;

const Hourglass = ({ onUnMount }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
			onUnMount();
		};
	}, [ onUnMount ]);

	return ReactDOM.createPortal(
		<Container>
			<Content />
		</Container>,
		document.getElementById("root")
	);
};

export default Hourglass;
