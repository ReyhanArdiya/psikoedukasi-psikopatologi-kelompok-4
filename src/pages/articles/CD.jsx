import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import ArticlePage from "../../components/UI/Layouts/ArticlePage/ArticlePage";
import spiralStaircaseSm from "../../images/content/small/spiral-staircase-640w.jpg";
import ArticleSection from "../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../components/UI/Content/Texts";
import TranslateButtons from "../../components/UI/Buttons/TranslateButtons";
import SwitchContent from "../../components/UI/Animations/SwitchContent";
import Ol from "../../components/UI/Layouts/List/Ol";
import Li from "../../components/UI/Layouts/List/Li";
import createNewi18n from "../../helpers/create-new-i18n";

const newi18n = createNewi18n("id");
const CD = () => {
	const { t, i18n } = useTranslation("CD", { i18n : newi18n });

	return (
		<I18nextProvider i18n={i18n}>
			<ArticlePage
				goBackLink="/#CD"
				heroImg={spiralStaircaseSm}
				title="Cyclothymic Disorder (CD)"
			>
				<ArticleSection>
					<BlurToClear>
						<H2>Apakah Itu CD?</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
						Cyclotimia atau gangguan siklotimik berasal dari bahasa
						Yunani yaitu, kylos yang artinya “lingkaran”, dan thymos
						artinya “jiwa”. Maka dapat diartikan bahwa Cyclothymia
						dapat berarti “mood swing” adalah keadaan perasaan
						seseorang yang berubah-ubah sesuai siklus yang berlaku
						dimana bias dalam episode hipomania dan episode depresi
						dengan tingkat ringan.
						</Text>
					</BlurToClear>

					<BlurToClear>
						<H2>Apakah Sama dengan Bipolar?</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
						Nah sebenarnya, Batasan antara gangguan bipolar dan
						gangguan siklotimik belum jelas. Beberapa bentuk dari
						gangguan siklotimik bisa mewakili jenis gangguan bipolar
						awal dan ringan. Meskipun siklotimia lebih ringan
						daripada gangguan bipolar, siklotimia dapat secara
						signifikan mengganggu fungsi sehari-hari seseorang (Van
						Meter, Youngstrom, & Findling dalam Nevid dkk., 2018).
						</Text>
					</BlurToClear>

					<BlurToClear>
						<H2>Bagaimana Menanganinya?</H2>
					</BlurToClear>
					<BlurToClear>
						<Text>
						Tentu saja penanganan gangguan ini harus diserahkan
						kepada ahlinya. Terapi yang bisa dilakukan bisa seperti
						terapi Bipolar yaitu terapi obat menggunakan obat
						penstabil mood atau juga bisa dengan psikoterapi dengan
						metode Cognitive Behavioral Therapy atau CBT
						</Text>
					</BlurToClear>
				</ArticleSection>

				<BlurToClear once>
					<ArticleSection>
						<H2>Kriteria DSM-V CD</H2>
						<TranslateButtons i18n={i18n} />

						<SwitchContent transitionKey={i18n.resolvedLanguage}>
							<Ol>
								<Li>{t("A.text")}</Li>
								<Li>{t("B.text")}</Li>
								<Li>{t("C.text")}</Li>
								<Li>{t("D.text")}</Li>
								<Li>{t("E.text")}</Li>
								<Li>{t("F.text")}</Li>
							</Ol>
						</SwitchContent>
					</ArticleSection>
				</BlurToClear>
			</ArticlePage>
		</I18nextProvider>
	);
};

export default React.memo(CD);
