import styled from "styled-components";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Container = styled.article`
	font-size: 1em;
    ${({ theme }) => theme.others.borderRadius}
`;

const ProfileCard = ({
	profileHeaderOpts: { profilePicOpts, icons },
	className = ""
}) => {
	return (
		<Container className={`profile-card ${className}`}>
			<ProfileHeader
				icons={icons}
				profilePicOpts={profilePicOpts}
			/>
			<section></section>
		</Container>
	);
};

export default ProfileCard;
