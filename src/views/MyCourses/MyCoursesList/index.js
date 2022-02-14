import { Link } from 'react-router-dom';
const MyCourseList = (myCourseData) => {
    const { data } = myCourseData 
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        data && data.length ? 
                        <>
                            {
                                data.map((courseList) => 
                                <div className="course-item bg-white shadow-sm hover:shadow-lg transition duration-500">
                                    <img className="h-48 w-full object-cover course-image" src={courseList.courseImage} />
                                    <div className="p-4 course-detail relative">
                                        <Link to="" className="font-medium block">{courseList.courseName}</Link>
                                        <div className="course-owner flex items-center py-3">
                                            <img className='w-10 h-10 rounded-full mr-2 cover object-cover object-top' src={courseList.courseOwnerProfile} />
                                            <span>{courseList.courseOwner}</span>
                                        </div>
                                        <button className="absolute left-0 right-0 max-w-max bottom-4 m-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold  py-2 px-4 rounded">
                                        {courseList.courseButton}</button>
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