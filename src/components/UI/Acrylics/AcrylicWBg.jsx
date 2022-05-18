import styled from "styled-components";
import AcrylicSingle from "./AcrylicSingle";
import blackAcrylicPaint from "../../../images/content/small/bloom-beach-house-770w.png";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    background: scroll black url(${blackAcrylicPaint}) center/100% 100% no-repeat;
    width: max-content;
    height: max-content;
    position: relative;
    ${({ theme }) => theme.others.borderRadius}
`;

const FilledAcrylicSingle = styled(AcrylicSingle)`
    width: 100%;
    height: 100%;
    position: absolute;
    min-height: 0;
    backdrop-filter: blur(2px);
`;

const AcrylicWBg = ({ className = "" }) => {
	return (
		<Container className={`acrylic-bg ${className}`}>
			<FilledAcrylicSingle />
		</Container>
	);
};

export default AcrylicWBg;