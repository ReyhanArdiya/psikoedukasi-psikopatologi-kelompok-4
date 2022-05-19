import { H2 } from "../../../../components/UI/Content/Texts";
import ArticleSection from "../../../../components/UI/Layouts/ArticlePage/ArticleSection";
import Ol from "../../../../components/UI/Layouts/List/Ol";
import styled from "styled-components";
import Li from "../../../../components/UI/Layouts/List/Li";
import { useTranslation } from "react-i18next";
import Note from "../../../../components/UI/Content/Note/Note";

const Container = styled(ArticleSection)`
	width: 100%;
    grid-area: majordepressive;
`;

const MajorDepressive = ({ complete = false }) => {
	const { t } = useTranslation("MajorDepressive");

	return (
		<Container>
			<H2>Episode Depresif Mayor</H2>

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
				{complete &&
					<>
						<Note>{t("Note1.text")}</Note>
						<Note>{t("Note2.text")}</Note>
					</>
				}
			</Ol>
		</Container>
	);
};

export default MajorDepressive;
