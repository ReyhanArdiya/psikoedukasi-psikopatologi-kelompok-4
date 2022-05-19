import { css } from "styled-components";

export const baseTransitionMs = 300;

const blurToClear = css`
    /* Initial and from*/
    .blur-to-clear,
	.blur-to-clear-appear,
	.blur-to-clear-enter,
	.blur-to-clear-exit,
	.blur-to-clear-active,
	.blur-to-clear-done {
		position: relative;

		filter: blur(10px);
		opacity: 0;

		transition-duration: ${baseTransitionMs * 2}ms;
	}

    /* to */
	.blur-to-clear-appear-active,
	.blur-to-clear-appear-done,
	.blur-to-clear-enter-active,
	.blur-to-clear-enter-done {
		filter: blur(0px);
		opacity: 1;

		transition-property: opacity, filter;
		transition-duration: ${baseTransitionMs * 2}ms;
		transition-timing-function: ease;
	}
`;

const fadeInOut = css`
	/* Initial and from*/
    .fade-in-out,
	.fade-in-out-appear,
	.fade-in-out-enter,
	.fade-in-out-exit,
	.fade-in-out-exit-active,
	.fade-in-out-exit-done {
		position: relative;

		filter: blur(10px);
		opacity: 0;
		transform: translateY(50px);

		transition-duration: ${baseTransitionMs * 2}ms;
	}

    /* to */
	.fade-in-out-appear-active,
	.fade-in-out-appear-done,
	.fade-in-out-enter-active,
	.fade-in-out-enter-done {
		filter: blur(0px);
		opacity: 1;
		transform: translateY(0);

		transition-property: opacity, transform, filter;
		transition-duration: ${baseTransitionMs * 2}ms;
		transition-timing-function: ease;
	}
`;

/**
 * Contains global classNames & styles for animations that are used by our custom CSSTransition components.
 * This is cleaner than just using inline styles.
 */
const cssTransitionAnimations = css`
	${fadeInOut}
	${blurToClear}
`;

export default cssTransitionAnimations;
