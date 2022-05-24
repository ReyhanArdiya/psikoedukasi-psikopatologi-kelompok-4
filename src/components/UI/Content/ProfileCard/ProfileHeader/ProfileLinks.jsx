import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.ul`
    color: ${({ theme }) => theme.colors.secondary[3]};
    display: flex;
    gap: 1em;
    height: max-content;
    width: max-content;
    list-style: none;
`;

const StyledLink = styled.a`
    color: inherit;
`;

const StyledFa = styled(FontAwesomeIcon)`
    font-size: 1.5em;
    height: 1em;
    min-height: 15px;
    min-width: 15px;
    width: 1em;
`;

/**
 *
 * @param {{
 * links:[{icon:SVGElement, href:string}],
 * }} props
 *
 * @returns
 */
const ProfileLinks = ({ links, className }) => {
	if (!links || links.length === 0) {
		return null;
	}

	const items = links.map(({ href, icon }) => {
		return (
			<li
				className="profile-link"
				key={uuidv4()}
			>
				<StyledLink
					href={href}
					target="_blank"
				>
					<StyledFa icon={icon}/>
				</StyledLink>
			</li>
		);
	});

	return (
		<Container
			className={`profile-links ${className}`}
		>
			{items}
		</Container>
	);
};

export default ProfileLinks;
