import styled from "styled-components";
import Section from "../../../../components/UI/Layouts/Section";
import Layout from "./Layout";
import bloomSm from "../../../../images/content/small/bloom-beach-house-770w.jpg";
// CMT no big bloom :(
import walkingSm from "../../../../images/content/small/walking-640w.jpg";
import walkingBg from "../../../../images/content/big/walking-1920w.jpg";
import whiteRosesSm from "../../../../images/content/small/white-roses-640w.jpg";
import whiteRosesBg from "../../../../images/content/big/white-roses-1920w.jpg";

const Container = styled(Section)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const DepressiveDisorders = () => {
	return (
		<Container id="depressive-disorders">
			<Layout
				bigImg={bloomSm}
				id="MDD"
				imgLoc="right"
				readTo="/articles/MDD"
				smallImg={bloomSm}
				title="MDD"
			>
				Major Depressive Disorder merupakan kondisi ketika individu
				didominasi oleh depresi.
			</Layout>
			<Layout
				bigImg={walkingBg}
				id="DYSTHYMIA"
				imgLoc="left"
				readTo="/articles/Dysthymia"
				smallImg={walkingSm}
				title="DYSTHYMIA"
			>
				Ketika depresi berlangsung bertahun-tahun, itu disebut
				“Dysthymia”.
			</Layout>
			<Layout
				bigImg={whiteRosesBg}
				id="PMDD"
				imgLoc="right"
				readTo="/articles/PMDD"
				smallImg={whiteRosesSm}
				title="PMDD"
			>
				Bentuk yang lebih parah dari PMS.
			</Layout>
		</Container>
	);
};

export default DepressiveDisorders;
