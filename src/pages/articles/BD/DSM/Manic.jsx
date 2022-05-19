import { H2 } from "../../../../components/UI/Content/Texts";
import ArticleSection from "../../../../components/UI/Layouts/ArticlePage/ArticleSection";
import Ol from "../../../../components/UI/Layouts/List/Ol";
import styled from "styled-components";
import Li from "../../../../components/UI/Layouts/List/Li";
import { useTranslation } from "react-i18next";
import Note from "../../../../components/UI/Content/Note/Note";

const Container = styled(ArticleSection)`
    width: 100%;
	grid-area: manic;
`;

const Manic = () => {
	const { t } = useTranslation("Manic");

	return (
		<Container>
			<H2>Episode Manik</H2>

			<Ol>
				<Li>{t("A.text")}</Li>
				<Li>
					{t("B.text")}
					<Ol>
						<Li>{t("B.nest.1")}</Li>
						<Li>{t("B.nest.2")}</Li>
						<Li>{t("B.nest.3")}</Li>
						<Li>{t("B.nest.4")}</Li>
						<Li>{t("B.nest.5")}</Li>
						<Li>{t("B.nest.6")}</Li>
						<Li>{t("B.nest.7")}</Li>
					</Ol>
				</Li>
				<Li>{t("C.text")}</Li>
				<Li>{t("D.text")}</Li>
				<Note>{t("Note1.text")}</Note>
				<Note>{t("Note2.text")}</Note>
			</Ol>
		</Container>
	);
};

export default Manic;