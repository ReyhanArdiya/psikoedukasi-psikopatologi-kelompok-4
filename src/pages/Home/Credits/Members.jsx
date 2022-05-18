import ProfileCard from "../../../components/UI/Content/ProfileCard/ProfileCard";
import Section from "../../../components/UI/Layouts/Section";
import alissa from "../../../images/members/alissa.jpg";
import fithrah from "../../../images/members/fithrah.jpeg";
import novita from "../../../images/members/novita.jpg";
import reyhan from "../../../images/members/reyhan.jpg";
import rifqi from "../../../images/members/rifqi.jpg";
import styled from "styled-components";
import wawan from "../../../images/members/wawan.jpg";
import {
	faGithub,
	faInstagram,
	faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { v4 as uuidv4 } from "uuid";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";
import statueBg from "../../../images/content/big/statue-1920w.jpg";
import statueSm from "../../../images/content/small/statue-640w.jpg";

const position = "-50%";
const Container = styled(Section)`
	font-size: 1.6em;
	height: max-content;
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr;
	grid-template-areas:
		"m1"
		"m2"
		"m3"
		"m4"
		"m5"
		"m6";
	align-items: center;
	justify-items: center;
	gap: 8em;
	margin-bottom: 3em;
	padding-top: 7em;

	.profile-card {
		z-index: 1;
	}

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

	@media screen and (min-width: 59.375em) {
		grid-template-areas:
			"m1 m2 m3"
			"m4 m5 m6";
		gap: 0;
		padding-top: 0;
		height: 100vh;
		min-height: 700px;
		margin-bottom: 0;
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
	return (
		<Container id="members">
			<BlurToClear once>
				<ProfileCard
					id="member-alissa"
					key={uuidv4()}
					profileHeader={{
						links : [
							{
								href : "https://www.instagram.com/im__anggaraalissa/",
								icon : faInstagram
							}
						],
						profilePic : {
							alt   : "Member Alissa",
							img   : alissa,
							pos   : "center",
							title : "Member Alissa"
						}
					}}
					profileInfo={{
						name : "Alissa Dwi Anggara",
						nim  : "15000120120052"
					}}
				/>
			</BlurToClear>

			<BlurToClear once>
				<ProfileCard
					id="member-fithrah"
					key={uuidv4()}
					profileHeader={{
						links : [
							{
								href : "https://www.instagram.com/fth.rh/",
								icon : faInstagram
							}
						],
						profilePic : {
							alt   : "Member Fithrah",
							img   : fithrah,
							pos   : "center",
							title : "Member Fithrah"
						}
					}}
					profileInfo={{
						name : "Fitrah Rohimah",
						nim  : "15000120140342"
					}}
				/>
			</BlurToClear>

			<BlurToClear once>
				<ProfileCard
					id="member-wawan"
					key={uuidv4()}
					profileHeader={{
						links : [
							{
								href : "https://www.instagram.com/azzam.twan/",
								icon : faInstagram
							}
						],
						profilePic : {
							alt   : "Member Wawan",
							img   : wawan,
							pos   : "bottom",
							title : "Member Wawan"
						}
					}}
					profileInfo={{
						name : "M. Azzam Taqwawan",
						nim  : "15000120140336"
					}}
				/>
			</BlurToClear>

			<BlurToClear once>
				<ProfileCard
					id="member-reyhan"
					key={uuidv4()}
					profileHeader={{
						links : [
							{
								href : "https://github.com/ReyhanArdiya",
								icon : faGithub
							},
							{
								href : "www.linkedin.com/in/mreyhanapw",
								icon : faLinkedinIn
							},
							{
								href : "https://www.instagram.com/reyhan_roze/",
								icon : faInstagram
							}
						],
						profilePic : {
							alt   : "Member Reyhan",
							img   : reyhan,
							pos   : "100% 30%",
							title : "Member Reyhan"
						}
					}}
					profileInfo={{
						name : "M. Reyhan A.P.W",
						nim  : "15000120120008"
					}}
				/>
			</BlurToClear>

			<BlurToClear once>
				<ProfileCard
					id="member-novita"
					key={uuidv4()}
					profileHeader={{
						links : [
							{
								href : "https://www.instagram.com/novitarhp/",
								icon : faInstagram
							}
						],
						profilePic : {
							alt   : "Member Novita",
							img   : novita,
							pos   : "center",
							title : "Member Novita"
						}
					}}
					profileInfo={{
						name : "Novita Retno H.P.",
						nim  : "15000120130247"
					}}
				/>
			</BlurToClear>

			<BlurToClear once>
				<ProfileCard
					id="member-rifqi"
					key={uuidv4()}
					profileHeader={{
						links : [
							{
								href : "https://www.instagram.com/rifqiprime/",
								icon : faInstagram
							}
						],
						profilePic : {
							alt   : "Member Rifqi",
							img   : rifqi,
							pos   : "center",
							title : "Member Rifqi"
						}
					}}
					profileInfo={{
						name : "Rifqi Prime A",
						nim  : "15000117140114"
					}}
				/>
			</BlurToClear>
		</Container>
	);
};

export default Members;
