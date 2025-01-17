/** @format */

import {ButtonHTMLAttributes, ReactNode} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className: string;
	width?: "w-full" | "w-fit";
}

const Button = ({children, className, width = "w-full", ...rest}: IProps) => {
	return (
		<button
			className={`${className} ${width} rounded-md text-white text-[20px] p-2 transition-all duration-300`}
			{...rest}>
			{children}
		</button>
	);
};

export default Button;
