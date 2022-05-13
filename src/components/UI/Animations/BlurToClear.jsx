import React from "react";
import useBlurToClear from "../../../hooks/useBlurToClear";

/**
 * Helper component to wrap around A component to give it the fade in out animation.
 *
 * @param {{once: boolean}} props
 *
 * @returns
 */
const BlurToClear = ({ children, once = true }) => {
	const { ref } = useBlurToClear({ triggerOnce : once });
	return React.cloneElement(children, { ref });
};

export default BlurToClear;