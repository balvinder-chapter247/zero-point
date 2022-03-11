import React from 'react'
import InnerPageBanner from '../../components/InnerPageBanner'

const CourseBuilder = () => {
  return (
    <>
        <InnerPageBanner title="Course Builder" />
        <section className='course_builder_sec1 sec-padding'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-9'>
                        <div className='course_builder_item px-6 py-4'>
                            {/* <div className='empty_course_icon'>
                                <div>
                                    <img src='./images/mac.jpg' alt='' />
                                    <p className='mt-4'>Top on the plus button in the sidebar to begin outlining your course!</p>
                                </div>
                            </div> */}
                            <div className='quiz_item'>
                                <h5 className='mb-0'>Quiz #1</h5>
                                <label className='mb-1 block'>Instructions</label>
                                <textarea
                                    className="
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none
                                        "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="message"
                                    value=""
                                    placeholder="Add instructions directions or details to help your students better understand"
                                ></textarea>
                            </div>
                            <div className='add_que_icon'>
                                <div>
                                    <img src='./images/notebook-pen.jpg' alt='' className='mx-auto w-24' />
                                    <p className='my-3'>Let's start building this quiz!<br/>Add the first question to get started.</p>
                                    {/* <button className='blue-btn'>Add Question</button> */}
                                    
                                </div>
                            </div>
                            <div className='add_question_sec text-center'>
                                <div className='question_type relative'>
                                    <h6>Choose Question Type</h6>
                                    <div className='select_type flex justify-around pb-3'>
                                        <div className='select_type_item'>
                                            <div className='icon'>
                                                <img src='./images/multi-choice.jpg' alt='' />
                                            </div>
                                            <div className='type_name'>Multiple Choice</div>
                                        </div>
                                        <div className='select_type_item'>
                                            <div className='icon'>
                                                <img src='./images/text-input.jpg' alt='' />
                                            </div>
                                            <div className='type_name'>Text Input</div>
                                        </div>
                                        <div className='select_type_item'>
                                            <div className='icon'>
                                                <img src='./images/true-false.jpg' alt='' />
                                            </div>
                                            <div className='type_name'>True or False</div>
                                        </div>
                                        <div className='select_type_item'>
                                            <div className='icon'>
                                                <img src='./images/multi-select.jpg' alt='' />
                                            </div>
                                            <div className='type_name'>Multiple Select</div>
                                        </div>
                                        <div className='select_type_item'>
                                            <div className='icon'>
                                                <img src='./images/upload.jpg' alt='' />
                                            </div>
                                            <div className='type_name'>File Upload</div>
                                        </div>
                                    </div>
                                </div>
                                <button className='plus-btn mt-3'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='builder_sidebar'>
                            <div className='sidebar_header'>
                                Course Name
                                <button className='btn p-4'>+</button>
                            </div>
                            <div className='course_module'>
                                <div class="accordion" id="accordionExample5">
                                    <div class="accordion-item bg-white border border-gray-200">
                                        <h2 class="accordion-header mb-0" id="headingOne5">
                                        <button class="
                                            accordion-button
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none
                                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
                                            aria-controls="collapseOne5">
                                            Module #1
                                        </button>
                                        </h2>
                                        <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
                                        <div class="accordion-body">
                                            <ul className='module_list'>
                                                <li>Lesson #1</li>
                                                <li>Lesson #2</li>
                                                <li>Lesson #3</li>
                                                <li>Quiz #1</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-white border border-gray-200">
                                        <h2 class="accordion-header mb-0" id="headingTwo5">
                                        <button class="
                                            accordion-button
                                            collapsed
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none
                                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
                                            aria-controls="collapseTwo5">
                                            Module #2
                                        </button>
                                        </h2>
                                        <div id="collapseTwo5" class="accordion-collapse collapse" aria-labelledby="headingTwo5">
                                        <div class="accordion-body">
                                            <ul className='module_list'>
                                                <li>Lesson #1</li>
                                                <li>Assignment #1</li>
                                                <li>Lesson #2</li>
                                                <li>Assignment #3</li>
                                                <li>Lesson #3</li>
                                                <li>Quiz #2</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-white border border-gray-200">
                                        <h2 class="accordion-header mb-0" id="headingThree5">
                                        <button class="
                                            accordion-button
                                            collapsed
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none
                                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
                                            aria-controls="collapseThree5">
                                            Module #3
                                        </button>
                                        </h2>
                                        <div id="collapseThree5" class="accordion-collapse collapse" aria-labelledby="headingThree5">
                                        <div class="accordion-body">
                                            <ul className='module_list'>
                                                <li>Lesson #1</li>
                                                <li>Assignment #1</li>
                                                <li>Lesson #2</li>
                                                <li>Assignment #3</li>
                                                <li>Lesson #3</li>
                                                <li>Quiz #4</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item bg-white border border-gray-200">
                                        <h2 class="accordion-header mb-0" id="headingThree5">
                                        <button class="
                                            accordion-button
                                            collapsed
                                            relative
                                            flex
                                            items-center
                                            w-full
                                            py-4
                                            px-5
                                            text-base text-gray-800 text-left
                                            bg-white
                                            border-0
                                            rounded-none
                                            transition
                                            focus:outline-none
                                        " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour5" aria-expanded="false"
                                            aria-controls="collapseFour5">
                                            Module #4
                                        </button>
                                        </h2>
                                        <div id="collapseFour5" class="accordion-collapse collapse" aria-labelledby="headingThree5">
                                        <div class="accordion-body">
                                            <ul className='module_list'>
                                                <li>Lesson #1</li>
                                                <li>Assignment #1</li>
                                                <li>Lesson #2</li>
                                                <li>Assignment #3</li>
                                                <li>Lesson #3</li>
                                                <li>Quiz #5</li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CourseBuilder
