import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import DysthymiaContent from "./DysthymiaContent";
import DysthymiaDSM from "./DysthymiaDSM";
import React from "react";
import foggyLakeSm from "../../../images/content/small/foggy-lake-640w.jpg";

const Dysthymia = () => {
	return (
		<ArticlePage
			goBackLink="/#DYSTHYMIA"
			heroImg={foggyLakeSm}
			title="Persistent Depressive Disorder (Dysthymia)"
		>
			<DysthymiaContent/>
			<DysthymiaDSM/>
		</ArticlePage>
	);
};

export default React.memo(Dysthymia);
