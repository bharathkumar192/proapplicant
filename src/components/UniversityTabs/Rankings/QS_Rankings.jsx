import React from 'react'

const QS_Rankings = ({ data }) => {
    let sizeArr =  {"XL":"Extra Large","L":"Large","M":"Medium","S":"Small"}
    return (
        <div className='py-4'>
            <div className='rounded-lg bg-white-A701 w-[1036px] h-[237px] md:h-full mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <div className='md:w-[22%]'>
                    <img src="/images/img_yearly_details.svg"></img>
                    </div>
                    <div className='flex justify-end mt-1 md:w-[20%] md:justify-start text-[#5307B4] font-semibold w-[880px] '>
                        <div >View Methodology</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className='flex md:block font-semibold '>
                    <span className='flex md:mt-6 items-center  mt-10'><img className='mt-2 md:mt-0 ml-6' src="/images/img_trophy.svg" /><div className='pl-4 py-2'>QS World University 2024 ranking</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 md:my-2 md:mx-[2rem] border-orange-400 text-orange-400 border-2 border-[#11142D33] flex justify-center md:w-[5rem] '># {data.QS_Rankings["2024 RANK"]}</div>
                    <span className='flex md:mt-6 items-center mt-10'><img className='mt-2 md:mt-0 ml-6' src="/images/img_trophy.svg" /><div className='pl-4 py-2'>QS World University 2023 ranking</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 md:my-2 md:mx-[2rem] border-orange-400 text-orange-400 border-2 border-[#11142D33] flex justify-center md:w-[5rem] '># {data.QS_Rankings["2023 RANK"]}</div>
                </div>
                <div className='flex font-semibold'>
                    <div className='mt-8 md:mt-6 md:mb-4 ml-6 flex md:block'>
                        <div className='flex'><img src="/images/img_score.svg" ></img>
                        <div className='pl-4'>Overall Score</div></div>
                        <div className='pl-4'>
                            <div className='flex md:mt-3'>
                            <div className='h-[9px] mt-[0.32rem] w-[314px] md:w-[10rem] bg-gray-200  rounded-full md:mr-3'>
                            <div className={`w-[100%] md:w-[100%] h-[9px] bg-orange-500 rounded-3xl`}>
                            </div>
                            </div>
                            <div className='pl-6 md:pl-0 text-sm'>{data.QS_Rankings["Overall SCORE"]}/100</div></div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='rounded-lg mt-4 bg-white-A701 w-[1036px] md:w-[95%] h-[237px] mx-auto md:hidden'>
                <div className='pt-4 px-4 flex'>
                    <div className=''>
                    <img src="/images/img_more_details.svg"></img>
                    </div>
                    <div className='flex justify-end mt-1 md:w-[20%] md:justify-end text-[#5307B4] font-semibold w-[880px] '>
                        <div >View Methodology</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className='flex font-semibold'>
                    <span className='flex items-center mt-10 w-52'><img className='mt-2 ml-6 mr-4' src="/images/img_size.svg" /><div className=''>Collage Size</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 flex justify-center'>{Object.keys(sizeArr).map((item)=>{if(item==data.QS_Rankings.SIZE){return(<div className='mx-1 bg-[#DAFF61] py-[0.4rem] px-2 text-[1.1rem]'>{sizeArr[item]}</div>)}else{return(<div className='mx-1 py-2 px-1 text-gray-400 '>{sizeArr[item]}</div>)}})}</div>
                    <span className='flex items-center mt-10 w-32'><img className='mt-2 ml-6 mr-4' src="/images/img_age_c.svg" /><div className=''>Age</div></span><div className='border-2 border-gray-400 px-1 pt-1 mt-12 ml-6'>{data.QS_Rankings.STATUS}</div>
                </div>
                <div className='flex font-semibold'>
                    <div className=' ml-6 flex '>
                        <span className='w-52 flex'><img src="/images/img_book.svg" className='mt-8'></img><div className='pl-4 mt-8'>Subject Range</div></span>
                        <div className='border-2 border-gray-400 px-1 py-1 mt-7'>{data.QS_Rankings.FOCUS}</div>
                    </div>
                </div>
            </div>
            <div className='rounded-lg mt-4 bg-white-A701 w-[1036px] h-[281px] md:h-full mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <div className='md:w-[22%]'>
                    <img src="/images/img_research_details.svg"></img>
                    </div>
                    <div className='flex justify-end mt-1 md:w-[20%] md:justify-start text-[#5307B4] font-semibold w-[880px] '>
                        <div >View Methodology</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className='flex font-semibold mt-4'>
                    <div className=' ml-6 flex md:block'>
                        <div className='flex'><img src="/images/img_head.svg" className='mt-8'></img><div className='w-[20.5rem] ml-4 mt-8'>Research Intensity</div></div>
                        <div className='border-2 border-gray-400 px-1 pt-1 ml-6 md:ml-8 md:w-[10%] mt-7'>{data.QS_Rankings["RES."]}</div>
                    </div>
                </div>
                <div className='flex font-semibold'>
                    <div className=' ml-6 flex md:block'>
                        <span className='w-96 flex'><div className='flex'><img src="/images/img_head.svg" className='mt-8'></img><div className='pl-4 mt-8'>International Research Network score</div></div></span>
                        <div className='flex'>
                        <div className='mt-8'><div className='md:w-[10rem] md:ml-4 h-[15-px] mt-[0.32rem] w-[314px] bg-gray-200  rounded-full '>
                            <div className={`w-[100%] h-[9px] bg-orange-500 rounded-3xl`}></div></div></div>
                            <div className='pl-6 text-sm mt-8 md:ml-2'>{data.QS_Rankings["International Research Network SCORE"]}/100</div>
                        </div>
                    </div>
                </div>
                <div className='flex md:block font-semibold'>
                    <span className='flex items-center w-96'><img className='mt-8 ml-6' src="/images/img_bulb.svg" /><div className='pl-4 mt-8'>QS World University 2024 ranking</div></span><div className='rounded-full mx-4 px-2 py-1 mt-8 border-orange-400 text-orange-400 border-2 md:w-[10%] md:ml-8 border-[#11142D33] flex justify-center'># {data.QS_Rankings["International Research Network RANK"]}</div>
                </div>
            </div>
            <div className='rounded-lg mt-4 bg-white-A701 w-[1036px] md:h-full h-[210px] mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <div className='md:w-[22%]'>
                    <img src="/images/img_bag.svg"></img>
                    </div>
                    <div className='flex justify-end mt-1 md:w-[20%] md:justify-start text-[#5307B4] font-semibold w-[880px] '>
                        <div >View Methodology</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem]  mt-2 bg-gray-400 mx-auto' />
                <div className='flex font-semibold'>
                    <div className=' ml-6 flex md:block'>
                        <span className='w-96 flex'><div className='flex'><img src="/images/img_bage.svg" className='mt-8'></img><div className='pl-4 mt-8'>International Research Network score</div></div></span>
                        <div className='flex'>
                        <div className='mt-8'>
                            <div className='h-[9px] mt-[0.32rem] md:w-[10rem] w-[314px] bg-gray-200 md:ml-3  rounded-full '>
                            <div className={`w-[100%] h-[9px] bg-orange-500 rounded-3xl`}>
                                </div></div>
                                </div>
                        <div className='pl-6 text-sm mt-8'>{data.QS_Rankings["Employer Reputation SCORE"]}/100</div>
                        </div>
                    </div>
                </div>
                <div className='flex md:block font-semibold'>
                    <span className='flex items-center w-96'><img className='mt-8 ml-6' src="/images/img_bulb.svg" /><div className='pl-4 mt-8'>International Research Network ranking</div></span><div className='rounded-full mx-3 px-2 md:w-[8%] md:ml-8 py-1 mt-8 border-orange-400 text-orange-400 border-2 border-[#11142D33] flex justify-center'># {data.QS_Rankings["Employer Reputation RANK"]}</div>
                </div>
                
            </div>

        </div>
    )
}

export default QS_Rankings