import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import React from "react";
import { H2, Text } from "../../../components/UI/Content/Texts";

const PMDDContent = () => {
	return (
		<ArticleSection>
			<BlurToClear>
				<H2>Apakah Itu?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Bentuk yang lebih parah dari PMS dimana selama periode
					menstruasi, wanita akan mengalami beberapa gejala fisik yang
					juga berhubungan dengan suasana hati. Kenapa hal ini bisa
					terjadi? Para peneliti menduga adanya peran hormon seksual
					wanita, neurotransmiter (Bäckström dkk.; Kiesner dalam Nevid
					dkk., 2018) dan faktor psikologis.
				</Text>
			</BlurToClear>

			<BlurToClear>
				<H2>Bukannya Sama seperti PMS?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Walaupun gejalanya mirip, faktanya bahwa terdapat perbedaan
					pada intensitas gejala yang dialami wanita selama periode
					tersebut. Wanita yang sedang mengalami PMS masih bisa
					berfungsi dengan normal dalam kehidupannya, tapi mereka yang
					mengalami PMDD akan merasakan gejala yang lebih parah
					sehingga bisa saja mengganggu kehidupan sehari-hari mereka.
				</Text>
			</BlurToClear>

			<BlurToClear>
				<H2>Bagaimana Menanganinya?</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Gejala PMDD bisa diredakan melalui memulai gaya hidup yang
					sehat, terapi kognitif dan obat-obatan seperti antidepresan.
				</Text>
			</BlurToClear>
		</ArticleSection>
	);
};

export default React.memo(PMDDContent);
