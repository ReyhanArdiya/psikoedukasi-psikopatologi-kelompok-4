import { css } from "styled-components";
import theme from "./theme";

const baseTransitionMs = 300;

const fadeInOut = css`
	/* Initial */
	.fade-in-out {
		position: relative;

        transition-property: opacity, transform;
        transition-duration: ${baseTransitionMs}ms;
        transition-timing-function: ease;
	}

	.fade-in-out::before {
		${theme.effects.acrylic}
		border-radius: inherit;
		content: "";
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
        transition-property: opacity;
        transition-timing-function: ease-out;
		pointer-events: none;
		z-index: 10;
	}

	/* When out */
	.fade-in-out.out {
		opacity: 0;
		transform: translateY(5em);
	}

	.fade-in-out.out::before {
		opacity: 1;
        transition-duration: ${baseTransitionMs}ms;
	}

	/* When in */
	.fade-in-out.in {
		opacity: 1;
		transform: translateY(0);
	}

	.fade-in-out.in::before {
		opacity: 0;
        transition-duration: ${baseTransitionMs * 3}ms;
	}
`;

const blurToClear = css`
	/* Initial */
	.blur-to-clear {
		position: relative;

        transition-property: opacity, filter;
        transition-timing-function: ease;
	}

	/* When out */
	.blur-to-clear.blur {
		opacity: 0;
		filter: blur(10px);
		transition-duration: ${baseTransitionMs}ms;
	}

	/* When in */
	.blur-to-clear.clear {
		opacity: 1;
		filter: blur(0px);
		transition-duration: ${baseTransitionMs * 2}ms;
	}

`;

/**
 * Contains global classNames & styles for animations that are used by our custom hooks.
 * This is cleaner than just using inline styles.
 */
const hookAnimations = css`
	${fadeInOut}
	${blurToClear}
`;

export default hookAnimations;
