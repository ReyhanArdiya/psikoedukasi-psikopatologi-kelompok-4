import React from "react";
import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import mountainSM from "../../../images/content/small/mountain-640w.jpg";
import MDDContent from "./MDDContent";
import MDDDSM from "./MDDDSM";

const MDD = () => {
	return (
		<ArticlePage
			goBackLink="/#MDD"
			heroImg={mountainSM}
			title="Major Depressive Disorder (MDD)"
		>
			<MDDContent/>
			<MDDDSM/>
		</ArticlePage>
	);
};

export default React.memo(MDD);
