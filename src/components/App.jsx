import { ThemeProvider, createGlobalStyle } from "styled-components";
import cssReset from "../styles/css-reset";
import theme from "../styles/theme";

const GlobalStyle = createGlobalStyle`
	${cssReset}
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
		</ThemeProvider>
	);
};

export default App;
