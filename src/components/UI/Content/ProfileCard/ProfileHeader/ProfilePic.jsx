import { useState } from "react";
import styled from "styled-components";
import SwitchContent from "../../../Animations/SwitchContent";
import fallbackSm from "../../../../../images/content/small/black-acrylic-paint-640w.jpg";
import fallbackBg from "../../../../../images/content/big/black-acrylic-paint-1920w.jpg";

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

const Fallback = styled.div`
	content: "";
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	border-radius: inherit;
	z-index: 2;

	${({ theme }) => theme.others.responsiveBg(fallbackSm, fallbackBg)}

	::after {
		${({ theme }) => theme.effects.acrylicWShadow}
		border-radius: inherit;
		content: "";
		height: 100%;
		position: absolute;
		top: 0;
		width: 100%;
	}
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
				{isLoaded || <Fallback />}
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
