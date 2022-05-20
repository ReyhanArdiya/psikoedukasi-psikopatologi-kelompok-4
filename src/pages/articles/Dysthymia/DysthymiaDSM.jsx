import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import Li from "../../../components/UI/Layouts/List/Li";
import Note from "../../../components/UI/Content/Note/Note";
import Ol from "../../../components/UI/Layouts/List/Ol";
import React from "react";
import SwitchContent from "../../../components/UI/Animations/SwitchContent";
import TranslateButtons from "../../../components/UI/Buttons/TranslateButtons";
import createNewi18n from "../../../helpers/create-new-i18n";
import { H2 } from "../../../components/UI/Content/Texts";
import { I18nextProvider, useTranslation } from "react-i18next";

const newi18n = createNewi18n("id");
const DysthymiaDSM = () => {
	const { t, i18n } = useTranslation("Dysthymia", { i18n : newi18n });

	return (
		<I18nextProvider i18n={i18n}>
			<BlurToClear once>
				<ArticleSection>
					<H2>Kriteria DSM-V Dysthymia</H2>
					<TranslateButtons i18n={i18n} />

					<SwitchContent transitionKey={i18n.resolvedLanguage}>
						<Ol>
							<Li dangerouslySetInnerHTML={{ __html : t("A.text") }}/>
							<Li>
								{t("B.text")}
								<Ol>
									<Li>{t("B.nest.1")}</Li>
									<Li>{t("B.nest.2")}</Li>
									<Li>{t("B.nest.3")}</Li>
									<Li>{t("B.nest.4")}</Li>
									<Li>{t("B.nest.5")}</Li>
									<Li>{t("B.nest.6")}</Li>
								</Ol>
							</Li>
							<Li>{t("C.text")}</Li>
							<Li>{t("D.text")}</Li>
							<Li>{t("E.text")}</Li>
							<Li>{t("F.text")}</Li>
							<Li>{t("G.text")}</Li>
							<Li>{t("H.text")}</Li>
							<Note>{t("Note1.text")}</Note>
						</Ol>
					</SwitchContent>
				</ArticleSection>
			</BlurToClear>
		</I18nextProvider>
	);
};

export default React.memo(DysthymiaDSM);