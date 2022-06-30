import React from "react";
import {Element} from "react-scroll";

function Home() {
    return (
        <Element id="home" name="home">
            <div>
                <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
                    <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">

                    </div>
                    <div className="flex flex-col md:ml-20 mx-10 mt-10">

                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Home;