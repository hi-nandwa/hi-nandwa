import { AiTwotoneHeart } from "react-icons/ai";
function Footer() {
	return (
		<div className="w-full h-16 bg-primary flex justify-center items-center">
			<h1 className="text-xl text-blue-900 mr-2">Made with</h1>{" "}
			<AiTwotoneHeart className="text-black" />
			<h1 className="text-xl text-blue-900 ml-2">
				{" "}
				<a
					href="#"
					className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
				>
					ehn
				</a>
			</h1>
		</div>
	);
}

export default Footer;
