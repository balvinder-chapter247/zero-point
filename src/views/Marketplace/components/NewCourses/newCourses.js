import { Link } from 'react-router-dom';
const NewCourses = (newCourseData) => {
    const { data } = newCourseData
    return (
        <>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 py-4">
                {
                    data && data.length ?
                        <>
                            {
                                data.map((courseList) =>
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
                        </>
                        :
                        null
                }
            </div>
        </>
    )
}
export default NewCourses