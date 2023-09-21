import React from 'react'

const Overview = ({data,Name}) => {
  return (
    <div>
      <div>
        <div>
        <div className='rounded-lg bg-white-A701 w-[64.75rem] h-[17.9375rem] mx-auto'>
          <div className='pt-8 px-6'>
            <img src="/images/img_overview.svg"></img>
          </div>
        <hr className='w-[97%] h-[0.12rem] mt-4 bg-gray-400 mx-auto' />
        <div className='font-semibold mx-6 mt-[1.87rem]'>
        {Name} has been always great with numbers . We have given details information below :
        </div>
        <div className='flex ml-3'>
          <div className='flex mx-4'>
            <div className='bg-[#174AFB78] mt-[1.94rem] rounded-xl w-[11.375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[11.375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Graduation  Rate</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'></div>
            </div>
          </div>
          <div className='flex mx-4 '>
            <div className='bg-[#174AFB78] mt-[1.94rem] rounded-xl w-[11.375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[11.375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Collage <span className='lowercase'>Acceptance Rate</span></div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-lg bg-white-A701 mt-4  w-[1030px] h-[27.3125rem] mx-auto'>
        <div className='pt-4 px-4 flex'>
          <img src="/images/img_univ_details.svg"></img>
          <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[880px] '>
            <div >View Methodology</div>
            <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
            </svg>
          </div>
        </div>
        <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
        <div className='flex ml-3'>
          <div className='flex mx-4'>
            <div className='bg-[#6218C033] mt-[1.94rem] rounded-xl w-[9.9375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[9.9375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Total Strength</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["Total no of students"]}</div>
            </div>
          </div>
          <div className='flex mx-4'>
            <div className='bg-[#6218C033] mt-[1.94rem] rounded-xl w-[9.9375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[9.9375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Student Faculty Ratio</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.THE_Rankings["No of students per staff"]}</div>
            </div>
          </div>
          <div className='flex mx-4'>
            <div className='bg-[#6218C033] mt-[1.94rem] rounded-xl w-[9.9375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[9.9375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Male Female Ratio</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.THE_Rankings["Student ratio Females to Males"]}</div>
            </div>
          </div>
          <div className='flex mx-4'>
            <div className='bg-[#6218C033] mt-[1.94rem] rounded-xl w-[9.9375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[9.9375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Number <span className='lowercase'>of</span> UG Students</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["No of new UG students"]}</div>
            </div>
          </div>
        </div>
        <div className='flex ml-3'>
          <div className='flex mx-4'>
            <div className='bg-[#6218C033] mt-[1.94rem] rounded-xl w-[9.9375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[9.9375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-3'>Total <span className='lowercase'>new</span> Graduate Students</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["No of new Masters students"]}</div>
            </div>
          </div>
          <div className='flex mx-4'>
            <div className='bg-[#6218C033] mt-[1.94rem] rounded-xl w-[9.9375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[9.9375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Total <span className='lowercase'>new</span> PHD Students</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["No of new Dr Students"]}</div>
            </div>
          </div>
        </div>
        <div className='flex ml-3'>
          <div className='flex mx-4'>
            <div className='bg-[#1A971178] mt-[1.94rem] rounded-xl w-[11.375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[11.375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-3'>Total Masters Degreed awarded</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["No of Masters degrees awarded"]}</div>
            </div>
          </div>
          <div className='flex mx-4'>
            <div className='bg-[#1A971178] mt-[1.94rem] rounded-xl w-[11.375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[11.375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Total PHD Degreed awarded</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["No of Dr degrees awarded"]}</div>
            </div>
          </div>
          <div className='flex mx-4'>
            <div className='bg-[#1A971178] mt-[1.94rem] rounded-xl w-[11.375rem] h-[4.9375rem]'></div>
            <div className=' mt-[1.6rem] w-[11.375rem] rounded-xl border border-[#11142D1F] absolute z-20 bg-white-A701 ml-1 h-[4.9375rem]'>
              <div className='text-[0.625rem] font-semibold mt-4 pl-4'>Total UG Degreed awarded</div>
              <div className='text-xl font-semibold mt-4 pl-4 text-[#174AFB]'>{data.USN_Rankings["No of UG degrees awarded"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
    </div>
  )
}

export default Overview