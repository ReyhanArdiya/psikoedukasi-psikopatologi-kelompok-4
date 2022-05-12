import styled from "styled-components";

export const H1 = styled.h1`
    ${({ theme }) => theme.text.h1}
	color: ${({ theme }) => theme.colors.primary[2]};
`;

export const H2 = styled.h2`
    ${({ theme }) => theme.text.h2}
	color: ${({ theme }) => theme.colors.primary[2]};
`;

export const TitleCard = styled.h2`
	${({ theme }) => theme.text.titleCard}
	color: ${({ theme }) => theme.colors.primary[2]};
`;

export const Note = styled.p`
	${({ theme }) => theme.text.note}
	color: ${({ theme }) => theme.colors.primary[2]};
`;

export const Text = styled.p`
	${({ theme }) => theme.text.text}
	color: ${({ theme }) => theme.colors.primary[2]};
`;

