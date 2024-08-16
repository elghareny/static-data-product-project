/** @format */

import {InputHTMLAttributes} from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	name?: string;
}

const Input = ({id = "", name = "", ...rest}: IProps) => {
	return (
		<input
			type='text'
			id={id}
			name={name}
			className='border-[1px] border-gray-300 shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-md px-3 py-2 text-base'
			{...rest}
		/>
	);
};

export default Input;
