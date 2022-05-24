import styled from "styled-components";
import Li from "../../../components/UI/Layouts/List/Li";
import Ol from "../../../components/UI/Layouts/List/Ol";
import { v4 as uuidv4 } from "uuid";
import BlurToClear from "../../../components/UI/Animations/BlurToClear";

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
	// TODO should i make this two columns on big screen?
	const referenceItems = references
		.sort((a, b) => a > b ? 1 : -1)
		.map(
			reference => <BlurToClear key={uuidv4()}>
				<ReferenceItem dangerouslySetInnerHTML={
					{ __html : reference }}
				/>
			</BlurToClear>

		);

	return <Container>{referenceItems}</Container>;
};

export default ReferenceList;
