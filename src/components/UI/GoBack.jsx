import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TitleCard from "./TitleCard";

const StyledLink = styled(Link).attrs({ className : "link-read-more" })`
    text-decoration: none;
`;

const GoBack = React.forwardRef(({ path = "/", pos = "bottom" }, ref) => {
	return (
		<StyledLink
			ref={ref}
			to={path}
		>
			<TitleCard pos={pos}>GO BACK</TitleCard>
		</StyledLink>
	);
});

export default React.memo(GoBack);