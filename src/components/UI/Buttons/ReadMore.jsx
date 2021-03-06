import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TitleCard from "../Content/TitleCard";

const StyledLink = styled(Link).attrs({ className : "link-read-more" })`
    text-decoration: none;
	width: max-content;
`;

const ReadMore = React.forwardRef(

	/**
	 * @param {{
	 * path?:string,
	 * pos?:string,
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({ path = "/", pos = "top", id = "" }, ref) => {
		return (
			<StyledLink
				id={id}
				ref={ref}
				to={path}
			>
				<TitleCard pos={pos}>READ MORE</TitleCard>
			</StyledLink>
		);
	}
);

export default React.memo(ReadMore);