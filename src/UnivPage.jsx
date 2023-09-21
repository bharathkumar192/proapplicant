import React, { useState } from 'react'
import Nav1 from 'components/Nav1';
import { useEffect, useRef } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
import { useNavigate, Link, useParams } from 'react-router-dom';
import Overview from 'components/UniversityTabs/Overview';
import Geography from 'components/UniversityTabs/Geography';
import Rankings from 'components/UniversityTabs/Rankings';
import ProgramDetails from 'components/UniversityTabs/ProgramDetails';
import StudentDetails from 'components/UniversityTabs/StudentDetails';
import Default from 'components/UniversityTabs/Default';
const Univ_Data = () => {
  const [details, setdetails] = useState([{"Program Type":undefined}]);
  const modalref = useRef("")
  const [searchKeyword, setsearchKeyword] = useState({ search: "" ,course:""});
  const { univ_name } = useParams();
  const [UniversityList, setUniversityList] = useState([]);
  const [Univ_Data, setUniv_Data] = useState({ "QS_Rankings": "", "ProgramDetails": [], "Geography": "", "Weather": "", "USN_Rankings": "" ,"THE_Rankings": "" })
  const searchRef = useRef();
  const [Couse, setCouse] = useState([]);
  let c1 = []
  const hist = useNavigate()
  const dashRef = useRef();
  const baseUrl = process.env.REACT_APP_API_URL;
  const [load, setload] = useState(false);
  const TabNav = { "Overview": <Overview data={Univ_Data} Name={univ_name} />, "Geography": <Geography data={Univ_Data} Name={univ_name} />, "Rankings": <Rankings data={Univ_Data} Name={univ_name} />, "Course": <ProgramDetails data={Univ_Data} Name={univ_name} List={Couse} details={details} setdetails={setdetails} load={load}/> }
  const [currentTab, setcurrentTab] = useState("Overview");
  const onchange = (e) => {
    setsearchKeyword({ ...searchKeyword, [e.target.name]: e.target.value });
  }
  const getHints = (e) => {
    setUniversityList(
      UniversityList.filter((el) => el.toLowerCase().includes(searchKeyword.search.toLowerCase()))
    );
  };
  const getCHint=(e)=>{
    setCouse(
      Couse.filter((el) => el.toLowerCase().includes(searchKeyword.course.toLowerCase()))
    );
  }
  const getCourseHints=async(name)=>{
    const response1 = await fetch(`${baseUrl}/getCourses/${name}`, {
      method: "GET", headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => res.json()).then((res) => { if(res.Names.length!==0){setCouse(res.Names);c1=res.Names}})
  }
  let getd = async()=>{
    let d = Univ_Data.ProgramDetails.filter((val)=>val["Course Name"]==searchKeyword.course)
    return d;
  }
  let setD1 = async()=>{
    setload(true);
    let d = await getd();
    let f = setdetails(d)
    setload(false);
  }
  let setD = async()=>{
  await setD1()
  }
  const getD1 = async()=>{
    const response = await fetch(`${baseUrl}/searchUniv`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
    ).then((res) => res.json()).then((res) => {setUniversityList(res.data);return res.data})
    if(univ_name !=="search" ){const response1 = await fetch(`${baseUrl}/getUniversityData/${univ_name}`, {
      method: "GET", headers: {
        "Content-Type": "application/json", 
      }
    }).then((res) => res.json()).then((res) => { setUniv_Data(res);return res})
  // 
}}
  const getData = async () => {
    setload(true)
    await getD1();
    await getCourseHints(univ_name)
    setload(false)
  }
  const TabSwitch = () => {
    return (TabNav[currentTab])
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [univ_name])
  const onSelect = ()=>{
    getCourseHints(searchKeyword.search);
  }
  return (
    
    <div className='w-full normal-case h-full overflow-hidden'>
      
          <div className='h-screen w-screen fixed z-30 hidden'ref={modalref}>
            <div className='flex w-full h-full items-center bg-[#8080803e] justify-center'>
            <div className='w-[51.5rem] h-[22.1875rem] bg-white-A701 rounded-lg flex items-center' onMouseLeave={()=>{modalref.current.classList.add("hidden")}}>
              <img src="/images/defaultimg.svg"></img>
              <div>
                <div className='text-[1.8125rem] leading-[2.03125rem] head font-semibold text-[#5307B4] ' >
                                    Name <span className='lowercase'>of</span> Tool 2
                </div>
                <div className='normal-case w-[28.5rem] text-[0.8125rem] leading-[1.28125rem] text-justify mt-[0.56rem]'>
                The primary concern of every aspiring entrepreneur is to keep their startup costs as low as possible. Although there are several unavoidable costs an online business have to pay for, you can minimize some operational costs with the assistance of the best tools. The primary concern of every aspiring entrepreneur is to keep their startup costs as low as possible. Although there are several unavoidable costs an online business have to pay for, you can minimize some operational costs with the assistance of the best tools.The primary concern of every aspiring entrepreneur is to keep their startup costs as low as possible.
                </div>
                <button className='w-[6.9375rem] mt-3 h-[2.125rem] text-center text-white-A701 rounded-[0.1875rem] bg-gradient-to-r from-[#7a3bcd]  via-[#6211cc] to-[#7a3bcd] text-[0.6875rem] leading-[1.28125rem]'>Try Now</button>
              </div>
           </div>
            </div>
          </div>
            <Nav1 />
              <div className=' w-[97%] h-[24rem] md:h-[20rem] mb-4 rounded-md flex justify-center mx-auto bg-cover bg-no-repeat' style={{ "backgroundImage": 'url("https://wallpapers.com/images/high/oxford-university-night-lights-5lngn62vw1a0zqvn.webp")' }} >
                <div className='w-full h-full bg-[#0000005d]'>
                  <div className='flex justify-center h-[7rem]'>
                    <div className='text-white-A701 h-full text-4xl md:text-2xl font-bold text-center mx-auto mt-[5%]'>Discover Academic Opportunities <br /> Worldwide with Us</div>
                  </div>
                  <div className="w-screen  md:hidden">
                    <div className='rounded-md bg-white-A701  mt-[7rem] flex justify-center mx-auto w-[40rem] md:w-[0%]' ref={searchRef}>
                      <div className='py-3'>
                        <i className='fas fa-search text-cyan-500 text-lg mr-2' />
                        <span className='divide-x-2 divide-blue-200'>
                          <span className='mr-[0.75rem]'>
                            <AutoComplete suggestions={UniversityList} placeholder='Search for University' size={25} name='search' value={searchKeyword.search} completeMethod={getHints} className="input " inputClassName='border-0 focus:border-0 overflow-hidden' onChange={onchange} onSelect={onSelect} />
                          </span>
                          <AutoComplete suggestions={Couse} placeholder='Select Course' size={24} name='course' value={searchKeyword.course} completeMethod={getCHint} className="input " inputClassName='border-0 focus:border-0 ml-[0.75rem] overflow-hidden' onChange={onchange} />
                          <button className='rounded-lg bg-blue-500 text-white-A701 py-[0.7rem] px-[0.9rem]' onClick={() =>{if(searchKeyword.search.length!==0){ hist(`/university/${searchKeyword.search}`);};if(Couse.includes(searchKeyword.course)){setD()}}}>Search</button>
                        </span>
                        {/* <input type="text"  className='' placeholder='Search for University' value={searchKeyword.search} name="search"  onChange={onchange}/> */}
                      </div>
                    </div>
                  </div>
                  <div className="hidden w-screen md:flex justify-center mt-8">
                    <div className='rounded-md bg-white-A701  mt-[2%] w-[90%] ' ref={searchRef}>
                      <div className='py-2'>
                        <div className=' divide-blue-200'>
                          <div className='flex ml-2 text-sm'>
                            University: <span className='mx-auto'><AutoComplete suggestions={UniversityList} placeholder='Search for University' size={18} name='search' value={searchKeyword.search} completeMethod={getHints} className="input " inputClassName=' ml-2 text-sm focus:outline-none' onChange={onchange} onSelect={onSelect}/></span>
                          </div>
                          <div className='flex ml-2 mt-2 text-sm'>
                            Course :<span className='mx-3'></span><span className='mx-auto'><AutoComplete uggestions={Couse} placeholder='Select Course' size={18} name='search ' value={searchKeyword.course} completeMethod={getCHint} className="input focus:outline-none" inputClassName='text-sm focus:outline-none' onChange={onchange}  /></span>

                          </div>
                        </div>
                        <div className='flex justify-center'>
                          <button className='rounded-lg mt-2 text-sm bg-blue-500  text-white-A701 py-[0.5rem] px-[0.7rem]' onClick={() => { hist(`/university/${searchKeyword.search}`);window.location.reload();;if(Couse.includes(searchKeyword.course)){setD()}}}>Search</button>
                        </div>
                        {/* <input type="text"  className='' placeholder='Search for University' value={searchKeyword.search} name="search"  onChange={onchange}/> */}
                      </div>
                    </div>
                  </div>

                  {/* <div className='mx-auto md:hidden shadow-slate-400 w-[62%] md:w-11/12 mt-16 md:mt-[13%] bg-[#dbdbeb] shadow-lg rounded-[100rem] h-20 items-center flex justify-center'>
      <div className=''>
      <div className='rounded-md '>
          <ul  className='text-xl flex justify-center'>
            {Object.keys(TabNav).map((item)=>{ 
              if(item==currentTab){return(
            <li className='justify-center flex w-60 bg-white-A701 rounded-[100rem] py-7 shadow-lg'><span className='flex items-center'>{item}</span> </li>)}
            
              else{
            return(<li className='justify-center flex w-60 py-7 text-gray-600 ' onClick={()=>{setcurrentTab(item)}}><span className=''>{item}</span></li>)
              }})
            }
          </ul>
      </div>
      </div>
    </div> */}

                </div>
              </div>
      {load ? <>
        <div className="load font-inter">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        </div>
      </> :
        <div className=''>
          <div className=' w-full bg-[#EBF2FF] font-outfit overflow-hidden'>
              {univ_name=="search"?<>
                <Default modalref={modalref}/>
              </>:
              <div>
              <div className='my-10 flex justify-center'>
                <div className='w-[90%] md:w-full rounded-lg bg-white-A701  pt-3 pb-5 px-5 '>
                  <div className='flex'>
                    <img src="/images/img_univ._logo.svg" className='ml-3 absolute'></img>
                    <div className='text-2xl mt-1 ml-24'><div className='font-bold flex'><div className='w-[1150px] md:w-full'>{univ_name} </div><img src="/images/img_bookmark_sec.svg"></img></div> <div className='text-sm mt-3 text-gray-500'>Massachusetts, United States • Governemnt University • Established in 1805</div></div>
                  </div>
                  <div className='flex mt-4'>
                    <div className='ml-24 md:ml-0 box-border'>
                      <button className='p-4 text-white-A701 bg-[#6218C0] font-xs font-semibold rounded-lg inline-block'>Join Student Community</button>
                    </div>
                    {/* <div className='lowercase mt-2 justify-end w-[60%] md:w-[10%] flex text-red-600 font-semibold ml-44'>{Univ_Data.USN_Rankings["Website link"]}</div> */}
                  </div>
                </div>
              </div>
              <div className='pr-10  pl-6'>
              </div>
            <div className='flex justify-center '>
                  <div className='rounded-3xl w-[226px] sticky top-0 z-50 bg-white-A701 md:hidden mr-5 ml-3  py-8 h-screen ' ref={dashRef}>
                    <ul className='text-xl '>
                      {Object.keys(TabNav).map((item) => {
                        if(item!="ProgramDetails" || searchKeyword.course!=""){if (item == currentTab) {
                          return (
                            <li className='py-[0.35rem]  text-[#5307B4]'><div className='flex'><div><div  className='w-[2.5rem]'><img src="/images/img_navline.svg"></img></div></div><div className='font-bold text-[1rem] flex items-center'> <div className='w-[6rem]'>{item}</div> 
                            <div><img src="/images/img_arrow_right.svg" className='mt-1' /></div></div></div></li>)
                        }
                        else {
                          return (<li className=' py-[0.6rem] flex' onClick={() => { setcurrentTab(item) }}><div className='w-[2.5rem]'></div><div className='text-3xl'><span className='text-[1rem]' >{item} </span></div></li>)
                        }}
                      })
                      }
                    </ul>
                  </div>
                  <div className='relative w-[72%] h-screen md:h-full  overflow-y-auto  md:w-full rounded-md  bg-[#EBF2FF]' >{TabSwitch()}</div>
            </div>
            </div>}
          </div>
        </div>}
    </div>
  )
}
export default Univ_Data
