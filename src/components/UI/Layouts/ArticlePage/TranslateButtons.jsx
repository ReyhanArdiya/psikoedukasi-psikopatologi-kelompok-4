import styled from "styled-components";
import TranslateBtn from "../../Buttons/TranslateBtn";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 2em;
    width: 100%;
`;

const TranslateButtons = ({ t, i18n }) => {
	const switchLan = () => {
		i18n.resolvedLanguge === "id" ? i18n.changeLanguage("en") : i18n.changeLanguage("id");
	};

	return (
		<Container className="translate-actions">
			<TranslateBtn onClick={switchLan}>ID</TranslateBtn>
			<TranslateBtn onClick={switchLan}>EN</TranslateBtn>
		</Container>
	);
};

export default TranslateButtons;