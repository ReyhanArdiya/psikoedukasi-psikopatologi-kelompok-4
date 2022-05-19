import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";
import hookAnimations from "../styles/hooks-animations";
import cssTransitionAnimations from "../styles/csstransition-animations";
import {
	Route,
	Routes,
	useLocation,
	Navigate
} from "react-router-dom";
// import SwitchContent from "./UI/Animations/SwitchContent";
import React, { Suspense, useCallback, useLayoutEffect } from "react";
import BlackBox from "./UI/Fallbacks/BlackBox";

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
const Dysthymia = React.lazy(() => import("../pages/articles/Dysthymia"));
const PMDD = React.lazy(() => import("../pages/articles/PMDD"));
const BD = React.lazy(() => import("../pages/articles/BD/BD"));
const CD = React.lazy(() => import("../pages/articles/CD"));

const App = () => {
	const location = useLocation();

	const scrollToSection = useCallback(() => {
		if (location.hash) {
			const section = document.querySelector(location.hash);
			if (section) {
				section.scrollIntoView({
					behavior : "auto",
					block    : "start"
				});
			}
		}
	}, [ location.hash ]);

	// Scroll restoration
	useLayoutEffect(() => {
		if (location.pathname !== "/") {
			window.scrollTo(0, 0);
		}

		scrollToSection();
	}, [ location.hash, location.pathname, scrollToSection ]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container id="App">
				{/* BUG using filter 0 on parent breaks background-filter on childrens */}
				{/* <SwitchContent transitionKey={location.key}> */}
				<Suspense
					fallback={<BlackBox onUnMount={scrollToSection}/>}
				>
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
							<Route
								element={<Dysthymia />}
								path="Dysthymia"
							/>
							<Route
								element={<PMDD />}
								path="PMDD"
							/>
							<Route
								element={<BD />}
								path="BD"
							/>
							<Route
								element={<CD />}
								path="CD"
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
