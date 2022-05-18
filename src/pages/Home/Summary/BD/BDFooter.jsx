import glassWalkingBg from "../../../../images/content/big/glass-walking-1920w.jpg";
import glassWalkingSm from "../../../../images/content/small/glass-walking-640w.jpg";
import styled from "styled-components";
import ReadMore from "../../../../components/UI/Buttons/ReadMore";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";

const Container = styled.footer`
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-area: footer;
    justify-content: flex-start;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scale(-1);

        ${({ theme }) => theme.others.responsiveBg(glassWalkingSm, glassWalkingBg)}
        background-size: cover;
    }
`;

const BDFooter = ({ className = "" }) => {
	return (
		<BlurToClear options={{ threshold : 0.5 }}>
			<Container
				className={className}
				id="BD-footer"
			>
				<ReadMore path="/articles/BD"/>
			</Container>
		</BlurToClear>
	);
};

export default BDFooter;