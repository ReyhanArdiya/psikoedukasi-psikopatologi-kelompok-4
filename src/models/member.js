class Member {
	/**
	 *
	 *
	 * @param {string} name
	 *
	 * @param {number | string} nim
	 *
	 * @param {{
	 *		icon: SVGElement,
	 *		href: string
	 *	}[]} links
	 *
	 * @param {{
	 * alt: string,
	 * img: HTMLImageElement,
	 * pos : string,
	 * title: string
	 * }} profilePic
	 *
	 * @param {string} id
	 */
	constructor(
		name,
		nim,
		links,
		{ alt, img, pos, title },
		id = `member-${name}`
	) {
		this.name = name;
		this.nim = nim;
		this.links = links;
		this.profilePic = {
			alt,
			img,
			pos,
			title
		};
		this.id = id;
	}
}

export default Member;
