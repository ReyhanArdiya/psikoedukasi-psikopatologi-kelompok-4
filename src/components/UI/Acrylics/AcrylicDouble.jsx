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

const SmallerAcrylic = styled(AcrylicSingle)`
	position: absolute;
	${({ pos }) => pos}: -20%;
	min-height: 67.56%;
	min-width: 82%;
	z-index: 1;
`;

const AcrylicDouble = React.forwardRef(
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
