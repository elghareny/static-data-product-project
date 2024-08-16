/** @format */

/** @format */

export const productValidation = (product: {
	title?: string;
	description?: string;
	imageURL?: string;
	price?: string;
	// colors?: string[];
}) => {
	const validURL =
		product.imageURL && /^(ftp|http|https):\/\/[^"]+$/.test(product.imageURL);
	const errors: {
		title: string;
		description: string;
		imageURL: string;
		price: string;
		// colors: string;
	} = {
		title: "",
		description: "",
		imageURL: "",
		price: "",
		// colors: "",
	};
	if (product.title || product.title === "")
		if (
			!product.title.trim() ||
			product.title.length < 10 ||
			product.title.length > 80
		)
			errors.title = "Product title must be between 10 and 80 characters!";
	if (product.description || product.description === "")
		if (
			!product.description.trim() ||
			product.description.length < 10 ||
			product.description.length > 900
		)
			errors.description =
				"Product description must be between 10 and 900 characters!";

	if (product.imageURL || product.imageURL === "")
		if (!product.imageURL.trim() || !validURL)
			errors.imageURL = "Valid image URL is required!";

	if (product.price || product.price === "")
		if (!product.price.trim() || isNaN(Number(product.price)))
			errors.price = "Valid price is required!";

	// if (product.colors)
	// 	if (product.colors.length === 0)
	// 		errors.colors = "Valid colors is required!";

	return errors;
};
