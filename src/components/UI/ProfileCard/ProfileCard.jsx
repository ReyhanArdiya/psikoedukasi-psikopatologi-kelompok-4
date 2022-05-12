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

const ProfileCard = ({
	profileHeaderOpts: { profilePicOpts, icons },
	profileInfo: { name, nim },
	className = ""
}) => {
	return (
		<Container className={`profile-card ${className}`}>
			<ProfileHeader
				icons={icons}
				profilePicOpts={profilePicOpts}
			/>
			<ProfileInfo
				name={name}
				nim={nim}
			/>
		</Container>
	);
};

export default ProfileCard;
