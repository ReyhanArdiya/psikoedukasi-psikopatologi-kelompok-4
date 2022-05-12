import React from "react";
import useBlurToClear from "../../../hooks/useBlurToClear";

/**
 * Helper component to wrap around A component to give it the fade in out animation.
 *
 * @param {*} props
 *
 * @returns
 */
const BlurToClear = ({ children }) => {
	const { ref } = useBlurToClear();
	return React.cloneElement(children, { ref });
};

export default BlurToClear;