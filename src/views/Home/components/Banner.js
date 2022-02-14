import React from 'react'
import bannerImage from '../../../assets/Images/Home/bannerimg.gif'
const BannerSection = () =>
{
    return(
        <>
        <section>
            <div>
                <img src={bannerImage} alt="bannerImage" className='homeBannerImage'/>
            </div>
            
        </section>
        </>
    )
}
export default BannerSection