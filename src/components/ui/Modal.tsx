/** @format */

import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {ReactNode} from "react";

interface IProps {
	isOpen: boolean;
	close: () => void;
	title?: string;
	children: ReactNode;
}

const Modal = ({isOpen, close, title, children}: IProps) => {
	return (
		<div>
			<Dialog
				open={isOpen}
				as='div'
				className='relative z-10 focus:outline-none'
				onClose={close}>
				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 bg-black/10 backdrop-blur-sm'>
						<DialogPanel
							transition
							className='w-full max-w-md rounded-xl bg-white/80 p-4 backdrop-blur-sm duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'>
							{title && (
								<DialogTitle
									as='h3'
									className='text-2xl font-medium mb-2 text-[#333]'>
									{title}
								</DialogTitle>
							)}
							<div>{children}</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Modal;
