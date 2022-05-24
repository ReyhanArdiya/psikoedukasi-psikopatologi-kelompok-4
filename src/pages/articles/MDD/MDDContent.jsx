import React from "react";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import { H2, Text } from "../../../components/UI/Content/Texts";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";

const MDDContent = () => {
	return (
		<ArticleSection>
			<BlurToClear>
				<H2>Depresi &amp; Perasaan Sedih</H2>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Faktanya, tidak semua kondisi sedih dapat dikategorikan
					sebagai bagian dari depresi. Pada dasarnya seseorang mungkin
					pernah mengalami kondisi kegagalan yang berujung pada
					kesedihan mendalam. Namun, perlu diketahui bahwa kesedihan
					berbeda dengan gangguan depresi. Tidak semua perasaan sedih
					akan menimbulkan depresi. Oleh karenanya, perlu ada
					pertimbangan cermat terkait gejala depresi sesuai DSM dan
					intervensi klinis untuk mengetahui jenis gangguan yang
					dialami seseorang.
				</Text>
			</BlurToClear>
			<BlurToClear>
				<Text>
					Menurut Oltmans & Emery (dalam Chandrawijaya & Yunanto,
					2021) Major Depressive Disorder (MDD) merupakan salah satu
					bentuk gangguan mood (suasana hati) dimana kondisi individu
					didominasi oleh perasaan tertekan (depresi).
				</Text>
			</BlurToClear>
		</ArticleSection>
	);
};

export default React.memo(MDDContent);
