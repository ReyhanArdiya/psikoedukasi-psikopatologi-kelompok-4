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

const Dysthymia = () => {
	const { t, i18n } = useTranslation("Dysthymia");

	return (
		<ArticlePage
			goBackLink="/#DYSTHYMIA"
			heroImg={{
				big   : foggyLakeBg,
				small : foggyLakeSm
			}}
			title="Persistent Depressive Disorder (Dysthymia)"
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
					<H2>Kriteria DSM-V MDD</H2>

					<TranslateButtons i18n={i18n} />
					<SwitchContent transitionKey={i18n.resolvedLanguage}>
						<Ol>
							<Li>
								{t("A.text")}
								<Ol>
									<Li
										dangerouslySetInnerHTML={{ __html : t("A.nest.1") }}
									/>
									<Li>{t("A.nest.2")}</Li>
									<Li
										dangerouslySetInnerHTML={{ __html : t("A.nest.3") }}
									/>
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
							<Li
								dangerouslySetInnerHTML={{ __html : t("E.text") }}
							/>
						</Ol>
					</SwitchContent>
				</ArticleSection>
			</BlurToClear>
		</ArticlePage>
	);
};

export default React.memo(Dysthymia);
