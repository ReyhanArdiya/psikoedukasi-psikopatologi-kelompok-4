import styled from "styled-components";

const ProfileImg = styled.img`
	${({ theme }) => theme.others.borderRadius}
	/* width: 100px;
	height: 100px; */
	object-fit: cover;
	object-position: ${({ pos }) => pos};
`;

const ProfilePic = ({ img, alt = "", title = "", pos = "center", className = "" }) => {
	return (
		<ProfileImg
			alt={alt}
			className={`profile-img ${className}`}
			pos={pos}
			src={img}
			title={title}
		/>
	);
};

export default ProfilePic;