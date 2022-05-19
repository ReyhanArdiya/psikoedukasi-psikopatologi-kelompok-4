import React from "react";
import { useTranslation } from "react-i18next";
import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import swingSm from "../../../images/content/small/swing-640w.jpg";
import swingBg from "../../../images/content/big/swing-1920w.jpg";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H2, /* Text */ } from "../../../components/UI/Content/Texts";
import TranslateButtons from "../../../components/UI/Buttons/TranslateButtons";
import SwitchContent from "../../../components/UI/Animations/SwitchContent";
import BDContent from "./BDContent";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import Manic from "./DSM/Manic";
import styled from "styled-components";

const BDI = styled(ArticleSection)`
    width: 100%;
`;

const BD = () => {
	const { i18n } = useTranslation("BD");

	return (
		<ArticlePage
			goBackLink="/#BD"
			heroImg={{
				big   : swingBg,
				small : swingSm,
			}}
			title="Bipolar Disorders (BD I & II)"
		>
			<BDContent />

			<BlurToClear once>
				<ArticleSection>
					<H2>Kriteria DSM-V BD</H2>
					<TranslateButtons i18n={i18n} />

					<SwitchContent transitionKey={i18n.resolvedLanguage}>
						<BDI id="BD-I">
							<Manic />
						</BDI>
					</SwitchContent>
				</ArticleSection>
			</BlurToClear>
		</ArticlePage>
	);
};

export default React.memo(BD);
