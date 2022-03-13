import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Explore from '../components/Explore'
import {ExploreData, LiveAnywhereData} from '../components/helpers/CommonTypes'
import LiveAnywhere from '../components/LiveAnywhere'
import LargeCard from '../components/common/LargeCard'
import Footer from '../components/Footer'

interface HomePageProps {
  exploreData: Array<ExploreData>
  cardsData: Array<LiveAnywhereData>
}
const Home:React.FC<HomePageProps> = ({exploreData, cardsData}) =>{
  const largeCardProps = {
    img:'https://links.papareact.com/4cj',
    title:'The Great Outdoors',
    description:'Wishlists curated by BubleBnb',
    buttonText:'Get Inspired'
  }
  return (
    <div className="">
      <Head>
        <title>Buble Bed & Breakfast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <Explore data={exploreData} />
        <LiveAnywhere data={cardsData} />
        <LargeCard {...largeCardProps}/>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json()).catch((err) => Promise.reject(err))
    
    //const exploreData = useFetch('https://links.papareact.com/pyp')
    const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json()).catch((err)=> Promise.reject(err))
    return {
      props: {
        //exploreData: exploreData also works
        exploreData,
        cardsData
      }
    }
}

export default Home