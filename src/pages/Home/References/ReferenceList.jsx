import styled from "styled-components";
import Li from "../../../components/UI/Layouts/List/Li";
import Ol from "../../../components/UI/Layouts/List/Ol";
import { v4 as uuidv4 } from "uuid";

const Container = styled(Ol)`
	padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: inherit;
`;

const ReferenceItem = styled(Li)`
	list-style-type: none !important;
	--indentation: 3em;
	padding-left: var(--indentation);
	text-indent: calc(-1 * var(--indentation));
`;

/**
 *
 * @param {{references: string[]}} props
 *
 * @returns
 */
const ReferenceList = ({ references }) => {
	const referenceItems = references
		.sort((a, b) => a > b ? 1 : -1)
		.map(
			reference => <ReferenceItem key={uuidv4()}>
				{reference}
			</ReferenceItem>
		);

	return <Container>{referenceItems}</Container>;
};

export default ReferenceList;
