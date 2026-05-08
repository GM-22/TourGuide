import React from 'react'
import Container from '../Components/Container'
import SectionHeader from '../Components/SectionHeader'
import LeftArrow from '../Components/Icons/LeftArrow'
import RIghtArrow from '../Components/Icons/RIghtArrow'
import { Cards } from './Explore'
import Alaksa1 from "../assets/Alaksa1.jpg";
import Alaksa2 from "../assets/Alaksa2.jpg";
import Alaksa3 from "../assets/Alaksa3.jpg";
import Alaksa4 from "../assets/Alaksa4.svg";

const Featured = () => {
  return (
   <section className=' pt-18.5 pb-20'>
        <Container>
            <div className=' mb-[58px] flex justify-between '>
                <div className=' max-w-[538px] '>
                    <SectionHeader title={"Featured Destinations"} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit'} />

                </div>
                <div className=' flex '>
                    <LeftArrow className='  cursor-pointer ' />
                    <RIghtArrow className=' cursor-pointer ' />
                </div>

            </div>
            <div className='flex gap-7.5'>
                <Cards img={Alaksa1} title={"Alaksa 1"} />
                <Cards img={Alaksa2} title={"Alaksa 2"} />
                <Cards img={Alaksa3} title={"Alaksa 3"} />
                <Cards img={Alaksa4} title={"Alaksa 4"} />
            </div>
        </Container>
   </section>
  )
}



export default Featured