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

const Note = ({ children: text, className = "" }) => {
	return (
		<Container className={`note ${className}`}>
			<NoteHeader/>
			<NoteText>{text}</NoteText>
		</Container>
	);
};

export default Note;