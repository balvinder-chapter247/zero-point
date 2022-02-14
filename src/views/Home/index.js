import React from 'react';
import BannerSection from './components/Banner';
import TopCourses from './components/TopCourses';

const Home = () => {


    return (
        <>
            <BannerSection />

            <div className=" mx-auto  container px-4">
                <div className="grid grid-cols-3 gap-2 my-12 justify-items-center">

                    <TopCourses />
                    <TopCourses />
                    <TopCourses />
                    <TopCourses />
                    <TopCourses />
                    <TopCourses />

                </div>
            </div>


        </>
    )

}


export default Home