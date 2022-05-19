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

	@keyframes glowing{
		from {
			background: ${({ theme }) => theme.colors.primary[1]};
            color: ${({ theme }) => theme.colors.primary[2]};
		}

		to {
			background: ${({ theme }) => theme.colors.primary[2]};
            color: ${({ theme }) => theme.colors.primary[1]};
		}
	}

	animation: glowing 1.5s infinite alternate ease-in-out;

	::before {
		${({ theme }) => theme.effects.acrylicWShadow}
		border-radius: inherit;
		content: "";
		height: 100%;
		position: absolute;
		top: 0;
		width: 100%;
	}

    > * {
        z-index: 2;
        color: inherit;
    }
`;

const Fallback = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	);
};

export default Fallback;