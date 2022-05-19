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
					<H2>Depresi &amp; Perasaan Sedih</H2>
				</BlurToClear>
				<BlurToClear>
					<Text>
						Faktanya, tidak semua kondisi sedih dapat dikategorikan
						sebagai bagian dari depresi. Pada dasarnya seseorang
						mungkin pernah mengalami kondisi kegagalan yang berujung
						pada kesedihan mendalam. Namun, perlu diketahui bahwa
						kesedihan berbeda dengan gangguan depresi. Tidak semua
						perasaan sedih akan menimbulkan depresi. Oleh karenanya,
						perlu ada pertimbangan cermat terkait gejala depresi
						sesuai DSM dan intervensi klinis untuk mengetahui jenis
						gangguan yang dialami seseorang.
					</Text>
				</BlurToClear>
				<BlurToClear>
					<Text>
						Menurut Oltmans & Emery (dalam Chandrawijaya & Yunanto,
						2019) Major Depressive Disorder (MDD) merupakan salah
						satu bentuk gangguan mood (suasana hati) dimana kondisi
						individu didominasi oleh perasaan tertekan (depresi).
					</Text>
				</BlurToClear>
			</ArticleSection>

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
		</ArticlePage>
	);
};

export default React.memo(Dysthymia);