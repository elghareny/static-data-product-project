/** @format */
/**-
 * @param {string} txt - the input text to be sliced
 * @param {number} [max=50] - the maximum length of the sliced text
 * @returns {string} - the sliced text
 */
export const txtSlicer = (txt: string, max: number = 50) => {
	if (txt.length >= max) return `${txt.slice(0, max)}...`;
	return txt;
};
