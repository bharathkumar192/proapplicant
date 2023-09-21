import React, { useEffect ,useState} from 'react'

const ProgramDetails = ({List,details,load}) => {
  useEffect(()=>{
    console.log(details)
  })
  return (
    <div>
      {load?<>
        <div className="load font-inter">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        </div>
      </>:<><>
            <div>{(details[0]["Program Type"]==undefined)?
      <>
      <div>
      <div className='rounded-lg bg-white-A701 mt-[0.56rem] w-[1036px] h-[221px] mx-auto'>
          <div className='pt-4 px-4'>
          <img src="/images/course_details.svg"></img>
          </div>
      <hr className='w-[97%] h-[0.12rem] mt-[0.56rem] bg-gray-400 mx-auto' />
        <div className='text-[#5307B4] text-lg font-semibold ml-8 mt-[1.81rem]'>  
        You Have not selected the course
        </div>
      </div>
      </div>
      </>:<>
      <div className='rounded-lg bg-white-A701 mt-[0.56rem] w-[1036px] h-[221px] mx-auto'>
          <div className='pt-4 px-4'>
          <img src="/images/course_details.svg"></img>
          </div>
      <hr className='w-[97%] h-[0.12rem] mt-[0.56rem] bg-gray-400 mx-auto' />
        <div className='text-[#5307B4] text-lg font-semibold ml-8 mt-[1.81rem]'>  
        {details[0]["Course Name"]}
        </div>
        <div className='flex divide-x-2 mt-[1.06rem] ml-6'>
          <div className='ml-2 mr-4 flex text-sm text-[#11142D]'>
          <svg className='mr-3' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_205_1138)">
<path d="M15.0002 6.00005C15.0023 5.02869 14.7685 4.07134 14.319 3.21026C13.8695 2.34918 13.2176 1.61011 12.4194 1.05655C11.6212 0.503 10.7006 0.151515 9.73657 0.0322996C8.77255 -0.0869158 7.794 0.0297029 6.88501 0.372136C5.97601 0.714568 5.16374 1.27258 4.51799 1.99821C3.87224 2.72385 3.41233 3.59542 3.17776 4.53803C2.94319 5.48064 2.94098 6.46611 3.17132 7.40976C3.40167 8.35341 3.85768 9.22703 4.50017 9.95555V16.125C4.50016 16.4783 4.59993 16.8243 4.78797 17.1233C4.97601 17.4223 5.24468 17.6621 5.56304 17.8151C5.8814 17.9681 6.2365 18.028 6.58744 17.988C6.93838 17.948 7.27089 17.8097 7.54667 17.589L8.76617 16.614C8.83262 16.561 8.91513 16.5321 9.00017 16.5321C9.08521 16.5321 9.16772 16.561 9.23417 16.614L10.4537 17.589C10.7295 17.8097 11.062 17.948 11.4129 17.988C11.7638 18.028 12.1189 17.9681 12.4373 17.8151C12.7557 17.6621 13.0243 17.4223 13.2124 17.1233C13.4004 16.8243 13.5002 16.4783 13.5002 16.125V9.95555C14.4664 8.86445 14.9999 7.45748 15.0002 6.00005ZM9.00017 1.50005C9.89018 1.50005 10.7602 1.76397 11.5002 2.25844C12.2403 2.7529 12.817 3.45571 13.1576 4.27797C13.4982 5.10024 13.5873 6.00504 13.4137 6.87796C13.2401 7.75087 12.8115 8.55269 12.1821 9.18203C11.5528 9.81137 10.751 10.2399 9.87808 10.4136C9.00516 10.5872 8.10036 10.4981 7.27809 10.1575C6.45583 9.81691 5.75302 9.24014 5.25856 8.50012C4.76409 7.7601 4.50017 6.89007 4.50017 6.00005C4.50136 4.80694 4.97585 3.66304 5.8195 2.81939C6.66316 1.97573 7.80706 1.50124 9.00017 1.50005ZM11.7879 16.4611C11.7245 16.4925 11.6533 16.505 11.5829 16.497C11.5125 16.489 11.446 16.4609 11.3912 16.416L10.1717 15.441C9.83975 15.1737 9.42637 15.0279 9.00017 15.0279C8.57397 15.0279 8.16058 15.1737 7.82867 15.441L6.60992 16.416C6.55489 16.4602 6.48851 16.488 6.41841 16.4961C6.34831 16.5043 6.27734 16.4924 6.21365 16.4621C6.14996 16.4317 6.09614 16.3839 6.05838 16.3243C6.02061 16.2647 6.00044 16.1956 6.00017 16.125V11.1885C6.91065 11.72 7.94595 12 9.00017 12C10.0544 12 11.0897 11.72 12.0002 11.1885V16.125C12.001 16.1956 11.9814 16.2648 11.9437 16.3244C11.9061 16.3841 11.852 16.4315 11.7879 16.4611Z" fill="#11142D"/>
</g>
<defs>
<clipPath id="clip0_205_1138">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
        </svg>
        {details[0]["Program Type"]}
          </div>
          <div className='pl-4 flex text-sm text-[#11142D]'>
          <svg width="16" className='mr-3' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_205_1147)">
<path d="M11.3334 0H4.66677C3.78304 0.00105857 2.93581 0.352588 2.31091 0.97748C1.68602 1.60237 1.33449 2.4496 1.33344 3.33333V13.3333C1.33344 14.0406 1.61439 14.7189 2.11448 15.219C2.61458 15.719 3.29286 16 4.0001 16H11.3334C12.2172 15.9989 13.0644 15.6474 13.6893 15.0225C14.3142 14.3976 14.6657 13.5504 14.6668 12.6667V3.33333C14.6657 2.4496 14.3142 1.60237 13.6893 0.97748C13.0644 0.352588 12.2172 0.00105857 11.3334 0V0ZM13.3334 3.33333V10.6667H5.33344V1.33333H11.3334C11.8639 1.33333 12.3726 1.54405 12.7476 1.91912C13.1227 2.29419 13.3334 2.8029 13.3334 3.33333ZM4.0001 1.448V10.6667C3.53185 10.6663 3.07184 10.7898 2.66677 11.0247V3.33333C2.66683 2.91979 2.79508 2.51644 3.03386 2.1788C3.27264 1.84116 3.61021 1.58585 4.0001 1.448ZM11.3334 14.6667H4.0001C3.64648 14.6667 3.30734 14.5262 3.05729 14.2761C2.80724 14.0261 2.66677 13.687 2.66677 13.3333C2.66677 12.9797 2.80724 12.6406 3.05729 12.3905C3.30734 12.1405 3.64648 12 4.0001 12H13.3334V12.6667C13.3334 13.1971 13.1227 13.7058 12.7476 14.0809C12.3726 14.456 11.8639 14.6667 11.3334 14.6667Z" fill="#11142D"/>
</g>
<defs>
<clipPath id="clip0_205_1147">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
          </svg>

        {details[0]["College name"]}
          </div>
        </div>
      </div>
      <div className='rounded-lg mt-[0.56rem] bg-white-A701 w-[64.75rem] h-[16.875rem] mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <img src="/images/img_course_d.svg"></img>
                    <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[880px] '>
                        <div >Official website</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className='mt-[1.5rem] flex'>
                  <div className='ml-[2rem] w-[20.565rem]'>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Degree Type</div>
                    <div className='text-[#11142DEB] font-medium text-[0.9375rem] leading-[1.875rem] '>{details[0]["Degree type"]}</div>
                  </div>
                  <div className=''>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Program Duration</div>
                    <div className='text-[#11142DEB] font-medium text-[0.9375rem] leading-[1.875rem] '>{details[0]["Program duration"]}</div>
                  </div>
                </div>
                <div className='mt-[1.94rem] flex'>
                  <div className='ml-[2rem] w-[20.565rem]'>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Course Credits</div>
                    <div className='text-[#11142DEB] font-medium text-[0.9375rem] leading-[1.875rem] '>{details[0]["Course credits"]}</div>
                  </div>
                  <div className=''>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Semesters</div>
                    <div className='text-[#11142DEB] font-medium text-[0.9375rem] leading-[1.875rem] '>{details[0]["Degree type"]}</div>
                  </div>
                </div>
            </div>

      <div className='rounded-lg mt-[0.56rem] bg-white-A701 w-[64.75rem] h-[11.625rem] mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <img src="/images/img_cost.svg"></img>
                    <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[930px] '>
                        <div >Official fees page</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className='mt-[1.5rem] flex'>
                  <div className='ml-[2rem] w-[20.565rem]'>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Academic Annual Fee</div>
                    <div className='text-[#11142DEB] font-semibold text-[1.3125rem] leading-[1.875rem] '>${details[0]["Annual tuition fees"]}<span className='lowercase'>/year</span></div>
                  </div>
                  <div className=''>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Total</div>
                    <div className='text-[#11142DEB] font-semibold text-[1.3125rem] leading-[1.875rem] '>${details[0]["Total tuition fees"]}</div>
                  </div>
                </div>
            </div>
            <div className='rounded-lg mt-[0.56rem] bg-white-A701 w-[64.75rem] h-[14.3125rem] mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <img src="/images/img_admission.svg"></img>
                    <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[880px] '>
                        <div >Official page</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className='mt-[1.5rem] flex'>
                  <div className='ml-[2rem] w-[20.565rem]'>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Application fee</div>
                    <div className='text-[#11142DEB] font-semibold text-[1.3125rem] leading-[1.875rem] '>${details[0]["Application Fee"]}</div>
                  </div>
                  <div className=''>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Application Deadline</div>
                    <div className='text-[#11142DEB] font-semibold text-[1.3125rem] leading-[1.875rem] '><span>{details[0]["Application Deadline"]}</span></div>
                  </div>
                </div>
            </div>
            <div className='rounded-lg mt-[0.56rem] bg-white-A701 mb-6 w-[64.75rem] h-[24.6875rem] mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <img src="/images/img_preq.svg"></img>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto ' />
                <div className='mt-[1.5rem] flex'>
                  <div className='ml-[2rem] bg-white-A701'>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Test score requirements</div>
                    <div className='mt-[0.88rem] rounded-lg bg-[#d9d9d92d] w-[23.8125rem] h-[8.25rem] leading-[1.875rem]'>
                      <div className='opacity-100 text-[#11142d87] ml-3 pt-2 text-[0.875rem]  leading-[1.875rem]'>Minimum Test scores requirement</div>
                      <div className='ml-3 pt-2 flex'><div className='w-[20.44rem] font-semibold'>IELTS</div><div>{details[0]["English Score Requirements"]!==undefined?<>{details[0]["English Score Requirements"].split("\r\n\r\n")[0].split(" ")[1]}</>:<></>}</div></div>
                      <hr className='h-[0.03125rem] mx-auto w-[21.875rem] bg-[#AAAFDD6B] border-[#AAAFDD6B] my-[0.6rem]'/>
                      <div className='ml-3 flex'><div className='w-[20.44rem] font-semibold'>TOEFL</div>
                  </div>
                    <div className='mt-[2rem] rounded-lg bg-[#d9d9d92d] w-[23.8125rem] h-[5.75rem] leading-[1.875rem]'>
                      <div className='opacity-100 text-[#11142d87] ml-3 pt-2 text-[0.875rem]  leading-[1.875rem]'>Minimum aptitude score required</div>
                      <div className='ml-3 pt-2 flex'><div className='w-[18.44rem] font-semibold'>{details[0]["Aptitude Score Requirements"].split(" ")[0].replace(":","")}</div><div>{details[0]["Aptitude Score Requirements"].split(" ")[1]}</div></div>
                      </div>

                </div>
            </div>
      <div>
      </div>
      <div className='ml-[3.94rem]'>
                    <div className='text-gray-500 text-[0.875rem] font-medium leading-[1.875rem] '>Application Pre-requisites</div>
                      {details[0]["Application Pre-requisites"].split("\r\n\r\n").map((i)=><div className='flex py-2 text-[0.875rem] opacity-[0.8]'><img src="/images/img_black_point.svg" width={4} height={4} className='my-2 mr-2'></img>{i}</div>)}
                  </div>
      </div></div>
      </>}
    </div>
      </>
    </>}</div>
  )
}

export default ProgramDetails