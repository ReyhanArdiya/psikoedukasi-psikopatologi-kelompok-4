import React from "react";
import styled from "styled-components";

const Button = styled.button`
	${({ theme }) => theme.effects.acrylicWShadow}
	${({ theme }) => theme.text.titleCard}
    ${({ theme }) => theme.others.borderRadius}

    border: none;
	outline: none;
	margin: 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.primary[2]};
	cursor: pointer;
	user-select: none;

	font-size: 1.3em;
	line-height: unset;

	width: 1.5385em;
	height: 1.5385em;
`;

const Text = styled.p`
	${({ theme }) => theme.effects.gradientText};
`;

const TranslateBtn = React.forwardRef(({ onClick, children: text, className = "" }, ref) => {
	text = text.slice(0, 2).toUpperCase();

	return (
		<Button
			className={`translate-btn ${className}`}
			onClick={onClick}
			ref={ref}
		>
			<Text>{text}</Text>
		</Button>
	);
});

export default React.memo(TranslateBtn);
