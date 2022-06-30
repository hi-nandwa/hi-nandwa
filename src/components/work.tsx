import Image from "next/image";
import One from "../../public/images/1.png";
import Two from "../../public/images/2.jpg";
import { Element } from "react-scroll";

function works() {
    return (
        <Element id="work" name="work">
            <div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
                <p className="text-sm uppercase text-gray-400">Portfolio</p>
                <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
                    <div className="rounded w-80 h-60 shadow-xl relative">
                        <Image
                            src={One}
                            alt="One"
                            layout="fill"
                            objectFit="cover"
                            className="p-2 rounded cursor-pointer"
                        />
                    </div>
                    <div className="rounded w-80 h-60 shadow-xl relative">
                        <Image
                            src={Two}
                            alt="two"
                            layout="fill"
                            objectFit="cover"
                            className="p-2 rounded cursor-pointer"
                        />
                    </div>
                </div>


            </div>
        </Element>
    );
}

export default works;
