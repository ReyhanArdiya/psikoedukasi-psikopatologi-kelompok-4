import React from "react";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import { H2 } from "../../../components/UI/Content/Texts";
import TranslateButtons from "../../../components/UI/Buttons/TranslateButtons";
import { I18nextProvider, useTranslation } from "react-i18next";
import Ol from "../../../components/UI/Layouts/List/Ol";
import Li from "../../../components/UI/Layouts/List/Li";
import Note from "../../../components/UI/Content/Note/Note";
import SwitchContent from "../../../components/UI/Animations/SwitchContent";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import createNewi18n from "../../../helpers/create-new-i18n";

const newi18n = createNewi18n("id");
const MDDDSM = () => {
	const { t, i18n } = useTranslation("MDD", { i18n : newi18n });

	return (
		<I18nextProvider i18n={i18n}>
			<BlurToClear once>
				<ArticleSection>
					<H2>Kriteria DSM-V MDD</H2>

					<TranslateButtons
						i18n={i18n}
					/>
					<SwitchContent transitionKey={i18n.resolvedLanguage}>
						<Ol>
							<Li>
								{t("A.text")}
								<Ol>
									<Li dangerouslySetInnerHTML={{ __html : t("A.nest.1") }}/>
									<Li>{t("A.nest.2")}</Li>
									<Li dangerouslySetInnerHTML={{ __html : t("A.nest.3") }}/>
									<Li>{t("A.nest.4")}</Li>
									<Li>{t("A.nest.5")}</Li>
									<Li>{t("A.nest.6")}</Li>
									<Li>{t("A.nest.7")}</Li>
									<Li>{t("A.nest.8")}</Li>
									<Li>{t("A.nest.9")}</Li>
								</Ol>
							</Li>
							<Li>{t("B.text")}</Li>
							<Li>{t("C.text")}</Li>
							<Note>{t("Note1.text")}</Note>
							<Note>{t("Note2.text")}</Note>
							<Li>{t("D.text")}</Li>
							<Li dangerouslySetInnerHTML={{ __html : t("E.text") }}/>
						</Ol>
					</SwitchContent>
				</ArticleSection>
			</BlurToClear>
		</I18nextProvider>
	);
};

export default React.memo(MDDDSM);