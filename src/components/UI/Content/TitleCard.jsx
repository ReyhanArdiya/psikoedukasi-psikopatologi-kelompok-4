import React from "react";
import AcrylicDouble from "../Acrylics/AcrylicDouble";
import { TitleCard as TitleCardText } from "./Texts";

const TitleCard = React.forwardRef(

	/**
	 * @param {{
	 * children: import("react").ReactNode,
	 * pos?: string,
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 */
	({ children: text, pos = "bottom" }, ref) => {
		return (
			<AcrylicDouble
				className="title-card"
				pos={pos}
				ref={ref}
			>
				<TitleCardText>
					{text}
				</TitleCardText>
			</AcrylicDouble>
		);
	}
);

export default React.memo(TitleCard);
