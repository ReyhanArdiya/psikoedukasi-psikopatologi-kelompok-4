import React from "react";
import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import holdingHandsSm from "../../../images/content/small/holding-hands-640w.jpg";
import holdingHandsBg from "../../../images/content/big/holding-hands-1920w.jpg";
import Depression from "./Depression";

const Treatment = () => {
	return (
		<ArticlePage
			goBackLink="/#Treatment"
			heroImg={{
				big   : holdingHandsBg,
				small : holdingHandsSm
			}}
			title="Penanganan Gangguan Suasana Hati (Mood Disorder)"
		>
			<Depression />
		</ArticlePage>
	);
};

export default React.memo(Treatment);
