import React from 'react'

const CourseAuthor = () => {
  return (
    <div>
      <div className='bg-white course-box'>
        <h5 className='mb-0'>Jassica Miller</h5>
        <p>GameDev.tv Founder :: Entrepreneur :: Passionate Teacher</p>
        <div className='author-overview flex items-center'>
            <div className='author-image mr-3'>
            <img src='images/user-1.jpg' className='rounded-full w-20 h-20 object-cover' alt='' />
            </div>
            <div className='overview-item'>
            <ul>
                <li><i className='fa fa-star text-yellow'></i> 4.7 Instructor Rating</li>
                <li><i className="fa fa-bookmark text-blue"></i> 114,059 Reviews</li>
                <li><i className="fa fa-users text-blue"></i> 904,190 Students</li>
                <li><i className="fa fa-play-circle text-blue"></i> 14 Courses</li>
            </ul>
            </div>
        </div>
        <div className='mt-4'>
            <p>Hi, I'm Jassica Miller. I have a degree in computing from Imperial College London, and a physics diploma from the Open University.</p>
            <p>I started working for myself at the age of 15, and never looked back. I explored careers as varied as being a commercial pilot, stunt-man, rock climbing instructor, and more. None of these provided a continued challenge, and stable income in the same way technology does. </p>
            <p>After building and selling a home computer support business, I became an angel investor and business mentor here in Cambridge UK. I fell in love with teaching game development through one of my investments, and I now spend all of my time sharing my passion with people like you. </p>
            <p>I can't wait to help you experience the fulfilment, and financial freedom, that having a deep understanding of technology brings. </p>
            <p>So why not start learning to make games with me and my team now?</p>
            <p>See you soon! </p>
        </div>
        </div>
    </div>
  )
}

export default CourseAuthor
