import { CSSTransition } from "react-transition-group";
import { baseTransitionMs } from "../../../styles/csstransition-animations";
import { useInView } from "react-intersection-observer";
import React from "react";

/**
 * Make sure the children accepts `className` & `ref` prop
 *
 * @param {{
 * children: any,
 * options: any,
 * once?: boolean,
 * }} props
 *
 * @returns
 */
const BlurToClear = ({ children, options, once = false }) => {
	const { ref, inView } = useInView({
		initialInView : true,
		threshold     : 0.1,
		triggerOnce   : once,
		...options,
	});

	return (
		<CSSTransition
			appear={true}
			classNames="blur-to-clear"
			in={inView}
			timeout={baseTransitionMs * 2}
		>
			{React.cloneElement(children, {
				className : "blur-to-clear",
				ref,
			})}
		</CSSTransition>
	);
};

export default BlurToClear;