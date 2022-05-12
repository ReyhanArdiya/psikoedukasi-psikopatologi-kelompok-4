import styled from "styled-components";
import AcrylicWBg from "../../Acrylics/AcrylicWBg";
import ProfileLinks from "./ProfileLinks";
import ProfilePic from "./ProfilePic";

const Container = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    width: max-content;
    height: max-content;
    ${({ theme }) => theme.others.borderRadius}
`;

const SqrProfilePic = styled(ProfilePic)`
	width: 10em;
	height: 10em;
    position: absolute;
    top: -66.67%;
    z-index: 3;
`;

const StyledAcrylicWBg = styled(AcrylicWBg)`
    width: 16.5em;
    height: 7.5em;
`;

const AbsoluteProfileLinks = styled(ProfileLinks)`
    position: absolute;
    z-index: 2;
    right: 3.035%;
    bottom: 6.675%;
`;

const ProfileHeader = ({ profilePicOpts: { img, alt = "", title = "", pos = "center" }, icons }) => {
	return (
		<Container className="profile-header">
			<SqrProfilePic
				alt={alt}
				img={img}
				pos={pos}
				title={title}
			/>
			<StyledAcrylicWBg />
			<AbsoluteProfileLinks icons={icons}/>
		</Container>
	);
};

export default ProfileHeader;