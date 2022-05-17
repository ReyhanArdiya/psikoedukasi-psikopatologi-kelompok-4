import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import ProfileCard from "../../../components/UI/Content/ProfileCard/ProfileCard";
import Section from "../../../components/UI/Layouts/Section";
import alissa from "../../../images/members/alissa.jpg";
import fithrah from "../../../images/members/fithrah.jpeg";
import wawan from "../../../images/members/wawan.png";
import reyhan from "../../../images/members/reyhan.jpg";
import novita from "../../../images/members/novita.jpg";
import rifqi from "../../../images/members/rifqi.jpg";

const Container = styled(Section)`
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1em;
`;

const Members = () => {
	return (
		<Container id="members">
			<ProfileCard
				id="member-alissa"
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

			<ProfileCard
				id="member-fithrah"
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

			<ProfileCard
				id="member-wawan"
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

			<ProfileCard
				id="member-reyhan"
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
						},
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

			<ProfileCard
				id="member-novita"
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

			<ProfileCard
				id="member-rifqi"
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
		</Container>
	);
};

export default Members;

/*
List Akun:
1. Reyhan: @reyhan_roze
2. Fithrah : @fth.rh
3. Alissa   : @im__anggaraalissa
4. Novita: @novitarhp
5. Wawan : @azzam.twan
*/
