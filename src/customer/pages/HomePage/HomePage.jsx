// eslint-disable-next-line no-unused-vars
import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel.jsx";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel.jsx";
import {dressPage1} from "../../../Data/dresses.jsx";

const HomePage = ()=> {
    return (
        <div>
            <MainCarousel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={dressPage1} sectionName={"Bestsellers"}/>
            </div>
        </div>
    )
}

export default HomePage