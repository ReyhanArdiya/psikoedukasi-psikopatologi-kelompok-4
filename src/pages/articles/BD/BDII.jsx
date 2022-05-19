import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import SwitchContent from "../../../components/UI/Animations/SwitchContent";
import TranslateButtons from "../../../components/UI/Buttons/TranslateButtons";
import { H2 } from "../../../components/UI/Content/Texts";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import DSMLayout from "./DSMLayout";
import Hypomanic from "./DSM/Hypomanic";
import MajorDepressive from "./DSM/MajorDepressive";

const DSM = styled(DSMLayout)`
grid-template-areas:
    "hypomanic"
    "majordepressive";

${({ theme }) => theme.breakpoints.big(css`
        grid-template-areas: "hypomanic majordepressive";
`)}
`;

const BDII = () => {
	const { i18n } = useTranslation("BD");

	return (
		<BlurToClear once>
			<ArticleSection>
				<H2>Kriteria DSM-V BD II</H2>
				<TranslateButtons i18n={i18n} />

				<SwitchContent transitionKey={i18n.resolvedLanguage}>
					<DSM id="BD-II">
						<Hypomanic complete/>
						<MajorDepressive />
					</DSM>
				</SwitchContent>
			</ArticleSection>
		</BlurToClear>
	);
};

export default BDII;
