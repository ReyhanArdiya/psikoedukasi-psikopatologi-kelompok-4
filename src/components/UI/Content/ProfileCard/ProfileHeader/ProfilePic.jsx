import { useState } from "react";
import styled from "styled-components";
import SwitchContent from "../../../Animations/SwitchContent";

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
	${({ theme }) => theme.effects.dropShadow}
	border-radius: inherit;
	height: 100%;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;

	@keyframes glowing{
		from {
			background: #696969;
		}

		to {
			background: white;
		}
	}

	animation: glowing 1.5s infinite alternate ease;

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
