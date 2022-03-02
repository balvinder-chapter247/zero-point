import React from 'react'
import InnerPageBanner from '../../components/InnerPageBanner'
import { Link } from 'react-router-dom';
import InputForms from '../../common/inputForm'
import RelatedCourses from './RelatedCourses';
import RelatedCourseItem from './DataFake/RelatedCourseItem';
import CourseDescription from './CourseDetails/CourseDescription';
import CoursesCurriculum from './CourseDetails/CoursesCurriculum';
import CourseReview from './CourseDetails/CourseReview';
import CourseAuthor from './CourseDetails/CourseAuthor';

const CourseLanding = () => {
  return (
    <>
      <main className=''>
        <InnerPageBanner title={"Course Landing Page"} />
        <div className='container mx-auto px-4 sec-padding'>
          <div className='grid gap-4 grid-cols-4'>
            <div className='col-span-3'>
              <div className='course-details-left'>
                <div className="course_tag font-medium text-white rounded bg-color-1 static">
                  Development
                </div>
                <h2 className='font-bold py-3'>The business Intelligence analyst Course 2022</h2>
                <div className='course_info flex items-center mb-12'>
                  <div className='teacher_info flex items-center mr-12'>
                    <img src="./images/user-1.jpg" className='mr-3' alt="" />
                    <div className='short_info'>
                      <span className='mb-0 fomt-medium text-sm short_title'>Teacher</span>
                      <h6 className='font-medium text-gray-900'>Elon Gated</h6>
                    </div>
                  </div>
                  <div className='short_info mr-12'>
                    <span className='mb-0 fomt-medium text-sm short_title'>Last Update:</span>
                    <h6 className='font-medium text-gray-900'>July 24, 2022</h6>
                  </div>
                  <div className='short_info'>
                    <span className='mb-0 fomt-medium text-sm short_title'>Review:</span>
                    <h6 className='font-medium text-gray-900 flex items-center'>
                      <div className="back-ratings text-sm"> 
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      4.5
                    </h6>
                  </div>
                </div>
                <img src="./images/course-details-1.jpg" className='rounded' alt='' />
                <div className='pt-6'>
                  <ul className="course-tab nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 mb-4 bg-white py-3 rounded" id="tabs-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-home" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                        active
                      " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                        aria-selected="true"><i class="fas fa-layer-group pr-1"></i> Description</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-profile" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                      " id="tabs-curriculum-tab" data-bs-toggle="pill" data-bs-target="#tabs-curriculum" role="tab"
                        aria-controls="tabs-curriculum" aria-selected="false"><i className="fa fa-book pr-1"></i> Curriculum</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-profile" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                      " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                        aria-controls="tabs-profile" aria-selected="false"><i className='fa fa-star pr-1'></i> Reviews</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a href="#tabs-messages" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        px-8
                        py-4
                        bg-gray-100
                        
                        focus:border-transparent
                      " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                        aria-controls="tabs-messages" aria-selected="false"><i className='fa fa-user pr-1'></i> About Author</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tabs-tabContent">
                    <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                      <CourseDescription />
                    </div>
                    <div className="tab-pane fade" id="tabs-curriculum" role="tabpanel" aria-labelledby="tabs-curriculum-tab">
                      <CoursesCurriculum />
                    </div>
                    <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                      <CourseReview />
                    </div>
                    <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                      <CourseAuthor />
                    </div>
                  </div>
                </div>
                <div className='bg-white pt-12 mt-4 rounded'>
                <h2 className='mb-0'>Related Courses</h2>
                  <RelatedCourses data={RelatedCourseItem} />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='bg-white course-sidebox'>
                <ul className="price flex items-center p-8">
                  <li>$ 72 USD</li>
                  <li className='line-through leading-4 font-medium text-sm'>$ 95 USD</li>
                  <li className='leading-4 font-medium p-1 rounded text-sm'>25% OFF</li>
                </ul>
                <ul className='price-courses p-8'>
                  <li><i className="fa fa-user"></i> Instructor <span className='float-right'>Penny Tool</span></li>
                  <li><i className="fa fa-tag"></i> Subject <span className='float-right'>IT &amp; Software</span></li>
                  <li><i className="fa fa-users"></i> Enrolled <span className='float-right'>146 students</span></li>
                  <li><i className="fa fa-clock"></i> Duration <span className='float-right'>2 weeks</span></li>
                  <li><i className="fa fa-book"></i> Lectures <span className='float-right'>4 lectures</span></li>
                  <li><i className="fa fa-map"></i> Language <span className='float-right'> English</span></li>
                </ul>
                <div className='px-8 pb-8'>
                  <Link to="" className="blue-btn text-white font-semibold uppercase py-3 px-8 rounded block text-center">
                  Add to cart </Link>
                  <div className='share font-medium text-center mt-4 flex items-center justify-center'>
                    Share this course
                    <i className="fa fa-share-alt ml-2  flex items-center justify-center" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className='bg-white course-sidebox p-8 mt-4'>
                <h5>Related Course</h5>
                <div className='sidebar-course flex items-center mt-6'>
                  <img src="./images/course-1.jpg" className='course_img object-cover mr-4' alt='' />
                  <div>
                    <ul className="rating flex inline-block">
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                    </ul>
                    <div className='font-medium text-sm'>
                    <Link to="#" className='course_name'>Development</Link>
                    </div>
                    <div className='course_price font-medium text-sm'>$54.00</div>
                  </div>
                </div>
                <div className='sidebar-course flex items-center mt-6'>
                  <img src="./images/course-2.jpg" className='course_img object-cover mr-4' alt='' />
                  <div>
                    <ul className="rating flex inline-block">
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                    </ul>
                    <div className='font-medium text-sm'>
                    <Link to="#" className='course_name'>Data Science</Link>
                    </div>
                    <div className='course_price font-medium text-sm'>$74.00</div>
                  </div>
                </div>
                <div className='sidebar-course flex items-center mt-6'>
                  <img src="./images/course-3.jpg" className='course_img object-cover mr-4' alt='' />
                  <div>
                    <ul className="rating flex inline-block">
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                      <li className='text-yellow'><i className='fa fa-star'></i></li>
                    </ul>
                    <div className='font-medium text-sm'>
                    <Link to="#" className='course_name'>UI Design</Link>
                    </div>
                    <div className='course_price font-medium text-sm'>Free</div>
                  </div>
                </div>
              </div>
              {/* <div className='bg-white course-box  p-8 mt-4'>
                <h5>Course categories</h5>
                <ul className='list-item'>
                  <li><Link to="">Art & Design (6)</Link></li>
                  <li><Link to="">Exercise (4)</Link></li>
                  <li><Link to="">Photography (8)</Link></li>
                  <li><Link to="">Environmental Sciences (3)</Link></li>
                  <li><Link to="">Software Training (5)</Link></li>
                  <li><Link to="">Software Development (2)</Link></li>
                  <li><Link to="">Music (10)</Link></li>
                  <li><Link to="">Material Design (2)</Link></li>
                  <li><Link to="">Technology (7)</Link></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CourseLanding
