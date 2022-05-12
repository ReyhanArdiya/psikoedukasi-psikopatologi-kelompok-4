import React from "react";
import useFadeInOutAnimation from "../../../hooks/useFadeInOutAnimation";

/**
 * Helper component to wrap around A component to give it the fade in out animation.
 *
 * @param {{once: boolean}} props
 *
 * @returns
 */
const FadeInOut = ({ children, once = true }) => {
	const { ref } = useFadeInOutAnimation({ triggerOnce : once });
	return React.cloneElement(children, { ref });
};

export default FadeInOut;