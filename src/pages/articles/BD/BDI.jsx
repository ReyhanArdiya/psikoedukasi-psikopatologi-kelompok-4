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
import Manic from "./DSM/Manic";

const DSM = styled(DSMLayout)`
	grid-template-areas:
		"manic"
		"hypomanic"
		"majordepressive";

	${({ theme }) => theme.breakpoints.big(css`
			grid-template-areas:
				"manic hypomanic"
				"majordepressive majordepressive";
		`)}
`;

const BDI = () => {
	const { i18n } = useTranslation("BD");

	return (
		<BlurToClear once>
			<ArticleSection>
				<H2>Kriteria DSM-V BD I</H2>
				<TranslateButtons i18n={i18n} />

				<SwitchContent transitionKey={i18n.resolvedLanguage}>
					<DSM id="BD-I">
						<Manic />
						<Hypomanic />
						<MajorDepressive complete />
					</DSM>
				</SwitchContent>
			</ArticleSection>
		</BlurToClear>
	);
};

export default BDI;