import React from 'react'

export default function Googlemap() {
  return (
    <section className='container mx-auto py-6 lg:px-12 md:px-6 xs:px-2'>
        <div className='w-full h-[300px] rounded-lg overflow-hidden shadow-lg '>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.222222222222!2d77.60666666666667!3d12.971666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b9b9b9b9b9%3A0x3bae14b9b9b9b9b9!2sNorthStar%20Academy!5e0!3m2!1sen!2sin!4v1704816222222!5m2!1sen!2sin"
              width="100%"
               height="100%"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
        </div>
    </section>
  )
}

