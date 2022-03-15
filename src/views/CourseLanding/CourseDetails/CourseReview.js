import React, { useEffect, useState } from "react";
import { Toaster } from "../../../helper/react-toast";
import { ToastContainer } from "react-toastify";
import validate from "validate.js";
import { ReviewSchema } from "../../../validators";
import InputForms from "../../../common/inputForm";

const CourseReview = () => {
  ///State for our form
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  ///For validating error everytime change in inputs
  useEffect(() => {
    const errors = validate(formState.values, ReviewSchema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  ///Handle change for storing input values to state.
  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  ///Submiting values to api.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      let ReviewMessage = JSON.parse(localStorage.getItem("ReviewMessage"));
        let tempArray = ReviewMessage;
        tempArray.push(formState.values);
        localStorage.setItem("ReviewMessage", JSON.stringify(tempArray));

        {
            Toaster({
                type: "success",
                text: "You have successfully sent your message."
            })
        }
    }
    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <>
      <div className="bg-white course-box mt-4">
        <h4 className="mb-0">Reviews</h4>
        <p>
          Gosh william I'm telling crikey burke I don't want no agro A bit of
          how's your father bugger all mate off his nut that, what a plonker
          cuppa owt to do
        </p>
        <div className="course_review_rating grid grid-cols-6 bg-gray-100 rounded mt-4 mb-12">
          <div className="course_rating text-center col-span-2">
            <h2 className="mb-0">4.5</h2>
            <ul className="rating flex justify-center">
              <li className="text-yellow ">
                <i className="fa fa-star"></i>
              </li>
              <li className="text-yellow ">
                <i className="fa fa-star"></i>
              </li>
              <li className="text-yellow ">
                <i className="fa fa-star"></i>
              </li>
              <li className="text-yellow ">
                <i className="fa fa-star"></i>
              </li>
              <li className="text-yellow ">
                <i className="fa fa-star"></i>
              </li>
            </ul>
            <p>4.5 Ratings</p>
          </div>
          <div className="col-span-4">
            <div className="course_detailed_rating">
              <h5>Detailed Rating</h5>
              <ul>
                <li className="flex items-center mb-1">
                  <div className="review_text">5 stars</div>
                  <div class="w-full bg-gray-200 h-1 rounded">
                    <div
                      class="bg-blue-600 h-1 rounded"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="ml-4">100%</div>
                </li>
                <li className="flex items-center mb-1">
                  <div className="review_text">4 stars</div>
                  <div class="w-full bg-gray-200 h-1 rounded">
                    <div
                      class="bg-blue-600 h-1 rounded"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="ml-4">75%</div>
                </li>
                <li className="flex items-center mb-1">
                  <div className="review_text">3 stars</div>
                  <div class="w-full bg-gray-200 h-1 rounded">
                    <div
                      class="bg-blue-600 h-1 rounded"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="ml-4">0%</div>
                </li>
                <li className="flex items-center mb-1">
                  <div className="review_text">2 stars</div>
                  <div class="w-full bg-gray-200 h-1 rounded">
                    <div
                      class="bg-blue-600 h-1 rounded"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="ml-4">0%</div>
                </li>
                <li className="flex items-center mb-1">
                  <div className="review_text">1 stars</div>
                  <div class="w-full bg-gray-200 h-1 rounded">
                    <div
                      class="bg-blue-600 h-1 rounded"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="ml-4">0%</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="review-item flex items-center mb-4">
          <div className="review-image w-20 mr-3">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="">
            <div className="back-ratings text-sm">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <h5 className="name mb-0">
              Jassica Miller{" "}
              <span className="designation text-sm font-normal">
                July 8, 2022 at 7:38 am
              </span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
        <div className="review-item flex items-center mb-4">
          <div className="review-image w-20 mr-3">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="">
            <div className="back-ratings text-sm">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <h5 className="name mb-0">
              Jassica Miller{" "}
              <span className="designation text-sm font-normal">
                July 8, 2022 at 7:38 am
              </span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="mb-0">Write a Review</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="ratings flex items-center pt-1 pb-3">
            <h6 className="mb-0 font-medium">Ratings:</h6>
            <div className="text-sm ml-3">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <InputForms
                  labelText="Name"
                  labelRequired="*"
                  labelclassName="block font-medium mb-2 text-gray-700"
                  className="block font-medium"
                  type="text"
                  name="name"
                  value={formState.values.name || ""}
                  errorMessage={
                    hasError("name") ? formState.errors.name[0] : null
                  }
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
              <div className="">
                <InputForms
                  labelText="Email"
                  labelRequired="*"
                  labelclassName="block font-medium mb-2 text-gray-700"
                  className="block font-medium"
                  type="text"
                  name="email"
                  value={formState.values.email || ""}
                  errorMessage={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="col-span-2">
                <InputForms
                  labelText="Subject"
                  labelRequired="*"
                  labelclassName="block font-medium mb-2 text-gray-700"
                  className="block font-medium"
                  type="text"
                  name="subject"
                  value={formState.values.subject || ""}
                  errorMessage={
                    hasError("subject") ? formState.errors.subject[0] : null
                  }
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>
              <div className="col-span-2">
                <label className="block font-medium mb-2 text-gray-700">
                  Message<span className="required">*</span>
                </label>
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
                  value={formState.values.message || ""}
                  onChange={handleChange}
                  placeholder="Your Message"
                ></textarea>
                <div>
                  <span className="error text-red-500 text-sm font-medium">
                    {hasError("message") ? formState.errors.message[0] : null}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="blue-btn text-white font-semibold mt-4 py-3 px-8 rounded max-w-max"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
        <ToastContainer
          position="right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default CourseReview;
