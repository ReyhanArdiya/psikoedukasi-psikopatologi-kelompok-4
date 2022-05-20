import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import PMDDContent from "./PMDDContent";
import PMDDDSM from "./PMDDDSM";
import React from "react";
import whiteRosesSm from "../../../images/content/small/white-roses-640w.jpg";

const PMDD = () => {
	return (
		<ArticlePage
			goBackLink="/#PMDD"
			heroImg={whiteRosesSm}
			title="Premenstrual Dysphoric Disorder (PMDD)"
		>
			<PMDDContent />
			<PMDDDSM />
		</ArticlePage>
	);
};

export default React.memo(PMDD);
