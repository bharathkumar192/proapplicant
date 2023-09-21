import React,{useState} from 'react'
import Nav from './Nav'
import { useEffect,useRef } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
import { useNavigate ,Link} from 'react-router-dom';
const SearchModal = () => {
    const [searchKeyword, setsearchKeyword] = useState({search:""});
    const [UniversityList, setUniversityList] = useState(["Hello","Hi"]);
    
    const searchRef = useRef();
    const dashNav = ["Overview","Geography","Rankings","Course Details","Student Details"]
    const hist = useNavigate()
    const baseUrl = process.env.REACT_APP_API_URL;
    const [load, setload] = useState(false);
    const [currentTab, setcurrentTab] = useState("Overview");
    const onchange=(e)=>{
        setsearchKeyword({...searchKeyword,[e.target.name]:e.target.value});
    }
    const getHints = (e) => {
      setUniversityList(
        UniversityList.filter((el) => el.toLowerCase().includes(searchKeyword.search.toLowerCase()))
      );
    };
    const getData = async()=>{
      setload(true)
      const response  = await fetch(`${baseUrl}/searchUniv`,{method:"GET",
      headers:{"Content-Type":"application/json"},}
      ).then((res)=>res.json()).then((res)=>setUniversityList(res.data))
      console.log(UniversityList);
      setload(false);
    }
    useEffect(()=>{
      window.scrollTo(0,0);
      getData();
    },[])

  return (
    <>
    {load?<>
      <div className="load font-inter">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt=""
          />
        </div>
    </>:
    <div className='h-full w-full font-inter'>
    <Nav />
    <div className="">
    <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-[95%] h-[12rem] rounded-md flex justify-center mx-auto'>
      <div>
        <div className='flex justify-center h-[6rem]'>
        <div className='text-white-A701 text-4xl font-bold my-[6%] mx-auto'>University Search</div>
        </div>
        <div className="w-full ">
        <div className='rounded-md  divide-x-[3px]  bg-white-A701 shadow-xl shadow-slate-400 mt-[9%] flex justify-center items-center' ref={searchRef}>
          <div className='p-3'>
        <i className='fas fa-search text-cyan-500 text-lg mr-2'/>
        <AutoComplete suggestions={UniversityList} placeholder='Search for University' size={65} name='search' value={searchKeyword.search} completeMethod={getHints} className="input " inputClassName='border-0 focus:border-0 ' onChange={onchange}/>
          {/* <input type="text"  className='' placeholder='Search for University' value={searchKeyword.search} name="search"  onChange={onchange}/> */}
          <button className='rounded-lg bg-blue-500 text-white-A701 py-[0.7rem] px-[0.9rem] ml-2' onClick={()=>{hist(`/university/${searchKeyword.search}`)}}>Search</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className='mt-20 flex w-full'>
      <div className='w-1/6 md1:w-1/5 md:1/4  ml-16 mr-4'>
      <div className='rounded-md shadow-lg shadow-slate-400  bg-slate-100 py-8 '>
        {/* <div className='flex justify-center'>
          <div className='bg-cyan-400 px-3 rounded text-lg'>
          <i className='fa fa-globe text-lg'></i>
          <button className='py-3 px-10 rounded'>Geography</button>
          </div>
        </div>
          <hr className='mx-auto w-4/5' /> */}
          <ul  className='text-xl'>
            {dashNav.map((item)=>{ 
              if(item==currentTab){return(
            <li className='py-3 my-2 hover:bg-gray-200 text-blue-500'><span className='pl-10'> + {item}</span></li>)}
              else{
            return(<li className='py-3 my-2 hover:bg-gray-200' onClick={()=>{setcurrentTab(item)}}><span className='pl-10' > + {item}</span></li>)
              }})
            }
          </ul>
      </div>
      </div>
      <div className='w-3/4 pr-10  pl-6'>
      <div className='rounded-md shadow-lg shadow-slate-400 h-40 bg-white-A701 p-8'></div>
      </div>
    </div>
    </div>}
    </>
  )
}

export default SearchModal