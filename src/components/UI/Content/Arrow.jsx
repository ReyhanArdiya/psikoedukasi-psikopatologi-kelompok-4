import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: calc(2em * 4);
	justify-content: center;
	clip-path: url(#angle-down);
	width: max-content;

	${({ animation }) => {
		switch (animation) {
			case 1 :
				return css`
					/* Option 1: flow from top-bottom */
					background: radial-gradient(
						66.87% 66.87% at 50% 50%,
						#ffffff 0%,
						rgba(255, 255, 255, 0.25) 100%
					);
				`;
			case 2 :
				return css`
					/* Option 2: like opt 1 but shrinks and grows each arrow */
					background: radial-gradient(
						65.62% 65.62% at 50% 50%,
						#ffffff 0%,
						rgba(255, 255, 255, 0) 100%
					);
				`;
			case 3 :
			default :
				return css`
					/* Option 3: more extreme version of opt. 2*/
					background: radial-gradient(
						50% 50% at 50% 50%,
						#ffffff 0%,
						rgba(255, 255, 255, 0) 100%
					);
				`;
		}
	}}

	background-size: 100% 300%;

	@keyframes flowingGradient {
		0% {
			background-position: 0% 150%;
		}

		100% {
			background-position: 0% 0%;
		}
	}

	animation: flowingGradient 1.5s linear infinite;
`;

const AngleDownClipPath = () => {
	return (
		<svg
			fill="none"
			height="20"
			viewBox="0 0 31 20"
			width="31"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<clipPath id="angle-down">
					<path d="M13.848 19.3175L0.682478 6.15198C-0.227493 5.24201 -0.227493 3.77057 0.682478 2.87028L2.87028 0.682478C3.78025 -0.227493 5.25169 -0.227493 6.15199 0.682478L15.484 10.0145L24.8161 0.682478C25.726 -0.227493 27.1975 -0.227493 28.0978 0.682478L30.2856 2.87028C31.1955 3.78025 31.1955 5.25169 30.2856 6.15198L17.12 19.3175C16.2294 20.2275 14.758 20.2275 13.848 19.3175Z" />
					<path d="M13.848 39.3175L0.682478 26.152C-0.227493 25.242 -0.227493 23.7706 0.682478 22.8703L2.87028 20.6825C3.78025 19.7725 5.25169 19.7725 6.15199 20.6825L15.484 30.0145L24.8161 20.6825C25.726 19.7725 27.1975 19.7725 28.0978 20.6825L30.2856 22.8703C31.1955 23.7803 31.1955 25.2517 30.2856 26.152L17.12 39.3175C16.2294 40.2275 14.758 40.2275 13.848 39.3175Z" />
					<path d="M13.848 59.3175L0.682478 46.152C-0.227493 45.242 -0.227493 43.7706 0.682478 42.8703L2.87028 40.6825C3.78025 39.7725 5.25169 39.7725 6.15199 40.6825L15.484 50.0145L24.8161 40.6825C25.726 39.7725 27.1975 39.7725 28.0978 40.6825L30.2856 42.8703C31.1955 43.7803 31.1955 45.2517 30.2856 46.152L17.12 59.3175C16.2294 60.2275 14.758 60.2275 13.848 59.3175Z" />
					<path d="M13.848 79.3175L0.682478 66.152C-0.227493 65.242 -0.227493 63.7706 0.682478 62.8703L2.87028 60.6825C3.78025 59.7725 5.25169 59.7725 6.15199 60.6825L15.484 70.0145L24.8161 60.6825C25.726 59.7725 27.1975 59.7725 28.0978 60.6825L30.2856 62.8703C31.1955 63.7803 31.1955 65.2517 30.2856 66.152L17.12 79.3175C16.2294 80.2275 14.758 80.2275 13.848 79.3175Z" />
				</clipPath>
			</defs>
		</svg>
	);
};

const Arrow = React.forwardRef(

	/**
	 * @param {{
	 * animation?: number,
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({ animation = 3 }, ref) => {
		return (
			<Container
				animation={animation}
				className="arrow"
				ref={ref}
			>
				<AngleDownClipPath />
			</Container>
		);
	}
);

export default React.memo(Arrow);
