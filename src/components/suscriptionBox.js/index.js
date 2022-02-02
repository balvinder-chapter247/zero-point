import { useState } from "react"
import validate from 'validate.js';

const SuscriptionBox = () => {
   
    return (
        <>
            <form >
                <div className="text-black">
                    <div className="container  flex justify-center items-center">
                        <div className="relative">
                            <input type="email"
                                className="h-10 w-96 pl-5 pr-5  focus:shadow focus:outline-none"
                                placeholder="Subscribe to our Newsletter" />
                            <div className="absolute top-1 right-1">
                                <button className="h-8 w-20 text-white bg-blue"
                                type="submit">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default SuscriptionBox