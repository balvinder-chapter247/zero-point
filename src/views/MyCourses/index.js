import React from 'react'
import { Link } from 'react-router-dom';
const MyCourses =()=>
{
    const coursesItem = [
        {
            id: "1",
            courseImage: "https://myheart.net/wp-content/uploads/2013/12/dreamstimelarge_211129061.jpg",
            courseName: "Overcomming Negative Family Patterns",
            courseOwnerProfile: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
            courseOwner: "Jassica Miller",
            courseButton: "Start Course"
          
        },
        {
            id: "2",
            courseImage: "https://imgk.timesnownews.com/story/Health_benefits_of_Aerial_Yoga.jpg",
            courseName: "Yoga Super Shered for Men",
            courseOwnerProfile: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
            courseOwner: "Jassica Miller 2",
            courseButton: "Start Course"
        },
        {
            id: "3",
            courseImage: "https://circuitliving.com/wp-content/uploads/2021/09/stretching-before-a-workout-519x519.jpg",
            courseName: "Fit and Fierce Over 40",
            courseOwnerProfile: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
            courseOwner: "Jassica Miller",
            courseButton: "Start Course"
          },
          {
              id: "4",
              courseImage: "https://images.squarespace-cdn.com/content/v1/5c9642c0ab1a6250fa3dc676/1555701147382-444B47HZZWG2FKWQ69FI/Lines-Website-Homepage-Banner.jpg?format=2500w",
              courseName: "Shakti Warrior Dance for Healing",
              courseOwnerProfile: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
              courseOwner: "Jassica Miller 2",
              courseButton: "Start Course"
          },
          {
            id: "5",
            courseImage: "https://myheart.net/wp-content/uploads/2013/12/dreamstimelarge_211129061.jpg",
            courseName: "Overcomming Negative Family Patterns",
            courseOwnerProfile: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
            courseOwner: "Jassica Miller",
            courseButton: "Start Course"
          
        },
        {
            id: "6",
            courseImage: "https://imgk.timesnownews.com/story/Health_benefits_of_Aerial_Yoga.jpg",
            courseName: "Yoga Super Shered for Men",
            courseOwnerProfile: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
            courseOwner: "Jassica Miller 2",
            courseButton: "Start Course"
        },
        {
            id: "7",
            courseImage: "https://circuitliving.com/wp-content/uploads/2021/09/stretching-before-a-workout-519x519.jpg",
            courseName: "Fit and Fierce Over 40",
            courseOwnerProfile: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
            courseOwner: "Jassica Miller",
            courseButton: "Start Course"
          },
          {
              id: "8",
              courseImage: "https://images.squarespace-cdn.com/content/v1/5c9642c0ab1a6250fa3dc676/1555701147382-444B47HZZWG2FKWQ69FI/Lines-Website-Homepage-Banner.jpg?format=2500w",
              courseName: "Shakti Warrior Dance for Healing",
              courseOwnerProfile: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
              courseOwner: "Jassica Miller 2",
              courseButton: "Start Course"
          },
      ];

    return(
        <>
        <main className="bg-gray-100">
            <div className="container m-auto px-4">
                <div className="course-header flex justify-between py-4 border-b">
                    <h2 className="font-bold text-3xl">My Courses</h2>
                    <button className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded shadow-sm">Create Course +</button>
                </div>
                <div className="my-3">
                    <select className="bg-gray-50 border max-w-max border-gray-300 text-gray-900 font-medium text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Showing: All Courses</option>
                        <option value="1">Courses 1</option>
                        <option value="2">Courses 2</option>
                        <option value="3">Courses 3</option>
                    </select>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        coursesItem.map((courseList) => 
                        <div className="course-item bg-white">
                            <img className="rounded h-48 w-full object-cover" src={courseList.courseImage} />
                            <div className="p-4">
                                <Link to="" className="font-medium block">{courseList.courseName}</Link>
                                <div className="course-owner flex items-center py-3">
                                    <img className='w-10 h-10 rounded-full mr-2 cover object-cover object-top' src={courseList.courseOwnerProfile} />
                                    <p>{courseList.courseOwner}</p>
                                </div>
                                <div className="text-center">
                                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    {courseList.courseButton}</button>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </main>
        </>
    )
}
export default MyCourses