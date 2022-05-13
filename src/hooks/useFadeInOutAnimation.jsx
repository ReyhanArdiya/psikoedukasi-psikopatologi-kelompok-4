import { useInView } from "react-intersection-observer";

/**
 *
 * **YOU CAN ONLY USE THIS HOOK ONCE PER COMPONENT FUNCTION** (idk y its like dis ok, it's just like that)
 * By default this will only trigger the component once when it is going in. Set the options
 * to change it if you need to.
 *
 * @param {any} options
 *
 * @returns
 */
const useFadeInOutAnimation = options => {
	// CMT if the component that uses this hook is rerendered not by useInView,
	// would it reactive the animation?
	const { ref, inView, entry } = useInView({
		threshold   : 1,
		triggerOnce : true,
		...options
	});

	if (entry) {
		const { target } = entry;

		if (!target.classList.contains("fade-in-out")) {
			target.classList.add("fade-in-out", "out");
		}

		if (inView) {
			target.classList.replace("out", "in");
		} else {
			target.classList.replace("in", "out");
		}
	}

	return {
		entry,
		inView,
		ref,
	};
};

export default useFadeInOutAnimation;