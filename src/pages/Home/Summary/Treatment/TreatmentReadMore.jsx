import styled from "styled-components";
import ReadMore from "../../../../components/UI/Buttons/ReadMore";
import Section from "../../../../components/UI/Layouts/Section";
import spotlightSm from "../../../../images/content/small/spotlight-640w.jpg";
import spotlightBg from "../../../../images/content/big/spotlight-1920w.jpg";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlurToClear from "../../../../components/UI/Animations/BlurToClear";

const Container = styled(Section)`
	align-items: center;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: absolute !important;
	width: 100%;

	background-size: cover;
	background-repeat: repeat-x;

	.title-card {
		margin-bottom: 3.731em;
	}
`;

const Images = styled.div`
	align-items: center;
	bottom: 0;
	display: flex;
	height: 100%;
	justify-content: center;
	position: absolute;
	width: 100%;
`;

const Image = styled.div`
	flex-grow: 1;
	height: 100%;
	width: 100%;

	${({ theme }) => theme.others.responsiveBg(spotlightSm, spotlightBg)}
	${({ big, flip }) => {
		if (big && flip) {
			return "transform: scaleX(-1) scaleX(1.01);";
		} else if (flip) {
			return "transform: scaleX(-1);";
		} else if (big) {
			return "transform: scaleX(1.01);";
		}
	}}

    background-position: bottom;
	background-size: cover;
`;

let firstLoad = true;
const TreatmentReadMore = () => {
	const [ images, setImages ] = useState(<Image flip />);

	useEffect(() => {
		const media = window.matchMedia("screen and (min-width: 48em)");

		const changeImages = ev => {
			if (ev.matches) {
				setImages([
					<Image
						big={ev.matches}
						key={uuidv4()}
					/>,
					<Image
						big={ev.matches}
						flip
						key={uuidv4()}
					/>,
					<Image
						big={ev.matches}
						key={uuidv4()}
					/>
				]);
			} else {
				setImages(<Image flip />);
			}
		};

		media.addEventListener("change", changeImages);

		if (firstLoad) {
			changeImages(media);
			firstLoad = false;
		}

		return () => media.removeEventListener("change", changeImages);
	}, []);

	return (
		<BlurToClear
			once
			options={{ threshold : 0.5 }}
		>
			<Container>
				<ReadMore path="/articles/treatment" />
				<Images>{images}</Images>
			</Container>
		</BlurToClear>
	);
};

export default TreatmentReadMore;
