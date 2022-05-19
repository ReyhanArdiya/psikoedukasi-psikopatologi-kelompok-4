import styled from "styled-components";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import GlowingBox from "./GlowingBox";

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
`;

const Content = styled(GlowingBox)`
    width: 30em;
    height: 30em;
    position: relative;
    z-index: 2;

    animation-name: ${({ theme }) => theme.animations.glowing}, ${({ theme }) => theme.animations.rotate};
    animation-duration: 2s;
    animation-iteration-count: infinite;

`;

const BlackBox = () => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return ReactDOM.createPortal(
		<Container><Content/></Container>,
		document.getElementById("root")
	);
};

export default BlackBox;