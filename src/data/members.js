import Member from "../models/member";
import alissa from "../images/members/alissa.jpg";
import fithrah from "../images/members/fithrah.jpeg";
import novita from "../images/members/novita.jpg";
import reyhan from "../images/members/reyhan.jpg";
import rifqi from "../images/members/rifqi.jpg";
import wawan from "../images/members/wawan.jpg";
import kartika from "../images/members/kartika.jpg";
import {
	faGithub,
	faInstagram,
	faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const members = [
	new Member(
		"Alissa Dwi Anggara",
		"15000120120052",
		[
			{
				href : "https://www.instagram.com/im__anggaraalissa/",
				icon : faInstagram
			}
		],
		{
			alt   : "Member Alissa",
			img   : alissa,
			pos   : "center",
			title : "Member Alissa"
		},
		"member-alissa"
	),
	new Member(
		"Fithrah Rohimah",
		"15000120140342",
		[
			{
				href : "https://www.instagram.com/fth.rh/",
				icon : faInstagram
			}
		],
		{
			alt   : "Member Fithrah",
			img   : fithrah,
			pos   : "center",
			title : "Member Fithrah"
		},
		"member-fithrah"
	),
	new Member(
		"M. Azzam Taqwawan",
		"15000120140336",
		[
			{
				href : "https://www.instagram.com/azzam.twan/",
				icon : faInstagram
			}
		],
		{
			alt   : "Member Wawan",
			img   : wawan,
			pos   : "bottom",
			title : "Member Wawan"
		},
		"member-wawan"
	),
	new Member(
		"M. Reyhan A.P.W",
		"15000120120008",
		[
			{
				href : "https://github.com/ReyhanArdiya",
				icon : faGithub
			},
			{
				href : "https://www.linkedin.com/in/mreyhanapw",
				icon : faLinkedinIn
			},
			{
				href : "https://www.instagram.com/reyhan_roze/",
				icon : faInstagram
			}
		],
		{
			alt   : "Member Reyhan",
			img   : reyhan,
			pos   : "100% 30%",
			title : "Member Reyhan"
		},
		"member-reyhan"
	),
	new Member(
		"Novita Retno H.P.",
		"15000120130247",
		[
			{
				href : "https://www.instagram.com/novitarhp/",
				icon : faInstagram
			}
		],
		{
			alt   : "Member Novita",
			img   : novita,
			pos   : "center",
			title : "Member Novita"
		},
		"member-novita"
	),
	new Member(
		"Rifqi Prime A.",
		"15000117140114",
		[
			{
				href : "https://www.instagram.com/rifqiprime/",
				icon : faInstagram
			}
		],
		{
			alt   : "Member Rifqi",
			img   : rifqi,
			pos   : "center",
			title : "Member Rifqi"
		},
		"member-rifqi"
	),
	new Member(
		"Kartika Sari Dewi, S.Psi., M.Psi.",
		"Dosen Pengampu",
		null,
		{
			alt   : "Dosen Kartika Sari Dewi, S.Psi., M.Psi.",
			img   : kartika,
			pos   : "center",
			title : "Dosen Kartika Sari Dewi, S.Psi., M.Psi."
		},
		"dosen-kartika"
	)
];

export default members;
