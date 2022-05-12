import styled from "styled-components";
import AcrylicSingle from "./AcrylicSingle";
import blackAcrylicPaint from "../../../images/content/small/black-acrylic-paint-640w.jpg";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    background: fixed black url(${blackAcrylicPaint}) center/100% 100% no-repeat;
    width: max-content;
    height: max-content;
`;


const AcrylicWBg = ({ className = "" }) => {
	return (
		<Container className={`acrylic-bg ${className}`}>
			<AcrylicSingle />
		</Container>
	);
};

export default AcrylicWBg;