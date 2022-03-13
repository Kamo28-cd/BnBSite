import React from 'react'
import MediumCard from './common/MediumCard'
import {LiveAnywhereData} from './helpers/CommonTypes'

interface LiveAnywhereDataProps {
    data?: Array<LiveAnywhereData>
}

const LiveAnywhere:React.FC<LiveAnywhereDataProps> = ({data}) => {
  return (
        <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
            {/* Pull data from server - API endpoints */}
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                {data?.map(({img, title})=> (
                    
                    <MediumCard 
                        key={title}
                        img={img}
                        title={title}
                        
                    />
                ))}

            </div>
            
        </section>
  )
}

export default LiveAnywhere