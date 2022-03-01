import React from 'react'

const CourseDescription = () => {
  return (
    <>
      <div className='bg-white course-box'>
        <h4>Course Overview</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <h5 className='pt-4'>What you'll learn</h5>
        <ul className='columns-2 check-list'>
            <li className='flex items-center'>
            Become a UI designer.
            </li>
            <li className='flex items-center'>
            Become a UX designer.</li>
            <li className='flex items-center'>
            Build & test a full website design.</li>
            <li className='flex items-center'>
            Build & test a full mobile app.</li>
            <li className='flex items-center'>
            Learn to design websites & mobile phone apps.</li>
            <li className='flex items-center'>
            You'll learn how to choose colors.</li>
            <li className='flex items-center'>
            Prototype your designs with interactions.</li>
            <li className='flex items-center'>
            Export production ready assets.</li>
            <li className='flex items-center'>
            All the techniques used by UX professionals</li>
            <li className='flex items-center'>
            You will be able to add UX designer to your CV
            </li>
        </ul>
        </div>
    </>
  )
}

export default CourseDescription
