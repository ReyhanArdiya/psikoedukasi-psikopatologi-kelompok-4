import styled from "styled-components";

const Container = styled.div`
	${({ theme }) => theme.effects.dropShadow}
	border-radius: inherit;
	height: 100%;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 12;
    align-items: center;
    display: flex;
    justify-content: center;

	animation: ${({ theme }) => theme.animations.glowing} 1.5s infinite alternate ease-in-out;

	::before {
		${({ theme }) => theme.effects.acrylicWShadow}
		border-radius: inherit;
		content: "";
		height: 100%;
		position: absolute;
		width: 100%;
	}

    > * {
        z-index: 2;
        color: inherit;
    }
`;

const GlowingBox = ({ children, className = "" }) => {
	return (
		<Container className={className}>
			{children}
		</Container>
	);
};

export default GlowingBox;