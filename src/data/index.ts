/** @format */

import {ICategory, IFormInput, IProduct} from "../interfaces";
import {v4 as uuid} from "uuid";

export const productList: IProduct[] = [
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		price: "20000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "Nike",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
		price: "60000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "Cars",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://www.cnet.com/a/img/resize/257d6e9fc5e92bcf3da24eb599b1cbe55fb620d3/hub/2024/01/10/aaa3369f-1a7b-468a-bb30-49624ccaa8c3/casaloon.jpg?auto=webp&width=1920",
		price: "500000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "T-Shirts",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&height=900&width=1600&fit=bounds",
		price: "1000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "PC Desktop",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOBbsdvbWES3zgOogR3fXyChH7YiWo-_Fgw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Lkq4kfTviGNqSuTzPd8OA7thMDUhUOJv_w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW85djKFmTuqtM-sl_aRl5I_tqg8EwMRM55w&shttps://imagescdn.dealercarsearch.com/DealerImages/ImageLibrary/1920x800/92bc146b.jpg",
		price: "90000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "PC Desktop",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://www.buyacar.co.uk/media/drupal/range-rover20-1.jpg?width=759&format=webp",
		price: "100000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "House",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://car-images.bauersecure.com/wp-images/3504/099_lamborghini_revuelto.jpg",
		price: "2000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "House",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
	{
		id: uuid(),
		title: "product name",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae enim illo sapiente dolorem",
		imageURL:
			"https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=3840&q=75https://cfx-wp-images.imgix.net/2022/05/2022-Dodge-Challenger-Copy-edited.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&s=3c624d1efea448c25527b67f12da5214https://www.motownindia.com/images/Auto-Industry/LUXURY-CARS-IN-INDIA-A-Painful-Growth-Motown-India-Bureau-1-989.jpg",
		price: "700000",
		colors: ["#ff0032", "#2563eb", "#ff6e31"],
		category: {
			name: "Clothes",
			imageURL:
				"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
		},
	},
];

export const formInputList: IFormInput[] = [
	{
		id: "title",
		name: "title",
		type: "text",
		label: "Product Title",
	},
	{
		id: "description",
		name: "description",
		type: "text",
		label: "Product Description",
	},
	{
		id: "image",
		name: "imageURL",
		type: "text",
		label: "Product Image URL",
	},
	{
		id: "price",
		name: "price",
		type: "text",
		label: "Product Price",
	},
];

export const colors: string[] = [
	"#a855f7",
	"#2563eb",
	"#84d2c5",
	"#13005a",
	"#a31acb",
	"#ff6e31",
	"#3c2a21",
	"#6c4ab6",
	"#cb1c8d",
	"#000000",
	"#645cbb",
	"#1f8a70",
	"#820080",
	"#ff0032",
];

export const categories: ICategory[] = [
	{
		id: uuid(),
		name: "Nike",
		imageURL:
			"https://cdn.salla.sa/vrbEP/RQSxS6dMQBDo3tI46IgObg6yl7X5Yd6tqGdHSUmv.jpg",
	},
	{
		id: uuid(),
		name: "Cars",
		imageURL:
			"https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp",
	},
	{
		id: uuid(),
		name: "T-Shirts",
		imageURL:
			"https://marketplace.canva.com/print-mockup/bundle/E9Me4jcyzMX/fit%3Afemale%2Cpages%3Adouble-sided%2Csurface%3Amarketplace/product%3A1c242e%2Csurface%3Amarketplace/EAFy6OjOp6g/1/0/933w/canva-green-typographic-quote-t-shirt-gfrIbETN5tI.png?sig=00e9747caf5d632672721e7aaf9c0122&width=800",
	},
	{
		id: uuid(),
		name: "PC Desktop",
		imageURL:
			"https://static.ffx.io/images/$zoom_0.135%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/6fa631de81437f5f9f66ea5c590371388493dbb1https://www.messoanuovo.it/cdn/shop/articles/PC-gaming-scaled.jpg?v=1707413030",
	},
	{
		id: uuid(),
		name: "House",
		imageURL:
			"https://archivaldesigns.com/cdn/shop/products/Peach-Tree-Front_1200x.jpg?v=1648224612",
	},
	{
		id: uuid(),
		name: "Clothes",
		imageURL:
			"https://d2tm09s6lgn3z4.cloudfront.net/2022/08/1661327327_793_216013_pexelsphoto996329.jpeg",
	},
];
