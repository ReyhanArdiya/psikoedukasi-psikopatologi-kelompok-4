import React from "react";
import { useTranslation } from "react-i18next";
import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import swingSm from "../../../images/content/small/swing-640w.jpg";
import swingBg from "../../../images/content/big/swing-1920w.jpg";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H2, /* Text */ } from "../../../components/UI/Content/Texts";
import TranslateButtons from "../../../components/UI/Buttons/TranslateButtons";
import SwitchContent from "../../../components/UI/Animations/SwitchContent";
import Ol from "../../../components/UI/Layouts/List/Ol";
import Li from "../../../components/UI/Layouts/List/Li";
import Note from "../../../components/UI/Content/Note/Note";
import BDContent from "./BDContent";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";

const BD = () => {
	const { t, i18n } = useTranslation("BD");

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
						<Ol>
							<Li>{t("A.text")}</Li>
							<Li>
								{t("B.text")}
								<Ol>
									<Li>{t("B.nest.1")}</Li>
									<Li>{t("B.nest.2")}</Li>
									<Li>{t("B.nest.3")}</Li>
									<Li>{t("B.nest.4")}</Li>
								</Ol>
							</Li>
							<Li>
								{t("C.text")}
								<Ol>
									<Li>{t("C.nest.1")}</Li>
									<Li>{t("C.nest.2")}</Li>
									<Li>{t("C.nest.3")}</Li>
									<Li>{t("C.nest.4")}</Li>
									<Li>{t("C.nest.5")}</Li>
									<Li>{t("C.nest.6")}</Li>
									<Li>{t("C.nest.7")}</Li>
								</Ol>
							</Li>
							<Note>{t("Note1.text")}</Note>
							<Li>{t("D.text")}</Li>
							<Li>{t("E.text")}</Li>
							<Li
								dangerouslySetInnerHTML={{ __html : t("F.text") }}
							/>
							<Li>{t("G.text")}</Li>
						</Ol>
					</SwitchContent>
				</ArticleSection>
			</BlurToClear>
		</ArticlePage>
	);
};

export default React.memo(BD);
