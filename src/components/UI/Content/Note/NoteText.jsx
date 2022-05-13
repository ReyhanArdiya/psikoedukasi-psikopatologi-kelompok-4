import styled from "styled-components";
import { Note } from "../Texts";

const StyledNoteText = styled(Note)`
    max-width: 100%;
    padding: 0.6667em;
`;

const NoteText = ({ children: text }) => {
	return (
		<StyledNoteText className="note-text">
			{text}
		</StyledNoteText>
	);
};

export default NoteText;