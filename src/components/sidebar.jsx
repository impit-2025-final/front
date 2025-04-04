import { Link, useLocation } from "@tanstack/react-router"
import { useState } from "react"
import { MapPinIcon, ChartBarIcon } from '@heroicons/react/24/solid'


export const Sidebar =()=>{
    const [hidden,setHidden] = useState(false)
    const {pathname} = useLocation()
    console.log(pathname)
    if (hidden)  return(
        <div className="w-10">
            <button onClick={()=>setHidden(false)}>
                Открыть
            </button>
        </div>
    )
    return(
        <div className="w-[238px] px-4 h-screen bg-white flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <Link to="/" className={`flex flex-row gap-2  py-5 pl-4 rounded-[20px] ${pathname !== "/" ? 'bg-white' : 'bg-[#EDEDED]'}`}>
                    <MapPinIcon width={24} height={24} />
                    Карта сети
                    </Link>
                    <Link to="/analytics" className={`flex flex-row gap-2 py-5 pl-4 rounded-[20px] ${pathname !== "/analytics" ? 'bg-white' : 'bg-[#EDEDED]'}`}>
                    <ChartBarIcon width={24} height={24} />
                        Аналитика
                    </Link>
                </div>
                <button className="w-full text-centere" onClick={()=>setHidden(true)}>Скрыть</button>
        </div>
    )
}