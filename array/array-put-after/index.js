"use strict"

module.exports = (source, find, add) => {
	if (typeof source === "string") {
		if (typeof find === "string") {
			return source.replace(find, find + add)
		}

		if (typeof find === "number") {
			return source.slice(0, find + 1) + add + source.slice(find + 1)
		}

		throw new TypeError("The element to find is not a string or a number!")
	} else if (Array.isArray(source)) {
		let index = source.indexOf(find)

		if (index === -1) {
			if (typeof find !== "number") {
				throw new TypeError("The element to find is not in the array or an index!")
			}

			index = find
		}

		return [
			...source.slice(0, index + 1),
			add,
			...source.slice(index + 1)
		]
	}

	throw new TypeError(`Expected a string or an array, got ${typeof source}`)
}
