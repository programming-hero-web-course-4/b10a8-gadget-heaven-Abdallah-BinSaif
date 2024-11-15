import React from 'react';
import banner from "../assets/banner.jpg"
const BannerImage = () => {
    return (
        <div className={"flex justify-center relative md:h-52 lg:h-96 container mx-auto"}>
            <div className={"h-[300px] md:h-[710px] rounded-3xl w-2/3 absolute z-50 -top-72 bg-white/30 border-2 border-white/50"}></div>
             <img
                 className={"w-2/3 p-8 absolute z-50 -top-72"}
                 src={banner}/>
        </div>
    );
};

export default BannerImage;