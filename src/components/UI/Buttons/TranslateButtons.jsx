import React from "react";
import styled from "styled-components";
import TranslateBtn from "./TranslateBtn";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 4em;
    width: 100%;
`;

const TranslateButtons = React.forwardRef(

	/**
	 *
	 *
	 * @param {{i18n : any, className: string}} props
	 *
	 * @param {*} ref
	 *
	 * @returns
	 */
	({ i18n, className = "" }, ref) => {
		return (
			<Container
				className={`translate-actions ${className}`}
				ref={ref}
			>
				<TranslateBtn
					active={i18n.language === "id"}
					onClick={() => i18n.changeLanguage("id")}
				>ID</TranslateBtn>
				<TranslateBtn
					active={i18n.language === "en"}
					onClick={() => i18n.changeLanguage("en")}
				>EN</TranslateBtn>
			</Container>
		);
	}
);

export default TranslateButtons;