import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
const FullPageLoader = (props) => {
    const {isFullPage}=props
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#3B82F6");
    return (
        <>
            <div className={isFullPage ? "fullPageLoader" : "normalLoader"}>
                <div className="titledDiv">
                    <HashLoader  loading={loading} color={color} size={80} />
                </div>
            </div>
        </>
    )
}
export default FullPageLoader
