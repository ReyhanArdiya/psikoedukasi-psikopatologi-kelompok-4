import ProfileCard from "../../../components/UI/Content/ProfileCard/ProfileCard";
import Section from "../../../components/UI/Layouts/Section";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import statueBg from "../../../images/content/big/statue-1920w.jpg";
import statueSm from "../../../images/content/small/statue-640w.jpg";
import members from "../../../data/members";

const position = "-50%";
const Container = styled(Section)`
	font-size: 1.6em;
	height: max-content;
	width: 100%;

	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	align-items: center;
	justify-items: center;
	row-gap: 8em;
	margin-bottom: 3em;
	padding-top: 7em;

	.profile-card {
		z-index: 1;
	}

	@media screen and (min-width: 59.375em) {
		grid-template-areas:
			"m1 m2 m3"
			"m4 m5 m6"
			"m7 m7 m7"
			;
			padding-top: 0;
		min-height: 700px;

		.profile-card:first-of-type {
			grid-area: m1;
		}

		.profile-card:nth-of-type(2) {
			grid-area: m2;
		}

		.profile-card:nth-of-type(3) {
			grid-area: m3;
		}

		.profile-card:nth-of-type(4) {
			grid-area: m4;
		}

		.profile-card:nth-of-type(5) {
			grid-area: m5;
		}

		.profile-card:nth-of-type(6) {
			grid-area: m6;
		}

		.profile-card:nth-of-type(7) {
			grid-area: m7;
		}
	}

	/* Statue decos */
	position: relative;

	::before,
	::after {
		${({ theme }) => theme.others.responsiveBg(statueSm, statueBg)}
		background-size: contain;
		content: "";
		height: 30.4em;
		position: absolute;
		width: 100%;
	}

	::before {
		left: ${position};
		top: 0;
	}

	::after {
		right: ${position};
		transform: scaleX(-1);
		bottom: 0;
	}
`;

const Members = () => {
	const memberList = members.map(
		({
			name,
			nim,
			links,
			profilePic,
			id
		}) => <BlurToClear
			key={uuidv4()}
			once >
			<ProfileCard
				id={id}
				profileHeader={{
					links,
					profilePic
				}}
				profileInfo={{
					name,
					nim
				}}
			/>
		</BlurToClear>
	);

	return (
		<Container id="members">
			{memberList}
		</Container>
	);
};

export default Members;
