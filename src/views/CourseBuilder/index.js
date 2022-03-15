import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import InputForms from "../../common/inputForm";
import InnerPageBanner from "../../components/InnerPageBanner";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CourseBuilder = () => {
  const [show, setShow] = useState(true);


  return (
    <>
      <InnerPageBanner title="Course Builder" />
      <section className="course_builder_sec1 sec-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <div className="course_builder_item hidden">
                {/* <div className='empty_course_icon'>
                    <div>
                        <img src='./images/mac.jpg' alt='' />
                        <p className='mt-4'>Top on the plus button in the sidebar to begin outlining your course!</p>
                    </div>
                </div> */}
            
                {/* <div className="building_quiz_header">
                    <div className="quiz_breadcrumb">
                    <ul className="flex gap-1 text-sm">
                        <li>Course Name</li>
                        <li>/</li>
                        <li>Module 1</li>
                    </ul>
                    </div>
                    <div className="quiz_header flex items-center justify-between">
                    <div className="quiz_name">
                        <h5 className="mb-0">Quiz #1</h5>
                    </div>
                    <div className="quiz_setting relative">
                        <div className="cursor-pointer" onClick={() => setShow((s) => !s)}>
                            <i className="fas fa-cog"></i>
                        </div>
                        <div className="quiz_setting_box" style={{ display: show ? "none" : "block" }}>
                        <div className="quiz_setting_header">
                            <h6 className="mb-0 text-center">Quiz Setting</h6>
                        </div>
                        <div className="quiz_setting_items">
                            <div className="">
                                <div className="mb-2">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    value=""
                                    id="requireAll"
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    for="requireAll"
                                >
                                    Require all question
                                </label>
                                </div>
                                <div className="mb-2">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    value=""
                                    id="requireCompletion"
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    for="requireCompletion"
                                >
                                    Require quiz completion
                                </label>
                                </div>
                                <div className="mb-2">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    value=""
                                    id="timeLenght"
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    for="timeLenght"
                                >
                                    Time lenght (Minuts)
                                </label>
                                </div>
                                <div className="w-32">
                                <InputForms
                                    placeholder="Minuts"
                                    type="number"
                                    value=""
                                    name="minuts"
                                />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}

                <div className="building_quiz_content px-6 pb-6">

                    {/* <div className="quiz_item">
                    <label className="mb-1 block">Instructions</label>
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
                    </div> */}
                    {/* <div className="add_que_icon">
                    <div>
                        <img
                        src="./images/notebook.png"
                        alt=""
                        className="mx-auto w-24"
                        />
                        <p className="my-3">
                        Let's start building this quiz!
                        <br />
                        Add the first question to get started.
                        </p>
                        <button className='blue-btn'>Add Question</button>
                    </div>
                    </div> */}

                    {/* <div className="add_question_sec text-center">
                    <div className="question_type relative">
                        <h6>Choose Question Type</h6>
                        <div className="select_type flex justify-around pb-3">
                        <div className="select_type_item">
                            <div className="icon">
                            <img src="./images/multi-choice.jpg" alt="" />
                            </div>
                            <div className="type_name">Multiple Choice</div>
                        </div>
                        <div className="select_type_item">
                            <div className="icon">
                            <img src="./images/text-input.jpg" alt="" />
                            </div>
                            <div className="type_name">Text Input</div>
                        </div>
                        <div className="select_type_item">
                            <div className="icon">
                            <img src="./images/true-false.jpg" alt="" />
                            </div>
                            <div className="type_name">True or False</div>
                        </div>
                        <div className="select_type_item">
                            <div className="icon">
                            <img src="./images/multi-select.jpg" alt="" />
                            </div>
                            <div className="type_name">Multiple Select</div>
                        </div>
                        <div className="select_type_item">
                            <div className="icon">
                            <img src="./images/upload.jpg" alt="" />
                            </div>
                            <div className="type_name">File Upload</div>
                        </div>
                        </div>
                    </div>
                    <button className="plus-btn mt-3">+</button>
                    </div> */}

                    {/* <div className="building_quiz_item">
                        <div className="building_quiz_body">
                            <p>The third chakra is associated with the color purple</p>
                            <div>
                            <div className="">
                                <input
                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                                name="flexRadioDefault"
                                id="true"
                                />
                                <label
                                className="form-check-label inline-block text-gray-800"
                                for="true"
                                >
                                True
                                </label>
                            </div>
                            <div className="">
                                <input
                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                                name="flexRadioDefault"
                                id="false"
                                />
                                <label
                                className="form-check-label inline-block text-gray-800"
                                for="false"
                                >
                                False
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="building_quiz_footer">
                            <div className="flex justify-end gap-4 items-center">
                                <div className="copy cursor-pointer">
                                    <i class="fas fa-copy"></i>
                                </div>
                                <div className="delete cursor-pointer">
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>
                                <div className="">
                                    <button className="blue-btn sm">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="building_quiz_item">
                        <div className="building_quiz_body">
                            <div className="mb-3">
                            <InputForms
                                placeholder="Question" 
                            />
                            </div>
                            <div className="mb-3">
                            <InputForms 
                                placeholder="Description (Optional)"
                            />
                            </div>
                            <div className="options">
                                <h6 className="mb-2 mt-4 text-sm">OPTIONS</h6>
                                <div className="options_item mb-3">
                                    <div className="flex items-center">
                                        <input
                                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="flexRadioDefault"
                                        disabled
                                        />
                                        <InputForms
                                            placeholder="Enter Answer" 
                                        />
                                        <div className="remove_input">
                                            <div className="mx-2">
                                                <i className="fa fa-times" data-tip="Remove item" />
                                                <ReactTooltip />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="options_item mb-3">
                                    <div className="flex items-center">
                                        <input
                                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="flexRadioDefault"
                                        disabled
                                        />
                                        <InputForms
                                            placeholder="Enter Answer" 
                                        />
                                        <div className="remove_input">
                                            <div className="mx-2">
                                                <i className="fa fa-times" data-tip="Remove item" />
                                                <ReactTooltip />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="options_item mb-3">
                                    <div className="flex items-center">
                                        <input
                                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="flexRadioDefault"
                                        disabled
                                        />
                                        <InputForms
                                            placeholder="Enter Answer" 
                                        />
                                        <div className="remove_input">
                                            <div className="mx-2">
                                                <i className="fa fa-times" data-tip="Remove item" />
                                                <ReactTooltip />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="options_item mb-3">
                                    <div className="flex items-center">
                                        <input
                                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="flexRadioDefault"
                                        disabled
                                        />
                                        <InputForms
                                            placeholder="Enter Answer" 
                                        />
                                        <div className="remove_input">
                                            <div className="mx-2">
                                                <i className="fa fa-times" data-tip="Remove item" />
                                                <ReactTooltip />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="blue-btn sm">Add Option</button>
                                </div>
                            </div>
                        </div>
                        <div className="building_quiz_footer">
                            <div className="flex justify-end gap-4 items-center">
                                <div className="copy cursor-pointer">
                                    <i class="fas fa-copy"></i>
                                </div>
                                <div className="delete cursor-pointer">
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>
                                <div className="">
                                    <button className="blue-btn sm">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="plus-btn">+</button>
                    </div> */}
                </div>
              </div>
              <div className="course_builder_item">
                <div className="building_quiz_header">
                    <div className="quiz_breadcrumb">
                    <ul className="flex gap-1 text-sm">
                        <li>Course Name</li>
                        <li>/</li>
                        <li>Module 1</li>
                    </ul>
                    </div>
                    <div className="quiz_header flex items-center justify-between">
                    <div className="quiz_name">
                        <h5 className="mb-0">Lesson #2</h5>
                    </div>
                    <div className="quiz_setting relative">
                        <div className="cursor-pointer" onClick={() => setShow((s) => !s)}>
                            <i className="fas fa-cog"></i>
                        </div>
                        <div className="quiz_setting_box" style={{ display: show ? "none" : "block" }}>
                        <div className="quiz_setting_header">
                            <h6 className="mb-0 text-center">Quiz Setting</h6>
                        </div>
                        <div className="quiz_setting_items">
                            <div className="">
                                <div className="mb-2">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    value=""
                                    id="requireAll"
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    for="requireAll"
                                >
                                    Require all question
                                </label>
                                </div>
                                <div className="mb-2">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    value=""
                                    id="requireCompletion"
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    for="requireCompletion"
                                >
                                    Require quiz completion
                                </label>
                                </div>
                                <div className="mb-2">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    value=""
                                    id="timeLenght"
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    for="timeLenght"
                                >
                                    Time lenght (Minuts)
                                </label>
                                </div>
                                <div className="w-32">
                                <InputForms
                                    placeholder="Minuts"
                                    type="number"
                                    value=""
                                    name="minuts"
                                />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="px-6 pb-6">
                    <div className="lesson">
                        <CKEditor
                            editor={ClassicEditor}
                            name='details'
                            enterMode='CKEDITOR.ENTER_BR'
                            shiftEnterMode='CKEDITOR.ENTER_P'
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                                //   setFormData({ ...formData, description: data });
                            }}
                            onBlur={(event, editor) => {
                                // console.log( 'Blur.', editor );
                            }}
                            onFocus={(event, editor) => {
                                // console.log( 'Focus.', editor );
                            }}
                        />
                    </div>
                </div>
                
              </div>
            </div>
            <div className="col-span-3">
              <div className="builder_sidebar">
                <div className="sidebar_header">
                  Course Name
                  <button className="btn p-4">+</button>
                </div>
                <div className="course_module">
                  <div className="accordion" id="accordionExample5">
                    <div className="accordion-item bg-white border border-gray-200">
                      <h2 className="accordion-header mb-0" id="headingOne5">
                        <button
                          className="
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
                                        "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne5"
                          aria-expanded="true"
                          aria-controls="collapseOne5"
                        >
                          Module #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne5"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne5"
                      >
                        <div className="accordion-body">
                          <ul className="module_list">
                            <li>Lesson #1</li>
                            <li>Lesson #2</li>
                            <li>Lesson #3</li>
                            <li>Quiz #1</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                      <h2 className="accordion-header mb-0" id="headingTwo5">
                        <button
                          className="
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
                                        "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo5"
                          aria-expanded="false"
                          aria-controls="collapseTwo5"
                        >
                          Module #2
                        </button>
                      </h2>
                      <div
                        id="collapseTwo5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo5"
                      >
                        <div className="accordion-body">
                          <ul className="module_list">
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
                    <div className="accordion-item bg-white border border-gray-200">
                      <h2 className="accordion-header mb-0" id="headingThree5">
                        <button
                          className="
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
                                        "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree5"
                          aria-expanded="false"
                          aria-controls="collapseThree5"
                        >
                          Module #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree5"
                      >
                        <div className="accordion-body">
                          <ul className="module_list">
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
                    <div className="accordion-item bg-white border border-gray-200">
                      <h2 className="accordion-header mb-0" id="headingThree5">
                        <button
                          className="
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
                                        "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour5"
                          aria-expanded="false"
                          aria-controls="collapseFour5"
                        >
                          Module #4
                        </button>
                      </h2>
                      <div
                        id="collapseFour5"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree5"
                      >
                        <div className="accordion-body">
                          <ul className="module_list">
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
  );
};

export default CourseBuilder;
