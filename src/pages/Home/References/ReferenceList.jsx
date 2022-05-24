import styled from "styled-components";
import Li from "../../../components/UI/Layouts/List/Li";
import Ol from "../../../components/UI/Layouts/List/Ol";

const Container = styled(Ol)`
    padding: 0;
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
	const referenceItems = references.map(
		reference => <ReferenceItem>{reference}</ReferenceItem>
	);

	return <Container>{referenceItems}</Container>;
};

export default ReferenceList;
