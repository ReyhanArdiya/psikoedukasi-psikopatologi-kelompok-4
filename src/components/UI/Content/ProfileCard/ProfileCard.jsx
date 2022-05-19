import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Container = styled.article`
	font-size: 1em;
    background: ${({ theme }) => theme.colors.primary[2]};
    width: max-content;
    height: max-content;
    ${({ theme }) => theme.others.borderRadius}
    ${({ theme }) => theme.effects.dropShadow}
`;

const ProfileCard = React.forwardRef(

	/**
	 * @param {{
	 * profileHeader: {
	 * 	profilePic: {
	 *		img: any;
	 *		alt?: string;
	 *		title?: string;
	 *		pos?: string;
	 *	},
	 *	links: [{
	 *		icon: SVGElement;
	 *		href: string;
	 *	}]
	 * },
	 * profileInfo: {
	 * 	name: string,
	 * 	nim: number
	 * },
	 * className?: string,
	 * id?: string
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({
		profileHeader: { profilePic, links },
		profileInfo: { name, nim },
		className = "",
		id = ""
	}, ref) => {
		return (
			<Container
				className={`profile-card ${className}`}
				id={id}
				ref={ref}
			>
				<ProfileHeader
					links={links}
					profilePic={profilePic}
				/>
				<ProfileInfo
					name={name}
					nim={nim}
				/>
			</Container>
		);
	}
);

export default React.memo(ProfileCard);
