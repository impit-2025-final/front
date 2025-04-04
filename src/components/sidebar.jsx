import { Link, useLocation } from "@tanstack/react-router"
import { useState } from "react"
import { ChartBarIcon, ChevronLeftIcon, ChevronRightIcon, CpuChipIcon } from '@heroicons/react/24/solid'


export const Sidebar =()=>{
    const [hidden,setHidden] = useState(false)
    const {pathname} = useLocation()
    console.log(pathname)
    if (hidden)  return(
        <div className="w-20 h-screen flex flex-col justify-between p-2">
            <div className="flex flex-col gap-2">

            <Link to="/" className={`flex flex-row gap-2  p-5 rounded-[20px]  ${pathname !== "/" ? 'bg-white' : 'bg-[#EDEDED]'}`}>
                    <CpuChipIcon width={24} height={24} />
                    </Link>
                    <Link to="/analytics" className={`flex flex-row gap-2 p-5 rounded-[20px] ${pathname !== "/analytics" ? 'bg-white' : 'bg-[#EDEDED]'}`}>
                    <ChartBarIcon width={24} height={24} />
                    </Link>
            </div>
            <button onClick={()=>setHidden(false)}>
               <ChevronRightIcon width={24} height={24} />
            </button>
        </div>
    )
    return(
        <div className="w-[238px] px-4 h-screen bg-white flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <Link to="/" className={`flex flex-row gap-2  py-5 pl-4 rounded-[20px] ${pathname !== "/" ? 'bg-white' : 'bg-[#EDEDED]'}`}>
                    <CpuChipIcon width={24} height={24} />
                    Карта сети
                    </Link>
                    <Link to="/analytics" className={`flex flex-row gap-2 py-5 pl-4 rounded-[20px] ${pathname !== "/analytics" ? 'bg-white' : 'bg-[#EDEDED]'}`}>
                    <ChartBarIcon width={24} height={24} />
                        Аналитика
                    </Link>
                </div>
                <button className="w-full text-centere flex flex-row gap-3" onClick={()=>setHidden(true)}><ChevronLeftIcon width={24} height={24} />Скрыть</button>
        </div>
    )
}