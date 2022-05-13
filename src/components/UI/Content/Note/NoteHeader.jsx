import styled from "styled-components";
import AcrylicWBg from "../../Acrylics/AcrylicWBg";
import { H2 } from "../Texts";

const Container = styled.header`
    ${({ theme }) => theme.others.borderRadius}
    align-items: center;
    display: flex;
    display: flex;
    height: max-content;
    justify-content: center;
    justify-content: center;
    position: relative;
    width: 100%;
`;

const StyledAcrylicWBg = styled(AcrylicWBg)`
    width: 100%;
    min-height: 4em;
    height: 4em;
`;

const StyledH2 = styled(H2)`
    position: absolute;
    color: ${({ theme }) => theme.colors.primary[1]};
`;

const NoteHeader = () => {
	return (
		<Container className="note-header">
			<StyledAcrylicWBg />
			<StyledH2>Note</StyledH2>
		</Container>
	);
};

export default NoteHeader;