import styled from "styled-components";
import GoBack from "../../Buttons/GoBack";
import ArticleHero from "./ArticleHero";
import React from "react";

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;

	padding-bottom: 2em;
	gap: 4em;
`;

const Content = styled.main`
	display: flex;
	flex-direction: column;
	gap: 4em;
	align-items: center;
	width: 100%;
`;

const ArticlePage = ({
	title,
	children: content,
	goBackLink = "/",
	heroImg
}) => {
	return (
		<Container className="article">
			<ArticleHero
				img={heroImg}
				title={title}
			/>
			<Content className="article-content">{content}</Content>
			<GoBack path={goBackLink} />
		</Container>
	);
};

export default React.memo(ArticlePage);
