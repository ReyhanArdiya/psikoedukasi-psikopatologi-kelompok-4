import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import React from "react";
import { H2, Text } from "../../../components/UI/Content/Texts";

const CDContent = () => {
	return (
		<ArticleSection>
			<BlurToClear>
				<H2>Apakah Itu CD?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					<i>Cyclotimia</i> atau gangguan siklotimik berasal dari
					bahasa Yunani yaitu, <i>kylos</i> yang artinya “lingkaran”,
					dan <i>thymos</i>
					artinya “jiwa”. Maka dapat diartikan bahwa{" "}
					<i>Cyclothymia</i>
					dapat berarti “mood swing” adalah keadaan perasaan seseorang
					yang berubah-ubah sesuai siklus yang berlaku dimana bias
					dalam episode hipomania dan episode depresi dengan tingkat
					ringan.
				</Text>
			</BlurToClear>

			<BlurToClear>
				<H2>Apakah Sama dengan Bipolar?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Nah sebenarnya, Batasan antara gangguan bipolar dan gangguan
					siklotimik belum jelas. Beberapa bentuk dari gangguan
					siklotimik bisa mewakili jenis gangguan bipolar awal dan
					ringan. Meskipun siklotimia lebih ringan daripada gangguan
					bipolar, siklotimia dapat secara signifikan mengganggu
					fungsi sehari-hari seseorang (Van Meter, Youngstrom, &
					Findling dalam Nevid dkk., 2018).
				</Text>
			</BlurToClear>

			<BlurToClear>
				<H2>Bagaimana Menanganinya?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Tentu saja penanganan gangguan ini harus diserahkan kepada
					ahlinya. Terapi yang bisa dilakukan bisa seperti terapi
					Bipolar yaitu terapi obat menggunakan obat penstabil mood
					atau juga bisa dengan psikoterapi dengan metode{" "}
					<i>Cognitive Behavioral Therapy</i> atau CBT
				</Text>
			</BlurToClear>
		</ArticleSection>
	);
};

export default React.memo(CDContent);
