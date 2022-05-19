import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";
import hookAnimations from "../styles/hooks-animations";
import cssTransitionAnimations from "../styles/csstransition-animations";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import SwitchContent from "./UI/Animations/SwitchContent";
import React, { Suspense, useLayoutEffect } from "react";
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

const App = () => {
	const location = useLocation();

	// Restore scroll position when routing to other pages EXCEPT for "/"
	useLayoutEffect(() => {
		if (location.pathname !== "/") {
			window.scrollTo(0, 0);
		}
	}, [ location.pathname ]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container id="App">
				{/* BUG using filter 0 on parent breaks background-filter on childrens */}
				{/* <SwitchContent transitionKey={location.key}> */}
				<Suspense
					fallback={<BlackBox/>}
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
