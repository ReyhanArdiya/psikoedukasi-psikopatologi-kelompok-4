import styled from "styled-components";
import React from "react";

const ArticleSection = styled.section.attrs({ className : "article-section", })`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
    text-align: justify;
    width: 84.375%;
    max-width: 70em;
`;

export default React.memo(ArticleSection);