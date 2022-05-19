import styled, { css } from "styled-components";
import ArticleSection from "../../../components/UI/Layouts/ArticlePage/ArticleSection";

const DSMLayout = styled(ArticleSection)`
	width: 100%;
	display: grid;
	align-items: start;

	${({ theme }) => theme.breakpoints.big(css`
			grid-template-columns: 1fr 1fr;
			column-gap: 8.2em;
	`)}
`;

export default DSMLayout;