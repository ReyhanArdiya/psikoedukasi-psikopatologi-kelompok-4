import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";
import hookAnimations from "../styles/hooks-animations";
import cssTransitionAnimations from "../styles/csstransition-animations";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import MDD from "../pages/articles/MDD";
import SwitchContent from "./UI/Animations/SwitchContent";
import Home from "../pages/Home/Home";

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

const App = () => {
	const location = useLocation();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container id="App">
				<SwitchContent transitionKey={location.key}>
					<Routes>
						{/* DBG delete the name after to after final deployment */}
						<Route
							element={<Home/>}
							path="/psikoedukasi-psikopatologi-kelompok-4"
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
								to="/psikoedukasi-psikopatologi-kelompok-4"
							         />}
							path="*"
						/>
					</Routes>
				</SwitchContent>
			</Container>
		</ThemeProvider>
	);
};

export default App;
