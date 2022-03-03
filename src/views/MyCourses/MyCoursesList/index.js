import { Link } from 'react-router-dom';
const MyCourseList = (myCourseData) => {
    const { data } = myCourseData 
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        data && data.length ? 
                        <>
                            {
                                data.map((courseList) => 
                                <div className="my_course_item relative bg-white shadow-sm hover:shadow-lg transition duration-500">
                                    <div className='overflow-hidden h-56 rounded-tl-md rounded-tr-md'>
                                        <img className="h-56 w-full object-cover course_image" src={courseList.courseImage} alt="" />
                                    </div>
                                    {
                                        courseList.courseType === "Create Course" ? 
                                        <Link to="edit-course">
                                            <div className="edit-icon">
                                                <i class="fas fa-pencil"></i>
                                            </div>
                                        </Link> : null
                                    }
                                    <div className="p-6">
                                        <div className='course_content'>
                                            <Link to="#" className={`blog_tag ${courseList.courseTagColor}`}>{courseList.courseTag}</Link>
                                            <h5 className='leading-6 course_name'>
                                                <Link to="#" className="font-medium block hover:text-blue-700">{courseList.courseName}</Link>
                                            </h5>
                                        </div>
                                        <div className='flex items-center justify-between text-gray-600'>
                                            <div className="course-owner flex items-center">
                                                <img src={courseList.courseOwnerProfile} alt='' />
                                                <p className='mb-0 ml-3'>{courseList.courseOwner}</p>
                                            </div>
                                            <div className='course_date text-sm'>
                                                <i class="fas fa-clock mr-2"></i>
                                                <span className='date'>{courseList.courseDate}</span>
                                            </div>
                                        </div>
                                        {/* <div className="course-owner flex items-center py-3">
                                            <img className='w-10 h-10 rounded-full mr-2 cover object-cover object-top' src={courseList.courseOwnerProfile} />
                                            <span>{courseList.courseOwner}</span>
                                        </div> */}
                                        {/* <button className="absolute left-0 right-0  max-w-max bottom-4 m-auto bg-theme-color hover:bg-blue-700 text-white font-semibold  py-2 px-4 rounded">
                                        {courseList.courseButton}</button> */}
                                    </div>
                                </div>
                                )
                            }
                        </>
                        :
                        null
                    }
                </div>
        </>
    )
}

export default MyCourseList