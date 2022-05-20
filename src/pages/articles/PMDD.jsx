import React from "react";
import { useTranslation } from "react-i18next";
import ArticlePage from "../../components/UI/Layouts/ArticlePage/ArticlePage";
import whiteRosesSm from "../../images/content/small/white-roses-640w.jpg";
import ArticleSection from "../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../components/UI/Content/Texts";
import TranslateButtons from "../../components/UI/Buttons/TranslateButtons";
import SwitchContent from "../../components/UI/Animations/SwitchContent";
import Ol from "../../components/UI/Layouts/List/Ol";
import Li from "../../components/UI/Layouts/List/Li";
import Note from "../../components/UI/Content/Note/Note";

const PMDD = () => {
	const { t, i18n } = useTranslation("PMDD");

	return (
		<ArticlePage
			goBackLink="/#PMDD"
			heroImg={whiteRosesSm}
			title="Premenstrual Dysphoric Disorder (PMDD)"
		>
			<ArticleSection>
				<BlurToClear>
					<H2>Apakah Itu?</H2>
				</BlurToClear>
				<BlurToClear>
					<Text>
						Bentuk yang lebih parah dari PMS dimana selama periode
						menstruasi, wanita akan mengalami beberapa gejala fisik
						yang juga berhubungan dengan suasana hati. Kenapa hal
						ini bisa terjadi? Para peneliti menduga adanya peran
						hormon seksual wanita, neurotransmiter (Bäckström dkk.;
						Kiesner dalam Nevid dkk., 2018) dan faktor psikologis.
					</Text>
				</BlurToClear>

				<BlurToClear>
					<H2>Bukannya Sama seperti PMS?</H2>
				</BlurToClear>
				<BlurToClear>
					<Text>
						Walaupun gejalanya mirip, faktanya bahwa terdapat
						perbedaan pada intensitas gejala yang dialami wanita
						selama periode tersebut. Wanita yang sedang mengalami
						PMS masih bisa berfungsi dengan normal dalam
						kehidupannya, tapi mereka yang mengalami PMDD akan
						merasakan gejala yang lebih parah sehingga bisa saja
						mengganggu kehidupan sehari-hari mereka.
					</Text>
				</BlurToClear>

				<BlurToClear>
					<H2>Bagaimana Menanganinya?</H2>
				</BlurToClear>
				<BlurToClear>
					<Text>
						Gejala PMDD bisa diredakan melalui memulai gaya hidup
						yang sehat, terapi kognitif dan obat-obatan seperti
						antidepresan.
					</Text>
				</BlurToClear>
			</ArticleSection>

			<BlurToClear once>
				<ArticleSection>
					<H2>Kriteria DSM-V PMDD</H2>
					<TranslateButtons i18n={i18n} />

					<SwitchContent transitionKey={i18n.resolvedLanguage}>
						<Ol>
							<Li>{t("A.text")}</Li>
							<Li>
								{t("B.text")}
								<Ol>
									<Li>{t("B.nest.1")}</Li>
									<Li>{t("B.nest.2")}</Li>
									<Li>{t("B.nest.3")}</Li>
									<Li>{t("B.nest.4")}</Li>
								</Ol>
							</Li>
							<Li>
								{t("C.text")}
								<Ol>
									<Li>{t("C.nest.1")}</Li>
									<Li>{t("C.nest.2")}</Li>
									<Li>{t("C.nest.3")}</Li>
									<Li>{t("C.nest.4")}</Li>
									<Li>{t("C.nest.5")}</Li>
									<Li>{t("C.nest.6")}</Li>
									<Li>{t("C.nest.7")}</Li>
								</Ol>
							</Li>
							<Note>{t("Note1.text")}</Note>
							<Li>{t("D.text")}</Li>
							<Li>{t("E.text")}</Li>
							<Li
								dangerouslySetInnerHTML={{ __html : t("F.text") }}
							/>
							<Li>{t("G.text")}</Li>
						</Ol>
					</SwitchContent>
				</ArticleSection>
			</BlurToClear>
		</ArticlePage>
	);
};

export default React.memo(PMDD);
