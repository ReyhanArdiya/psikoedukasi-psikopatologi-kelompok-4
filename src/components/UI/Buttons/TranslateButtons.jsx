import styled from "styled-components";
import TranslateBtn from "./TranslateBtn";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 2em;
    width: 100%;
`;

const TranslateButtons = ({ i18n }) => {
	return (
		<Container className="translate-actions">
			<TranslateBtn
				onClick={() => i18n.changeLanguage("id")}
			>ID</TranslateBtn>
			<TranslateBtn
				onClick={() => i18n.changeLanguage("en")}
			>EN</TranslateBtn>
		</Container>
	);
};

export default TranslateButtons;