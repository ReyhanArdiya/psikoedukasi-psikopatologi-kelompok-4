import React from "react";
import { useTranslation } from "react-i18next";
import ArticlePage from "../../components/UI/Layouts/ArticlePage/ArticlePage";
import foggyLakeSm from "../../images/content/small/foggy-lake-640w.jpg";
import foggyLakeBg from "../../images/content/big/foggy-lake-1920w.jpg";
import ArticleSection from "../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../components/UI/Content/Texts";
import TranslateButtons from "../../components/UI/Buttons/TranslateButtons";
import SwitchContent from "../../components/UI/Animations/SwitchContent";
import Ol from "../../components/UI/Layouts/List/Ol";
import Li from "../../components/UI/Layouts/List/Li";
import Note from "../../components/UI/Content/Note/Note";
import styled, { css } from "styled-components";

const MythFact = styled(ArticleSection)`
	width: 100%;
	display: grid;
	grid-template-areas:
		"myth"
		"fact";
    align-items: start;
    column-gap: 10em;

	${({ theme }) => theme.breakpoints.big(css`
			grid-template-areas: "myth fact";
		`)}
`;

const Myth = styled(ArticleSection)`
	width: 100%;
	grid-area: myth;
`;

const Fact = styled(ArticleSection)`
	width: 100%;
	grid-area: fact;
`;

const PMDD = () => {
	const { t, i18n } = useTranslation("PMDD");

	return (
		<ArticlePage
			goBackLink="/#PMDD"
			heroImg={{
				big   : foggyLakeBg,
				small : foggyLakeSm
			}}
			title="Premenstrual Dysphoric Disorder (PMDD)"
		>
			<ArticleSection>
				<BlurToClear>
					<Text>
						Depresi yang berlangsung hingga bertahun-tahun disebut
						“distimia”.
					</Text>
				</BlurToClear>
				<BlurToClear>
					<H2>Distimia itu apa, sih?</H2>
				</BlurToClear>
				<BlurToClear>
					<Text>
						Distimia adalah suasana hati tertekan/depresi (merasa
						sedih, hilang semangat, dan putus asa) yang terjadi
						hampir sepanjang hari dan berlangsung minimal 1 tahun
						(pada anak-anak dan remaja) atau 2 tahun (pada orang
						dewasa), tetapi gejalanya tidak separah depresi mayor.
					</Text>
				</BlurToClear>

				<MythFact>
					<Myth>
						<BlurToClear>
							<H2>Mitos</H2>
						</BlurToClear>
						<BlurToClear>
							<Text>
								Distimia mulai terjadi ketika individu sudah
								dewasa.
							</Text>
						</BlurToClear>
					</Myth>

					<Fact>
						<BlurToClear>
							<H2>Fakta</H2>
						</BlurToClear>
						<BlurToClear>
							<Text>
								Distimia yang terjadi ketika dewasa merupakan
								kelanjutan distimia yang sudah berlangsung sejak
								kanak-kanak/remaja.
							</Text>
						</BlurToClear>
					</Fact>
				</MythFact>
			</ArticleSection>

			<BlurToClear once>
				<ArticleSection>
					<H2>Kriteria DSM-V PMDD</H2>
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
		</ArticlePage>
	);
};

export default React.memo(PMDD);
