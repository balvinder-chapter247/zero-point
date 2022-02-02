import React from 'react'
import { Link } from 'react-router-dom';
import exploreCategories from './ExploreCategories';
import NewestCourse from './NewestCourse';
import TopCourses from './TopCourses';
import featuredCourses from './FeaturedCourses';


const Marketplace = () => {
    return(
        <>
            <main className="bg-gray-100">
                <div className="course-header border-b">
                    <div className="container m-auto px-4 flex justify-between py-4 ">
                        <h1 className="font-bold text-3xl">Marketplace</h1>
                    </div>
                </div>
                <div className="container m-auto px-4 flex justify-between pt-4">
                    <h3 className="font-bold text-2xl">Newest Courses</h3>
                </div>
                <div className="container m-auto px-4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 py-4">
                        {
                            NewestCourse.map((courseList) => 
                            <div className="course-item bg-white shadow-sm shadow-md hover:shadow-lg transition duration-500">
                                <img className="h-56 w-full object-cover" src={courseList.courseImage} />
                                <div className="p-4">
                                    <Link to="" className="font-medium block">{courseList.courseName}</Link>
                                    <div className="course-owner flex items-center">
                                        <p>{courseList.courseOwner}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 py-6">
                        <div className="top-courses">
                            <h3 className="font-bold text-2xl pb-4">Top Courses this Month</h3>
                            <ol className='list-decimal pl-6'>
                            { 
                                TopCourses.map((TopCourse) =>
                                    <li key={TopCourse}> {TopCourse} </li>
                                )
                            }
                            </ol>
                        </div>
                        <div className="top-courses">
                            <h3 className="font-bold text-2xl pb-4">Explore Categories</h3>
                            <div className="flex flex-wrap gap-4">
                                {
                                    exploreCategories.map((CategoriesName) => 
                                        <button key={CategoriesName} className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded uppercase font-medium text-sm'>{CategoriesName}</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className="font-bold text-2xl">Featured Courses</h3>
                        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 py-6'>
                            {
                                featuredCourses.map((featuredCoursesList) => 
                                <div className="course-item bg-white shadow-sm shadow-md hover:shadow-lg transition duration-500">
                                    <img className="h-56 w-full object-cover" src={featuredCoursesList.courseImage} />
                                    <div className="p-4">
                                        <Link to="" className="font-medium block">{featuredCoursesList.courseName}</Link>
                                        <div className="course-owner flex items-center">
                                            <p>{featuredCoursesList.courseOwner}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Marketplace;