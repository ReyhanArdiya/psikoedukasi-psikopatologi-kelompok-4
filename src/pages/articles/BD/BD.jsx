import React from "react";
import ArticlePage from "../../../components/UI/Layouts/ArticlePage/ArticlePage";
import swingSm from "../../../images/content/small/swing-640w.jpg";
import swingBg from "../../../images/content/big/swing-1920w.jpg";
import BDContent from "./BDContent";
import BDI from "./BDI";
import BDII from "./BDII";

const BD = () => {
	return (
		<ArticlePage
			goBackLink="/#BD"
			heroImg={{
				big   : swingBg,
				small : swingSm
			}}
			title="Bipolar Disorders (BD I & II)"
		>
			<BDContent />
			<BDI/>
			<BDII/>
		</ArticlePage>
	);
};

export default React.memo(BD);
