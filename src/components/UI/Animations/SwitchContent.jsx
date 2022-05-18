import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { baseTransitionMs } from "../../../styles/csstransition-animations";

const StyledTransitionGroup = styled(TransitionGroup)`
	flex-direction: column;
    display: flex;
    position: relative;

    /* Target the second one only (so the one that is going to come in), this allows
    us to use the content height for the height but still have that fade-in-out content at the
    same time effect */
    > *:nth-of-type(2) {
        position: absolute;
		width: 100%;
		height: 100%;
    }
`;

/**
 * To use this transition, pass a different {@link transitionKey} everytime you
 * rerender this component. The choice of having different {@link children} or not
 * to transition the content too is up to you.
 *
 * @param {{
 *  children: any,
 *  transitionKey: any
 * }} props
 *
 * @example
 * ```jsx
 * const App = () => {
 *	const [ text, setText ] = useState({
 *		lang : "EN",
 *		text : "The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence"
 *	});
 *
 *	return (
 *		<ThemeProvider theme={theme}>
 *			<GlobalStyle />
 *			<Container id="App">
 *				<SwitchText transitionKey={text.lang}>
 *					<Text>
 *						{text.text}
 *					</Text>
 *				</SwitchText>
 *				<button
 *					onClick={() => {
 *						setText(prev => {
 *							if (prev.lang === "EN") {
 *								return {
 *									lang : "ID",
 *									text : "Rubah cepat melompati jalan Rubah cepat melompati jalan Rubah cepat melompati jalan Rubah cepat melompati jalan Rubah cepat melompati jalan Rubah cepat melompati jalan"
 *								};
 *							} else {
 *								return {
 *									lang : "EN",
 *									text : "The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence The quick brown fox jumped over the fence"
 *								};
 *							}
 *						});
 *					}}
 *					style={{
 *						position : "fixed",
 *						bottom   : "10px",
 *					}}
 *				>Change</button>
 *			</Container>
 *		</ThemeProvider>
 *  );
 *};
 *
 * ```
 */
const SwitchContent = ({ children, transitionKey }) => {
	return (
		<StyledTransitionGroup
			className="switch-content"
			component={"div"}
		>
			<CSSTransition
				appear={true}
				classNames="blur-to-clear"
				key={transitionKey}
				timeout={baseTransitionMs * 2}
			>
				{React.cloneElement(children, { className : "blur-to-clear" })}
			</CSSTransition>
		</StyledTransitionGroup>
	);
};

export default SwitchContent;