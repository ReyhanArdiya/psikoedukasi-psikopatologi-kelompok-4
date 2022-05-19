import { useState } from "react";
import styled from "styled-components";
import SwitchContent from "../../../Animations/SwitchContent";
import GlowingBox from "../../../Fallbacks/GlowingBox";

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	${({ theme }) => theme.others.borderRadius}
`;

const ProfileImg = styled.img`
	border-radius: inherit;
	object-fit: cover;
	object-position: ${({ pos }) => pos};
	width: 100%;
	height: 100%;
	filter: grayscale(100%);
`;

const ProfilePic = ({
	img,
	alt = "",
	title = "",
	pos = "center",
	className = ""
}) => {
	const [ isLoaded, setIsLoaded ] = useState(false);

	return (
		<SwitchContent
			className={`profile-img ${className}`}
			transitionKey={isLoaded}
		>
			<Container>
				{isLoaded || <GlowingBox />}
				<ProfileImg
					alt={alt}
					loading="lazy"
					onLoad={() => setIsLoaded(true)}
					pos={pos}
					src={img}
					title={title}
				/>
			</Container>
		</SwitchContent>
	);
};

export default ProfilePic;
