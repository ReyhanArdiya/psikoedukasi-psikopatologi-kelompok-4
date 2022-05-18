import { CSSTransition } from "react-transition-group";
import { baseTransitionMs } from "../../../styles/csstransition-animations";
import { useInView } from "react-intersection-observer";
import React from "react";

const FadeInOut = ({ children, options, once = true }) => {
	const { ref, inView } = useInView({
		initialInView : true,
		threshold     : 1,
		triggerOnce   : once,
		...options,
	});

	return (
		<CSSTransition
			appear={true}
			classNames="fade-in-out"
			in={inView}
			timeout={baseTransitionMs * 2}
		>
			{React.cloneElement(children, {
				className : "fade-in-out",
				ref,
			})}
		</CSSTransition>
	);
};

export default FadeInOut;