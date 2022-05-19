import styled from "styled-components";

const Ol = styled.ol`
	width: 100%;
	list-style-position: inside;

	& li {
		list-style-type: upper-alpha;

		& li {
			list-style-type: decimal;
			font-size: 1em;
			margin-left: 1em;

			& li {
				list-style-type: lower-roman;
			}
		}
	}
`;

// const Ul = ({ children }) => {
// 	return (
// 		<Container>
// 			{children}
// 		</Container>
// 	);
// };

export default Ol;
