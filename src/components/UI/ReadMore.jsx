import { Link } from "react-router-dom";
// import AcrylicDouble from "./Acrylics/AcrylicDouble";
import styled from "styled-components";
import TitleCard from "./TitleCard";

const StyledLink = styled(Link).attrs({ className : "link-read-more" })`
    text-decoration: none;
`;

const ReadMore = ({ path = "/", pos = "top" }) => {
	return (
		<StyledLink to={path}>
			<TitleCard pos={pos}>READ MORE</TitleCard>
		</StyledLink>
	);
};

export default ReadMore;