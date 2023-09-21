import React, { useContext } from 'react'
import Carousel from 'react-elastic-carousel';
import './../Carousel.scss'
const Default = ({modalref}) => {
    return (
        <div className='flex justify-center'>
            <div className='mt-[0.4rem] bg-white-A701 w-[82.0625rem] h-[106.75rem] rounded-lg'>
                <div className='text-[1.3125rem] leading-[3.375rem] opacity-[0.45] pl-[5.37rem] pt-[2.25rem]'>All your search results will be appearing here....</div>
                <div className='flex'>
                    <div className='w-[42.0625rem] pl-[6.81rem]'>
                        <div className='text-[1.9375rem] leading-[3.375rem] text-[#5307B4] pt-[2.12rem]'>Here’s <span className='lowercase'>how the tool works</span></div>
                        <div className=' pt-[2.12rem] leading-[2.03125rem] text-[1.1875rem] font-normal lowercase text-justify text-[#11142DC2]'>
                            <span className='capitalize'>The</span> primary concern of every aspiring entrepreneur is to keep their startup
                            costs as low as possible. <span className='capitalize'>Although</span> there are several unavoidable costs an online
                            business have to pay for, you can minimize some operational costs with the
                            assistance of the best tools</div>
                        <ul className='pt-[0.88rem] leading-[2.03125rem] text-[1.1875rem] font-normal lowercase text-justify text-[#11142DC2]'>
                            <li className='flex py-[0.94rem]'><div className='pt-[0.6rem] pr-4'><object data="/images/img_black_point.svg"></object></div><div className=''><span className='capitalize'>A</span> simple declarative syntax means you write less code. <span className='capitalize'>Less</span> code means your codebase is easier to read and maintain.</div></li>
                            <li className='flex py-[0.94rem]'><div className='pt-[0.6rem] pr-4'><object data="/images/img_black_point.svg"></object></div><div className=''><span className='capitalize'>A</span> simple declarative syntax means you write less code. <span className='capitalize'>Less</span> code means your codebase is easier to read and maintain.</div></li>
                            <li className='flex py-[0.94rem]'><div className='pt-[0.6rem] pr-4'><object data="/images/img_black_point.svg"></object></div><div className=''><span className='capitalize'>A</span> simple declarative syntax means you write less code. </div></li>
                        </ul>
                    </div>
                    <div className='pt-[1rem] pl-[6rem]'>
                        <object data="/images/img_default_page.svg" className=''></object>
                    </div>
                </div>
                <div className=' pl-[6.81rem] '>
                    <div className='text-[1.9375rem] leading-[3.375rem] text-[#5307B4] pt-[2.12rem]'>We <span className='lowercase'> provide you tools to make your journey easier !</span></div>
                    <div className='flex pt-[3.75rem]'>
                        <div className='w-[21.4375rem]  mr-[2.12rem] h-[17.75rem] border-[1px] border-[#11142d1f]  text-black-900 transition duration-200 hover:bg-gradient-to-tl from-[#5307B4] via-[#410590fc] to-[#491292c5] rounded-[0.5rem] hover:text-white-A701 ' onClick={()=>{modalref.current.classList.remove("hidden")}}>
                            <div className='pl-[1.75rem] pt-[2.44rem]'>
                                <div className='text-[1.8125rem] leading-[2.03125rem] font-medium head'>
                                    Name <span className='lowercase'>of</span> Tool 2
                                </div>
                                <div className='text-[0.8125rem] leading-[1.28125rem] font-normal pt-[0.75rem] lowercase w-[16.75rem] h-[5.25rem]'>
                                    <span className='capitalize'>It’s</span> a fact that the first step is always the toughest. <span className='capitalize'>The</span> ideation phase of any startup is crucial but once you know what industry you wish to,
                                </div>
                                <div className='pt-[3rem] text-[0.6875rem] leading-[1.28125rem]'>
                                    <button className='w-[6.9375rem] h-[2.125rem] text-center text-white-A701 rounded-[0.1875rem] bg-gradient-to-r from-[#7a3bcd]  via-[#6211cc] to-[#7a3bcd]'>Try Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-[21.4375rem]  mr-[2.12rem] h-[17.75rem] border-[1px] border-[#11142d1f]  text-black-900 transition duration-200 hover:bg-gradient-to-tl from-[#5307B4] via-[#410590fc] to-[#491292c5] rounded-[0.5rem] hover:text-white-A701 ' onClick={()=>{modalref.current.classList.remove("hidden")}}>
                            <div className='pl-[1.75rem] pt-[2.44rem]'>
                                <div className='text-[1.8125rem] leading-[2.03125rem] font-medium head'>
                                    Name <span className='lowercase'>of</span> Tool 4
                                </div>
                                <div className='text-[0.8125rem] leading-[1.28125rem] font-normal pt-[0.75rem] lowercase w-[16.75rem] h-[5.25rem]'>
                                    <span className='capitalize'>It’s</span> a fact that the first step is always the toughest. <span className='capitalize'>The</span> ideation phase of any startup is crucial but once you know what industry you wish to,
                                </div>
                                <div className='pt-[3rem] text-[0.6875rem] leading-[1.28125rem]'>
                                    <button className='w-[6.9375rem] h-[2.125rem] text-center text-white-A701 rounded-[0.1875rem] bg-gradient-to-r from-[#7a3bcd] via-[#5307B4]  to-[#7a3bcd]'>Try Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-[21.4375rem]  mr-[2.12rem] h-[17.75rem] border-[1px] border-[#11142d1f]  text-black-900 transition duration-200 hover:bg-gradient-to-tl from-[#5307B4] via-[#410590fc] to-[#491292c5] rounded-[0.5rem] hover:text-white-A701 ' onClick={()=>{modalref.current.classList.remove("hidden")}}>
                            <div className='pl-[1.75rem] pt-[2.44rem]'>
                                <div className='text-[1.8125rem] leading-[2.03125rem] font-medium head'>
                                    Name <span className='lowercase'>of</span> Tool 4
                                </div>
                                <div className='text-[0.8125rem] leading-[1.28125rem] font-normal pt-[0.75rem] lowercase w-[16.75rem] h-[5.25rem]'>
                                    <span className='capitalize'>It’s</span> a fact that the first step is always the toughest. <span className='capitalize'>The</span> ideation phase of any startup is crucial but once you know what industry you wish to,
                                </div>
                                <div className='pt-[3rem] text-[0.6875rem] leading-[1.28125rem]'>
                                    <button className='w-[6.9375rem] h-[2.125rem] text-center text-white-A701 rounded-[0.1875rem] bg-gradient-to-r from-[#7a3bcd] via-[#5307B4]  to-[#7a3bcd]'>Try Now</button>
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>
                <hr className='w-[74.75rem] h-[0.0625rem] bg-[#11142DEB] border-[#11142DEB] opacity-[0.2] mx-auto mt-[3.94rem]' />
                <div className='flex justify-center'>
                    <div className='text-[1.9375rem] leading-[3.375rem] text-[#5307B4] pt-[2.12rem]'>Take<span className='lowercase'> a look at what other students are saying</span></div>
                </div>
                <div className='flex justify-center pt-[0.69rem] lowercase text-[#11142DD4] opacity-[0.7] text-[1rem]'>
                    <span className="capitalize mr-1"> A </span> simple declarative syntax means you write less code. <span className="capitalize mr-1"> Less</span>  code means your codebase is
                </div>
                <div className='lowercase text-center mt-1 text-[#11142DD4] opacity-[0.7] text-[1rem]'>easier to read and maintain</div>
                <div className='pt-[1.8rem] flex justify-center car'>
                    <Carousel className='w-full' enableSwipe = {true}>
                    <div className='flex mb-4'>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        
                    </div>
                    <div className='flex mb-4'>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        
                    </div>
                    <div className='flex mb-4'>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        <div className='w-[24rem] h-[16.9375rem] rounded-lg border-[1px] mx-[0.5rem] border-[#1142] '>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] font-medium'>
                        <span className='capitalize'>Finsweet</span> has been a wonderful partner to work with. <span className="capitalize">I</span> have been a customer now for the past few months now and <span className="capitalize">I</span> have had nothing but positive experiences!
                        </div>
                        <div className='ml-4'>
                        <object data="/images/img_test.svg" ></object>
                        </div>
                        </div>
                        
                    </div>

                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Default