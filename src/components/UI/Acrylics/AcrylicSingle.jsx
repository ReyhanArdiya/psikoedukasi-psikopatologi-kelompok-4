import styled from "styled-components";

const Container = styled.div`
    ${({ theme }) => theme.effects.acrylicWShadow}
    align-items: center;
    ${({ theme }) => theme.others.borderRadius}
    display: flex;
    justify-content: center;
    min-height: 41px;
    min-width: 110px;
    width: max-content;
    padding: 0.6em 0.8em;
`;

const AcrylicSingle = ({ children, className = "" }) => {
	return (
		<Container className={`acrylic-single ${className}`}>
			{children}
		</Container>
	);
};

export default AcrylicSingle;