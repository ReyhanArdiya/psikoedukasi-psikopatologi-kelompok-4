import React from "react";
import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import holdingHandsSm from "../../../images/content/small/holding-hands-640w.jpg";
import Depression from "./Depression";
import Bipolar from "./Bipolar";

const Treatment = () => {
	return (
		<ArticlePage
			goBackLink="/#Treatment-read-more"
			heroImg={holdingHandsSm}
			title="Penanganan Gangguan Suasana Hati (Mood Disorder)"
		>
			<Depression />
			<Bipolar/>
		</ArticlePage>
	);
};

export default React.memo(Treatment);
