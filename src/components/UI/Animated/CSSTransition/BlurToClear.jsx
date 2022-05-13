import { CSSTransition } from "react-transition-group";
import { baseTransitionMs } from "../../../../styles/csstransition-animations";
import { useInView } from "react-intersection-observer";
import React from "react";

const BlurToClear = ({ children, options, infinite = false }) => {
	const { ref, inView } = useInView({
		initialInView : true,
		threshold     : 1,
		triggerOnce   : !infinite,
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