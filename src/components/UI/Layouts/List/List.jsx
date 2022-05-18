import Li from "./Li";
import Ol from "./Ol";

/**
 * JSON schema for textNode.
 *
 * @typedef {object} textNode
 *
 * @property {textNodes} nest A {@link textNodes}.
 *
 * @property {string} text String that will be turned into an {@link Li}.
 */

/**
 * JSON schema for textNodes.
 *
 * @typedef {textNode[]} textNodes
 *
 */

// CMT I made this and it works but I don't know how it works hahaha ;)
/**
 * Parses {@link textNodes} into {@link Li}s.
 *
 * @param {textNodes} textNodes
 *
 */
const parseListItems = textNodes => {
	const [ current ] = textNodes;

	if (!current) {
		return null;
	}

	// I think the way it works is that each call will return a component + its
	// sibling and their children. So after we're done recursing, in the end there
	// will be a list of siblings + their children WITHOUT using an array
	return (
		<>
			<Li>
				{current.text}
				{current.nest && <Ol>{parseListItems(current.nest)}</Ol>}
			</Li>
			{parseListItems(textNodes.slice(1))}
		</>
	);
};

/**
 * Returns an ordered list after parsing {@link textNodes}.
 *
 * @param {{
 * textNodes: textNodes
 * }} props
 *
 * @example
 * Usage example
 * ```jsx
 * const DEMO = [
 *  { text : "Do you wanna see mee" },
 *  { text : "Do you wanna see mee" },
 *  {
 *      nest : [ { text : "Burqa" } ],
 *      text : "Behind the curtain",
 *  },
 *  {
 *      nest : [ {
 *          nest : [ { text : "Missery" } ],
 *          text : "Dre headphones"
 *      } ],
 *      text : "Back and forth",
 *  },
 *  {
 *      nest : [ {
 *          nest : [ {
 *              nest : [ { text : "Dre headphones" } ],
 *              text : "Back and forth",
 *             } ],
 *          text : "Dre headphones",
 *      } ],
 *      text : "Back and forth",
 *  },
 *]
 *
 * return <List textNodes={DEMO}/>
 * ```
 */
const List = ({ textNodes }) => {
	return (
		<Ol>
			{parseListItems(textNodes)}
		</Ol>
	);
};

export default List;