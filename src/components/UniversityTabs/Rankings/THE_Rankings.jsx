import React,{useState,useEffect} from 'react'

const THE_Rankings = ({ data }) => {
  let subject = data.THE_Rankings["Subject wise rankings"].split("\r\n\r\n")
  const [ijk, setijk] = useState(0);
  const [arr,setarr] = useState([])
    const setSub = ()=>{
        setijk(1)
        for(let i=0;i<subject.length;i+=2){
            if(i+1<subject.length){
                setarr(oldArr=>[...oldArr,{"1":subject[i],"2":subject[i+1]}])
            }
            else{
                setarr(oldArr=>[...oldArr,{"1":subject[i]}])
        }
        }
        console.log(arr)
    }
    useEffect(()=>{
      if(ijk==0){
        setSub();}
    },[])
  return (
    <div>
      <div className='rounded-lg bg-white-A701 mt-4  w-[1030px] h-[430px] mx-auto'>
        <div className='pt-4 px-4 flex'>
          <img src="/images/img_global_details.svg"></img>
          <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[880px] '>
            <div >View Methodology</div>
            <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
            </svg>
          </div>
        </div>
        <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
        <div className='flex font-semibold'>
          <span className='flex items-center mt-10'><img className='mt-2 ml-6' src="/images/img_trophy.svg" /><div className='pl-4'>Global THE Rank</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 border-orange-400 text-orange-400 border-2 border-[#11142D33] flex justify-center'># {data.THE_Rankings["World University ranking"]}</div>
        </div>
        <div className='flex font-semibold'>
          <div className='mt-8 ml-6 flex'>
            <img src="/images/img_score.svg" ></img><div className='pl-4'>Overall Score</div><div className='pl-4'><div className='h-[15-px] mt-[0.32rem] w-[314px] bg-gray-200  rounded-full '>
              <div className={`w-[100%] h-[9px] bg-orange-500 rounded-3xl`}></div></div></div>
            <div className='pl-6 text-sm'>{data.THE_Rankings["Overall score"]}/100</div>
          </div>
        </div>
        <div className='mt-12 ml-8'>
          Find below Regional Rankings for {data.THE_Rankings.Name}
        </div>
        <div className='flex font-semibold'>
          <span className='flex items-center mt-10 w-80'><img className=' ml-6' src="/images/img_black_point.svg" /><div className='pl-4'>Asia</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 border-[#5307B4] text-[#5307B4] border-2 border-[#11142D33] flex justify-center'># {data.THE_Rankings["Asia college ranking"]}</div>
          <span className='flex items-center mt-10 w-80'><img className=' ml-6' src="/images/img_black_point.svg" /><div className='pl-4'>Europe</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 border-[#5307B4] text-[#5307B4] border-2 border-[#11142D33] flex justify-center'># {data.THE_Rankings["European college ranking"]}</div>
        </div>
        <div className='flex font-semibold'>
          <span className='flex items-center mt-10 w-80'><img className=' ml-6' src="/images/img_black_point.svg" /><div className='pl-4'>USA</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 border-[#5307B4] text-[#5307B4] border-2 border-[#11142D33] flex justify-center'># {data.THE_Rankings["US College ranking"]}</div>
          <span className='flex items-center mt-10 w-80'><img className=' ml-6' src="/images/img_black_point.svg" /><div className='pl-4'>Latin  America</div></span><div className='rounded-full mx-3 px-2 py-1 mt-10 border-[#5307B4] text-[#5307B4] border-2 border-[#11142D33] flex justify-center'># {data.THE_Rankings["Latin America college ranking"]}</div>
        </div>
      </div>
      <div className='rounded-lg mt-4 bg-white-A701 w-[1036px] h-[237px] mx-auto'>
        <div className='pt-4 px-4 flex'>
          <img src="/images/img_more_details.svg"></img>
          <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[880px] '>
            <div >View Methodology</div>
            <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
            </svg>
          </div>
        </div>
        <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
        <div className='flex font-semibold'>
          <div className='mt-8 ml-6 flex'>
            <img src="/images/img_score.svg" ></img><div className='pl-4'>Overall Teaching Score</div><div className='pl-4'><div className='h-[15-px] mt-[0.32rem] w-[314px] bg-gray-200  rounded-full '>
              <div className={`w-[100%] h-[9px] bg-orange-500 rounded-3xl`}></div></div></div>
            <div className='pl-6 text-sm'>{data.THE_Rankings["Teaching score"]}/100</div>
          </div>
        </div>
        <div className='flex font-semibold'>
          <div className='mt-8 ml-6 flex'>
            <img src="/images/img_head.svg" ></img><div className='pl-4'>Overall Research Score</div><div className='pl-4'><div className='h-[15-px] mt-[0.32rem] w-[314px] bg-gray-200  rounded-full '>
              <div className={`w-[100%] h-[9px] bg-orange-500 rounded-3xl`}></div></div></div>
            <div className='pl-6 text-sm'>{data.THE_Rankings["Research score"]}/100</div>
          </div>
        </div>
      </div>
      <div className='rounded-lg mt-4  bg-white-A701 w-[1036px] pb-6 mb-4 mx-auto'>
                <div className='pt-4 px-4 flex'>
                    <img src="/images/img_subject.svg"></img>
                    <div className='flex justify-end mt-1 text-[#5307B4] font-semibold w-[880px] '>
                        <div >View Methodology</div>
                        <svg className='ml-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 1.875L17.5 1.875C17.6658 1.875 17.8247 1.94085 17.9419 2.05806C18.0592 2.17527 18.125 2.33424 18.125 2.5V6.875C18.125 7.22018 17.8452 7.5 17.5 7.5C17.1548 7.5 16.875 7.22018 16.875 6.875V4.00888L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L15.9911 3.125L13.125 3.125C12.7798 3.125 12.5 2.84518 12.5 2.5C12.5 2.15482 12.7798 1.875 13.125 1.875ZM4.375 5.625C3.68464 5.625 3.125 6.18464 3.125 6.875V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H13.125C13.8154 16.875 14.375 16.3154 14.375 15.625V8.75C14.375 8.40482 14.6548 8.125 15 8.125C15.3452 8.125 15.625 8.40482 15.625 8.75V15.625C15.625 17.0057 14.5057 18.125 13.125 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.875C1.875 5.49429 2.99429 4.375 4.375 4.375H11.25C11.5952 4.375 11.875 4.65482 11.875 5C11.875 5.34518 11.5952 5.625 11.25 5.625H4.375Z" fill="#5307B4" />
                        </svg>
                    </div>
                </div>
                <hr className='w-[97%] h-[0.12rem] mt-2 bg-gray-400 mx-auto' />
                <div className=' ml-8 mt-6'>
                Find below the rankings of all the subjects  present in {data.THE_Rankings.Name}
        </div>
        {arr.map((item,idx)=>{return(<div className='flex font-semibold'>
          <div className='flex w-[30rem]'><span className='flex items-center mt-5 w-80'><img className=' ml-6' src="/images/img_black_point.svg" /><div className='pl-4'>{item["1"].split(" ").slice(0,item["1"].split(" ").length-1).join(" ")}</div></span><div className='rounded-full mx-3 px-2 py-1 mt-5 border-[#5307B4] text-[#5307B4] border-2 border-[#11142D33] flex justify-center'># {item["1"].split(" ")[item["1"].split(" ").length-1]}</div></div>
          {item["2"]==undefined?<></>:<div className='flex'><span className='flex items-center mt-5 w-80'><img className='' src="/images/img_black_point.svg" /><div className='pl-4'>{item["2"].split(" ").slice(0,item["2"].split(" ").length-1).join(" ")}</div></span><div className='rounded-full mx-3 px-2 py-1 mt-5 border-[#5307B4] text-[#5307B4] border-2 border-[#11142D33] flex justify-center'># {item["2"].split(" ")[item["1"].split(" ").length-1]}</div></div>}
        </div>)})}
            </div>
    </div>
  )
}

export default THE_Rankings