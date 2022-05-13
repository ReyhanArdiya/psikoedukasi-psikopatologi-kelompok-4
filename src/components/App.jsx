import { ThemeProvider, createGlobalStyle } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";
import hookAnimations from "../styles/hooks-animations";
import cssTransitionAnimations from "../styles/csstransition-animations";

const GlobalStyle = createGlobalStyle`
	${cssReset}
	${hookAnimations}
	${cssTransitionAnimations}
`;
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
		</ThemeProvider>
	);
};

export default App;
