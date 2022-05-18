import React from "react";
import styled from "styled-components";
import AcrylicSingle from "./AcrylicSingle";

const Container = styled.div`
	position: relative;
	font-size: 1em;
	align-items: center;
	display: flex;
	justify-content: center;
	width: max-content;

	.acrylic-single:first-of-type {
		z-index: 2;
	}
`;

const SmallerAcrylic = styled.div`
	${({ pos }) => pos}: -20%;
	${({ theme }) => theme.others.borderRadius}
	align-items: center;
	background: rgba(248, 249, 250, 0.5);
	display: flex;
	justify-content: center;
	min-height: 67.56%;
	min-width: 82%;
	padding: 0.6em 0.8em;
	position: absolute;
	width: max-content;
	z-index: 1;
`;

const AcrylicDouble = React.forwardRef(

	/**
	 * @param {{
	 * children: import("react").ReactNode,
	 * className?:string,
	 * pos?:string,
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({ children, className = "", pos = "bottom" }, ref) => {
		return (
			<Container
				className={`acrylic-double ${className}`}
				ref={ref}
			>
				<AcrylicSingle>{children}</AcrylicSingle>
				<SmallerAcrylic pos={pos} />
			</Container>
		);
	}
);

export default AcrylicDouble;
