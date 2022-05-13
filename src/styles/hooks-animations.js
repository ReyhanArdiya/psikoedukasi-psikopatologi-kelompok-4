import { css } from "styled-components";

const baseTransitionMs = 300;

const blurToClear = css`
	/* Initial */
	.blur-to-clear {
		position: relative;
        transition-property: opacity, filter;
        transition-timing-function: ease;
	}

	/* When blur */
	.blur-to-clear.blur {
		opacity: 0;
		filter: blur(10px);
		transition-duration: ${baseTransitionMs}ms;
	}

	/* When clear */
	.blur-to-clear.clear {
		opacity: 1;
		filter: blur(0px);
		transition-duration: ${baseTransitionMs * 2}ms;
	}
`;

const fadeInOut = css`
	/* Initial */
	.fade-in-out {
		position: relative;
        transition-property: opacity, transform, filter;
        transition-timing-function: ease;
	}

	/* When out */
	.fade-in-out.out {
		opacity: 0;
		filter: blur(10px);
		transform: translateY(5em);
		transition-duration: ${baseTransitionMs}ms;
	}

	/* When in */
	.fade-in-out.in {
		opacity: 1;
		filter: blur(0px);
		transform: translateY(0);
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
