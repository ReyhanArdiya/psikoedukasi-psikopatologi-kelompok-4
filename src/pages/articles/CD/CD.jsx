import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import CDContent from "./CDContent";
import CDDSM from "./CDDSM";
import React from "react";
import spiralStaircaseSm from "../../../images/content/small/spiral-staircase-640w.jpg";

const CD = () => {
	return (
		<ArticlePage
			goBackLink="/#CD-text"
			heroImg={spiralStaircaseSm}
			title="Cyclothymic Disorder (CD)"
		>
			<CDContent />
			<CDDSM />
		</ArticlePage>
	);
};

export default React.memo(CD);
