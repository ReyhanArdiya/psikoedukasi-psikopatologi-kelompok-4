import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";
import hookAnimations from "../styles/hooks-animations";
import cssTransitionAnimations from "../styles/csstransition-animations";
import { Route, Routes, /* useLocation */ Navigate } from "react-router-dom";
// import SwitchContent from "./UI/Animations/SwitchContent";
import React, { Suspense } from "react";
import Fallback from "./UI/Fallback";
import { H1 } from "./UI/Content/Texts";

const GlobalStyle = createGlobalStyle`
	${cssReset}
	${hookAnimations}
	${cssTransitionAnimations}
`;

const Container = styled.div`
	background: ${({ theme }) => theme.colors.primary[1]};
	min-height: 600px;
	min-width: 320px;
	overflow: hidden;
`;

// Lazy vitches
const MDD = React.lazy(() => import("../pages/articles/MDD"));
const Home = React.lazy(() => import("../pages/Home/Home"));

const App = () => {
	// const location = useLocation();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container id="App">
				{/* BUG using filter 0 on parent breaks background-filter on childrens */}
				{/* <SwitchContent transitionKey={location.key}> */}
				<Suspense fallback={<Fallback><H1>Loading...</H1></Fallback>}>
					<Routes>
						<Route
							element={<Home/>}
							path="/"
						/>
						<Route path="/articles">
							<Route
								element={<MDD />}
								path="MDD"
							/>
						</Route>
						<Route
							element={<Navigate
								replace
								to="/"
							         />}
							path="*"
						/>
					</Routes>
				</Suspense>
				{/* </SwitchContent> */}
			</Container>
		</ThemeProvider>
	);
};

export default App;
