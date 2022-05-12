import React from "react";
import useFadeInOutAnimation from "../../../hooks/useFadeInOutAnimation";

/**
 * Helper component to wrap around A component to give it the fade in out animation.
 *
 * @param {*} props
 *
 * @returns
 */
const FadeInOut = ({ children }) => {
	const { ref } = useFadeInOutAnimation();
	return React.cloneElement(children, { ref });
};

export default FadeInOut;