import styled from "styled-components";
import HomeHero from "./HomeHero";
import React from "react";

const Container = styled.div`

`;

const Home = ({ propsDestruct }) => {
	return (
		<Container id="Home">
			<HomeHero/>
		</Container>
	);
};

export default React.memo(Home);