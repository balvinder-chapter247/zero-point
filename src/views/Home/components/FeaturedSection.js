import React from 'react'

const FeaturedSection = () => {
  return (
    <>
    <section className='featured-sec sec-padding'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-12 gap-4 items-center featured-content'>
            <div className='md:col-start-2 col-span-5 md:w-11/12'>
                <h2>Featured Headline</h2>
                <p>Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
            <div className='col-span-5 featured-image md:ml-auto md:w-11/12'>
                <img className="w-full object-cover rounded-md" src="./images/fitness.jpg" alt='' />
            </div>
        
            <div className='col-span-5 featured-image md:col-start-2 md:w-11/12 py-6'>
                <img className="w-full object-cover rounded-md" src="./images/featured_1.jpg" alt='' />
            </div>
            <div className='col-span-5 md:ml-auto md:w-11/12'>
                <h2>Featured Headline</h2>
                <p>Lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FeaturedSection
