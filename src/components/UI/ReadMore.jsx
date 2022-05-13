import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TitleCard from "./TitleCard";

const StyledLink = styled(Link).attrs({ className : "link-read-more" })`
    text-decoration: none;
	width: max-content;
`;

const ReadMore = React.forwardRef(({ path = "/", pos = "top" }, ref) => {
	return (
		<StyledLink
			ref={ref}
			to={path}
		>
			<TitleCard pos={pos}>READ MORE</TitleCard>
		</StyledLink>
	);
});

export default React.memo(ReadMore);