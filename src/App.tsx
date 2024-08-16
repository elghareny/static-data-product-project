/** @format */

import {ChangeEvent, FormEvent, useState} from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import {categories, colors, formInputList, productList} from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import {IProduct} from "./interfaces";
import {productValidation} from "./validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/CircleColor";
import {v4 as uuid} from "uuid";
import SelectMenu from "./components/ui/SelectMenu";
import toast, {Toaster} from "react-hot-toast";

const App = () => {
	/* --- STATE ---*/
	const initialProduct = {
		title: "",
		description: "",
		imageURL: "",
		price: "",
		colors: [],
		category: {
			name: "",
			imageURL: "",
		},
	};

	const initialErrors = {
		title: "",
		description: "",
		imageURL: "",
		price: "",
		// colors: "",
	};
	const [products, setProducts] = useState<IProduct[]>(productList);
	const [product, setProduct] = useState<IProduct>(initialProduct);
	const [productToEdit, setProductToEdit] = useState<IProduct>(initialProduct);
	const [productToEditIndx, setProductToEditIndx] = useState<number>(0);
	const [errors, setErrors] = useState(initialErrors);
	const [tempColors, setTempColors] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [selected, setSelected] = useState(categories[0]);

	/* --- HANDLER ---*/

	const open = () => setIsOpen(true);

	const close = (): void => {
		setIsOpen(false);
		setProduct(initialProduct);
		setTempColors([]);
		setErrors(initialErrors);
	};
	const openEdit = () => setIsEdit(true);

	const closeEdit = (): void => {
		setIsEdit(false);
		setProduct(initialProduct);
		setTempColors([]);
		setErrors(initialErrors);
	};

	const openDelete = () => {
		setIsDelete(true);
	};

	const closeDelete = (): void => {
		setIsDelete(false);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const {value, name} = e.target;
		const errs = productValidation({
			[name]: value,
		});
		setProduct({...product, [name]: value});
		setErrors({
			...errors,
			[name]: errs.title || errs.description || errs.imageURL || errs.price,
		});
		console.log(errors);
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const {title, description, price, imageURL} = product;
		const errors = productValidation({
			title,
			description,
			imageURL,
			price,
			// colors,
		});

		const hasErrors =
			Object.values(errors).some((value) => value === "") &&
			Object.values(errors).every((value) => value === "");

		if (!hasErrors) {
			setErrors(errors);
			return;
		}
		{
			setProducts((prev) => [
				{...product, id: uuid(), colors: tempColors},
				...prev,
			]);
			close();
		}

		toast.success("Successfully Added!!", {
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
	};

	/* HANDLER EDIT */

	const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const {value, name} = e.target;
		const errs = productValidation({
			[name]: value,
		});
		setProductToEdit({...productToEdit, [name]: value});
		setErrors({
			...errors,
			[name]: errs.title || errs.description || errs.imageURL || errs.price,
		});
	};

	const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const {title, description, price, imageURL} = productToEdit;
		const errors = productValidation({
			title,
			description,
			imageURL,
			price,
			// colors,
		});

		const hasErrors =
			Object.values(errors).some((value) => value === "") &&
			Object.values(errors).every((value) => value === "");

		if (!hasErrors) {
			setErrors(errors);
			return;
		}
		{
			const updateProducts = [...products];
			updateProducts[productToEditIndx] = {
				...productToEdit,
				colors: tempColors.concat(productToEdit.colors),
			};
			setProducts(updateProducts);
			closeEdit();
		}

		toast.success("Successfully Edited!!", {
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
	};

	const deleteProductHandler = () => {
		const filter = products.filter(
			(product) => product.id !== productToEdit.id,
		);
		setProducts(filter);
		closeDelete();
		toast.success("Successfully Deleted!!", {
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
	};

	/* --- RENDER ---*/

	const renderProductsList = products.map((product, indx) => (
		<ProductCard
			key={product.id}
			product={product}
			setProductToEdit={setProductToEdit}
			openEdit={openEdit}
			openDelete={openDelete}
			indx={indx}
			setProductToEditIndx={setProductToEditIndx}
		/>
	));

	const renderFormInputList = (productToEdit?: IProduct) => {
		return formInputList.map((input) => (
			<div
				key={input.id}
				className='flex flex-col'>
				<label
					className='text-[#333] font-semibold text-[18px]'
					htmlFor={input.id}>
					{input.label}
				</label>
				<Input
					type='text'
					id={input.id}
					name={input.name}
					value={
						productToEdit ? productToEdit[input.name] : product[input.name]
					}
					onChange={productToEdit ? onChangeEditHandler : onChangeHandler}
				/>
				<ErrorMessage msg={errors[input.name]} />
			</div>
		));
	};

	const renderProductColor = colors.map((color) => (
		<CircleColor
			key={color}
			color={color}
			onClick={() => {
				if (tempColors.includes(color)) {
					setTempColors((prev) => prev.filter((item) => item !== color));
					return;
				} else if (productToEdit.colors.includes(color)) {
					setTempColors((prev) => prev.filter((item) => item !== color));
					return;
				} else setTempColors((prev) => [...prev, color]);
			}}
		/>
	));

	return (
		<main className='container py-10'>
			<div className=' flex justify-center items-center w-full'>
				<Button
					className={"w-[30%] bg-blue-600 hover:bg-blue-800"}
					onClick={open}>
					Add
				</Button>
			</div>
			<div className=' m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 p-2 rounded-md'>
				{renderProductsList}
			</div>

			{/* /*- ADD PRODUCT MODAL*-/ */}
			<Modal
				title='ADD A NEW PROJECT.'
				isOpen={isOpen}
				close={close}>
				<form
					className='flex flex-col space-y-3'
					onSubmit={submitHandler}>
					{renderFormInputList()}
					<SelectMenu
						selected={selected}
						setSelected={setSelected}
					/>
					<div className=' flex space-x-1'>{renderProductColor}</div>
					<div className=' flex space-x-1 flex-wrap'>
						{tempColors.map((color) => {
							return (
								<span
									key={color}
									className='p-1 mr-1 mb-1 text-sm text-white rounded-md'
									style={{backgroundColor: color}}>
									{color}
								</span>
							);
						})}
					</div>

					<div className='flex space-x-3 font-semibold'>
						<Button
							type='submit'
							className={"bg-indigo-700 hover:bg-indigo-500"}>
							Submit
						</Button>
						<Button
							className={
								"bg-gray-300 text-black hover:bg-gray-400 hover:text-white"
							}
							onClick={close}>
							Close
						</Button>
					</div>
				</form>
			</Modal>

			{/* /*- EDIT PRODUCT MODAL*-/ */}
			<Modal
				title='EDIT THIS PROJECT.'
				isOpen={isEdit}
				close={closeEdit}>
				<form
					className='flex flex-col space-y-3'
					onSubmit={submitEditHandler}>
					{renderFormInputList(productToEdit)}
					<SelectMenu
						selected={selected}
						setSelected={setSelected}
					/>
					<div className=' flex space-x-1'>{renderProductColor}</div>
					<div className=' flex space-x-1 flex-wrap'>
						{tempColors.concat(productToEdit.colors).map((color) => {
							return (
								<span
									key={color}
									className='p-1 mr-1 mb-1 text-sm text-white rounded-md'
									style={{backgroundColor: color}}>
									{color}
								</span>
							);
						})}
					</div>

					<div className='flex space-x-3 font-semibold'>
						<Button
							type='submit'
							className={"bg-indigo-700 hover:bg-indigo-500"}>
							Submit
						</Button>
						<Button
							className={
								"bg-gray-300 text-black hover:bg-gray-400 hover:text-white"
							}
							onClick={closeEdit}>
							Close
						</Button>
					</div>
				</form>
			</Modal>
			<Modal
				title='Are you sure want to remove this project from your store ?'
				close={closeDelete}
				isOpen={isDelete}>
				<p className='text-sm text-[#777] my-5 font-semibold'>
					Deleting this product will remove it permanently from your inventory/
					Any associated data, sales history ,and other related information will
					also be deleted. Please make sure this is the intended action.
				</p>
				<div className='flex space-x-3 font-semibold'>
					<Button
						type='button'
						onClick={deleteProductHandler}
						className={"bg-red-700 hover:bg-red-600"}>
						Yes, remove
					</Button>
					<Button
						className={
							"bg-gray-300 text-black hover:bg-gray-400 hover:text-white "
						}
						onClick={closeDelete}>
						Cancel
					</Button>
				</div>
			</Modal>
			<Toaster />
		</main>
	);
};

export default App;
