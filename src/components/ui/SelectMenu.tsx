/** @format */

import {Field, Label, Select} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import {categories} from "../../data";
import {ICategory} from "../../interfaces";
// import {useState} from "react";

interface IProps {
	setSelected: (category: ICategory) => void;
	selected: {name: string; imageURL: string};
}
const SelectMenu = ({selected, setSelected}: IProps) => {
	return (
		<div className='w-full max-w-md '>
			<Field>
				<Label className='text-sm/6 font-medium text[#333]'>Category</Label>

				<div className='relative bg-gray-500/50 rounded-md'>
					<Select
						className={clsx(
							"mt-3 block w-full appearance-none rounded-md border-none bg-gray-500/10 py-2 px-3 text-sm/7 text-[#333] font-semibold",
							"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
							// Make the text of each option black on Windows
							"*:text-black",
						)}>
						{categories.map((category) => {
							return (
								<option
									key={category.id}
									value='active'>
									<div className='flex items-center space-x-2'>
										<img
											className='w-10 h-10 rounded-full'
											src={category.imageURL}
											alt='category.name'
										/>
										{category.name}
									</div>
								</option>
							);
						})}
					</Select>
					<ChevronDownIcon
						className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60'
						aria-hidden='true'
					/>
				</div>
			</Field>
		</div>
	);
};

export default SelectMenu;
