import React from 'react'
import Container from '../Components/Container'
import city_bg from "../assets/city_bg.jpg";
import hotels from "../assets/hotels.svg";
import Button from '../Components/Button';
import apple from "../assets/apple.svg";
import android from "../assets/android.svg";

const MobileApp = () => {
  return (
    <section  className=" h-[720px] w-full bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${city_bg})` }}>
        <Container>
            <div className='flex justify-between'>
                <div className='py-20'>
                    <img src={hotels} alt="Hotels" />
                </div>
                <div className='py-[222px] text-white'>
                    <h1 className='text-[36px] font-volkhov font-bold leading-auto  mb-1.5'>
                        Smart City Tour Mobile App
                    </h1>
                    <h3 className='text-[16px] font-extrabold leading-auto  mb-5.5 '>
                        Available on IOS & Android
                    </h3>
                    <p className='text-[16px] font-semibold max-w-[505px] leading-auto max-w-[400px] mb-10 '>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <div className='flex gap-5'>
                        <Button img={apple} className={"px-[42px]"} title={"Download For IOS"} />
                        <Button img={android} title={"Download For Android"} className={"px-[42px]"} />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MobileApp