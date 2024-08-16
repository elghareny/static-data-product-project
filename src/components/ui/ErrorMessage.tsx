/** @format */

interface IProps {
	msg: string;
}

const ErrorMessage = ({msg}: IProps) => {
	return msg ? (
		<span className='block text-sm text-red-700 font-semibold'>{msg}</span>
	) : null;
};

export default ErrorMessage;
