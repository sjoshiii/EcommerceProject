import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox';



const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center'>
        
        {/* <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" /> */}
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At BEANS, we believe fashion should be effortless, expressive, and accessible. Our mission is to redefine everyday clothing with a blend of comfort, modern style, and sustainability.</p>

          <p>Whether you're dressing up for a special moment or keeping it casual, our curated collections are designed to keep you confident and comfortable — every day, everywhere. Inspired by modern trends and everyday life, we bring you fashion that fits your lifestyle.</p>

          <div className='text-2xl text-center pt-8'>
        <Title  text1={'OUR'} text2={'MISSION'}/>

      </div>
          <p> To empower individuals through clothing that reflects who they are — stylish, conscious, and bold. We are committed to quality, affordability, and creating a positive impact in every stitch.</p>
        </div>

      </div>
      
      <div className='text-2xl py-4 text-center'>
        <Title text1={'WHY'} text2={'CHOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>  

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Asssurance:</b>
              <p className='text-gray-600'>
  We’re committed to providing high-quality clothing made with durable fabrics and attention to detail — so you get pieces that look great and last longer.
</p>

          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>
  From easy navigation to smooth checkout and flexible delivery options, we make your shopping experience simple and stress-free.
</p>

          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>
  Our support team is always here to help — whether you need size advice, order updates, or quick resolutions, we've got you covered.
</p>

          </div>

      </div>


    <NewsLetterBox />

    </div>
  )
}

export default About