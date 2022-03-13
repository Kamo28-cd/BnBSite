import React from 'react'
import SmalllCard from './common/SmalllCard'
import {ExploreData} from './helpers/CommonTypes'

interface ExploreDataProps {
    data?: Array<ExploreData>
}

const Explore:React.FC<ExploreDataProps> = ({data}) => {
  return (
    
        <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            {/* Pull data from server - API endpoints */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data?.map(({img, distance, location})=> (
                    
                    <SmalllCard 
                        key={img}
                        img={img}
                        distance={distance}
                        location={location}
                    />
                ))}

            </div>
            
        </section>

  )
}


export default Explore