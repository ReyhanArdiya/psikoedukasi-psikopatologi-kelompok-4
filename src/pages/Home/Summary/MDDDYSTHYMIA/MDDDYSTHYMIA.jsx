import styled from "styled-components";
import Section from "../../../../components/UI/Layouts/Section";
import Layout from "./Layout";
import bloomSm from "../../../../images/content/small/bloom-beach-house-770w.png";
// CMT no big bloom :(
import walkingSm from "../../../../images/content/small/walking-640w.jpg";
import walkingBg from "../../../../images/content/big/walking-1920w.jpg";

const Container = styled(Section)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const MDDDYSTHYMIA = () => {
	return (
		<Container id="MDDDYSTHYMIA">
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
				bigImg={walkingBg }
				id="DYSTHYMIA"
				imgLoc="left"
				readTo="/articles/DYSTHYMIA"
				smallImg={walkingSm}
				title="DYSTHYMIA"
			>
				Major Depressive Disorder merupakan kondisi ketika individu
				didominasi oleh depresi.
			</Layout>
		</Container>
	);
};

export default MDDDYSTHYMIA;
