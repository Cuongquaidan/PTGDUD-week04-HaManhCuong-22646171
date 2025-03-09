import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import AvatarPig from "/avatarPig.jpg"
import ShareIcon from "/iconShare.svg"
import Item from '../components/Item';
import { FaChevronLeft } from "react-icons/fa";
function RecipeBox() {
    const [tab,setTab] = useState("Saved Recipes")
    const tabs = [
        "Saved Recipes",
        "Folders",
        "Recipes by Genevieve"
    ]
    const data =[
        {
            id:1,
            name: "name adsadsa dsadsa a sdadas as",
            urlImg: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            time: "15 minutes"
        },
        {
            id:2,
            name: "name adsadsa dsadsa a sdadas as",
            urlImg: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            time: "15 minutes"
        },
        {
            id:3,
            name: "name adsadsa dsadsa a sdadas as",
            urlImg: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            time: "15 minutes"
        },
        {
            id:4,
            name: "name adsadsa dsadsa a sdadas as",
            urlImg: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            time: "15 minutes"
        },
        {
            id:5,
            name: "name adsadsa dsadsa a sdadas as",
            urlImg: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            time: "15 minutes"
        },
        {
            id:6,
            name: "name adsadsa dsadsa a sdadas as",
            urlImg: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            time: "15 minutes"
        }
    ]
  return (
    <div className='w-[1400px] mx-auto p-4'>
        <div className='flex gap-2 font-bold text-md items-center'>
            <p>Home</p>
            <FaChevronRight className='mt-1' color='gray' />
            <p className='text-[#F44B87FF]'>your-recipe-box</p>
        </div>
        <div className='p-4'>
            <div className='mt-10'>
                <h2 className='text-2xl font-bold'>Emma Gonzalez's Recipe Box</h2>
                <div className='flex gap-4 mt-4'>
                   <div className=' bg-[#FBC8DAFF] shrink-0 rounded-full w-40 h-40 overflow-hidden p-4'>
                   <img src={AvatarPig} alt="" className='w-full h-full object-cover'/>
                   </div>
                   <div className='flex flex-col justify-between'>
                    <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
                    <div className='flex font-bold text-[#F44B87FF] gap-2 items-center pb-8'>
                        <p>6.5k Subscribes</p>
                        <button className='flex text-white p-2 rounded-md bg-[#F44B87FF]'>
                            <p>Share</p>
                            <img src={ShareIcon} alt="" className='w-6 h-6'/>
                        </button>
                    </div>
                   </div>
                </div>
            </div>
            <div className='mt-10'>
                {
                    tabs.map((item,index)=>{
                        return <button onClick={()=>{setTab(item)}} key={index} className={`text-sm transition-colors cursor-pointer ${item===tab?"text-[#B30B46FF]  bg-[#FBC8DAFF]":"text-[#565E6CFF]"} rounded-t-xl p-2`}>
                            {item} 
                        </button>   
                    })
                }
            </div>
            <div className='w-full h-0.5 bg-gray-200'></div>
            <div className='mt-10 grid grid-cols-4 gap-4'>
                    {
                        data.map((item,index)=>{
                            return <Item key={item.id} name={item.name} urlImg={item.urlImg} time={item.time}></Item>
                        })
                    }
            </div>
            <div className='flex items-center gap-2 mt-5 justify-end text-sm'>
                <FaChevronLeft color='gray'></FaChevronLeft> 
                <div className='p-2 text-center min-w-8 bg-[#F44B87FF] text-white rounded-sm border-gray-200 border'>1</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>2</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>3</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>4</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>...</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>9</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>10</div>
                <div className='p-2 text-center min-w-8 rounded-sm border-gray-200 border'>11</div>
                <FaChevronRight color='gray'></FaChevronRight>  
            </div>
        </div>
      
    </div>
  )
}

export default RecipeBox
