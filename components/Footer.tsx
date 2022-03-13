import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p className='cursor-pointer'>How it works</p>
            <p className='cursor-pointer'>Newsroom</p>
            <p className='cursor-pointer'>Investors</p>
            <p className='cursor-pointer'>BubleBnB Plus</p>
            <p className='cursor-pointer'>BubleBnB Lux</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p className='cursor-pointer'>Accessibility</p>
            <p className='cursor-pointer'>This is not a real site yet</p>
            <p className='cursor-pointer'>Great Demo loading</p>
            <p className='cursor-pointer'>Referrals accepted</p>
            <p className='cursor-pointer'>New Draft Site</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p className='cursor-pointer'>Become a Host</p>
            <p className='cursor-pointer'>List of Hosts</p>
            <p className='cursor-pointer'>Join our Newsletter</p>
            <p className='cursor-pointer'>Host News</p>
            <p className='cursor-pointer'>Host Schedule</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p className='cursor-pointer'>Help Center</p>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Trust & Safety</p>
            <p className='cursor-pointer'>Terms of Service</p>
            <p className='cursor-pointer'>Contact Us</p>
        </div>
        
        
    </div>
  )
}

export default Footer