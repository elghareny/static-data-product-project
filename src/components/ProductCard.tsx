/** @format */

import {IProduct} from "../interfaces";
import {txtSlicer} from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
	product: IProduct;
	openEdit: () => void;
	setProductToEdit: (product: IProduct) => void;
	setProductToEditIndx: (indx: number) => void;
	indx: number;
	openDelete: () => void;
}

const ProductCard = ({
	product,
	setProductToEdit,
	openEdit,
	openDelete,
	setProductToEditIndx,
	indx,
}: IProps) => {
	/* --- STATE ---*/

	const {title, description, imageURL, price, category, colors} = product;

	/* --- HANDLER ---*/
	const onEdit = () => {
		setProductToEdit(product);
		openEdit();
		setProductToEditIndx(indx);
	};
	const onDelete = () => {
		setProductToEdit(product);
		openDelete();
	};

	/* --- RENDER ---*/

	const renderProductColor = colors.map((color) => (
		<CircleColor
			key={color}
			color={color}
		/>
	));
	return (
		<div className='max-w-md md:max-w-2xl lg:max-w-4xl mx-auto md:mx-0 flex flex-col justify-between border p-2 rounded-md '>
			<Image
				imageURL={imageURL}
				alt='product name'
				className='rounded-md mb-4  w-full h-[200px] object-cover'
			/>
			<div className='flex flex-col flex-wrap overflow-clip'>
				<h3 className='my-1 text-[20px] font-semibold'>
					{txtSlicer(title, 15)}
				</h3>
				<p className='my-1 w-full text-[14px] text-[#777]'>
					{txtSlicer(description)}
				</p>
			</div>
			<div className='my-5 flex space-y-2 flex-col justify-between'>
				<div className='w-full flex flex-wrap space-x-1 '>
					{renderProductColor}
				</div>

				<div className=' flex items-center justify-between'>
					<span className='font-bold text-[20px] text-purple-800 overflow-hidden'>
						${price}
					</span>
					<Image
						imageURL={category.imageURL}
						alt={category.name}
						className='w-10 h-10 rounded-full object-bottom'
					/>
				</div>
			</div>
			<div className='flex items-center justify-between space-x-2 mt-1'>
				<Button
					className='bg-blue-500 hover:bg-blue-700 '
					onClick={onEdit}>
					Edit
				</Button>
				<Button
					className='bg-red-500 hover:bg-red-700'
					onClick={onDelete}>
					{" "}
					Remove
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
