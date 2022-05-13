import React from "react";
import styled from "styled-components";
import NoteHeader from "./NoteHeader";
import NoteText from "./NoteText";

const Container = styled.article`
    ${({ theme }) => theme.effects.dropShadow}
    ${({ theme }) => theme.others.borderRadius}
    background-color: ${({ theme }) => theme.colors.primary[2]};
    font-size: 1em;
    height: max-content;
    width: 16.5em;
`;

const Note = React.forwardRef(

	/**
	 * @param {{
	 * children: import("react").ReactNode,
	 * className?: string,
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({ children: text, className = "" }, ref) => {
		return (
			<Container
				className={`note ${className}`}
				ref={ref}
			>
				<NoteHeader/>
				<NoteText>{text}</NoteText>
			</Container>
		);
	}
);

export default React.memo(Note);