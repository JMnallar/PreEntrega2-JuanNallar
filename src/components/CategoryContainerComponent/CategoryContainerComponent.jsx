import { Link } from "react-router-dom"
export default function CategoryContainerComponent () {

    
    return(
        <>
        <div className="flex flex-col m-auto items-center justify-center p-5 lg:flex-row">
         <Link to = {'/categoria/smartphones'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Smartphones</button></Link>
         <Link to = {'/categoria/tablets'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Tablets</button></Link>
         <Link to = {'/categoria/notebooks'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Notebooks</button></Link>
         <Link to = {'/categoria/smartwatch'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">SmartWatch</button></Link>
         <Link to = {'/categoria/headphones'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Headphones</button></Link>
         </div>
        </>
    )
}