import ProfileCard from "../../../components/UI/Content/ProfileCard/ProfileCard";
import Section from "../../../components/UI/Layouts/Section";
import alissa from "../../../images/members/alissa.jpg";
import fithrah from "../../../images/members/fithrah.jpeg";
import novita from "../../../images/members/novita.jpg";
import reyhan from "../../../images/members/reyhan.jpg";
import rifqi from "../../../images/members/rifqi.jpg";
import styled, { css } from "styled-components";
import wawan from "../../../images/members/wawan.png";
import {
	faGithub,
	faInstagram,
	faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { v4 as uuidv4 } from "uuid";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";

const Container = styled(Section)`
	height: max-content;
	display: grid;
	grid-auto-columns: 1fr;
	grid-template-areas:
		"m1"
		"m2"
		"m3"
		"m4"
		"m5"
		"m6";
	align-content: center;
	gap: 8em;
	justify-items: center;
	padding-bottom: 3em;
	padding-top: 7em;

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

	${({ theme }) => theme.breakpoints.big(css`
			grid-template-areas:
				"m1 m4"
				"m2 m5"
				"m3 m6";
            max-width: 76.8rem;
            margin: 0 auto;
            height: 100vh;
		`)}
`;

const Members = () => {
	const membersList = [
		<BlurToClear>
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
		</BlurToClear>,

		<BlurToClear>
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
		</BlurToClear>,

		<BlurToClear>
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
		</BlurToClear>,

		<BlurToClear>
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
						pos   : "center",
						title : "Member Reyhan"
					}
				}}
				profileInfo={{
					name : "M. Reyhan A.P.W",
					nim  : "15000120120008"
				}}
			/>
		</BlurToClear>,

		<BlurToClear>
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
		</BlurToClear>,

		<BlurToClear>
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
	];

	return <Container id="members">{membersList}</Container>;
};

export default Members;
