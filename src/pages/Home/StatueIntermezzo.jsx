import styled, { css } from "styled-components";
import Intermezzo from "./Intermezzo";
import statueBg from "../../images/content/big/statue-1920w.jpg";
import statueSm from "../../images/content/small/statue-640w.jpg";

const Container = styled(Intermezzo)`
	position: relative;

	::before {
		${({ theme }) => theme.others.responsiveBg(statueSm, statueBg)}
		background-size: contain;
		content: "";
		height: 40.4em;
		position: absolute;
		top: 0;
		width: 90%;

		${({ pos }) => {
		if (pos === "left") {
			return css`
					left: -65%;
				`;
		} else if (pos === "right") {
			return css`
					right: -65%;
					transform: scaleX(-1);
				`;
		}
	}};
	}
`;

const StatueIntermezzo = ({ children, pos = "left" }) => {
	return <Container pos={pos}>{children}</Container>;
};

export default StatueIntermezzo;
