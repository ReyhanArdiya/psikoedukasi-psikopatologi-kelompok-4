import React from "react";
import styled from "styled-components";
import { baseTransitionMs } from "../../../styles/csstransition-animations";

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

	font-size: 1.9em;
	line-height: unset;

	width: 1.5385em;
	height: 1.5385em;

	opacity: ${({ active }) => active ? 1 : 0.5};
	transition: opacity ${baseTransitionMs}ms ease-in-out;
`;

const Text = styled.p`
	${({ theme }) => theme.effects.gradientText};
`;

const TranslateBtn = React.forwardRef(

	/**
	 * @param {{
	 * children: import("react").ReactNode,
	 * className?:string,
	 * onClick:EventListener,
	 * active: boolean
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({ onClick, children: text, className = "", active }, ref) => {
		text = text.slice(0, 2).toUpperCase();

		return (
			<Button
				active={active}
				className={`translate ${className}`}
				onClick={onClick}
				ref={ref}
			>
				<Text>{text}</Text>
			</Button>
		);
	}
);

export default React.memo(TranslateBtn);
