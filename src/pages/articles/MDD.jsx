// import styled from "styled-components";
import React from "react";
import ArticlePage from "../../components/UI/Layouts/ArticlePage/ArticlePage";
import mountainSM from "../../images/content/small/mountain-640w.jpg";
import mountainBg from "../../images/content/big/mountain-1920w.jpg";

const MDD = () => {
	return (
		<ArticlePage
			goBackLink="/#MDD"
			heroImg={{
				big   : mountainBg,
				small : mountainSM,
			}}
			title="Major Depressive Disorder (MDD)"
		>
			<p>Tet</p>
		</ArticlePage>
	);
};

export default React.memo(MDD);