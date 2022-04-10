import React, { useState } from 'react'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"

function Header() {
 const [data,setData] = useState({
   search: ""
 });

 function handle(e){
   const newdata = {data}
   newdata[e.target.id] = e.target.value
   setData(newdata)
 }
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between
    items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <a href="/">   <HeaderItem title='HOME' Icon={HomeIcon}/></a>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
      </div>
        <form onSubmit={()=> data}>
        <input type="text" onChange={(e) => handle(e)} value={data.search} name='search' placeholder='Search' autoComplete='off' aria-label='Search' className='w-96 pl-6 py-2 font-semibold text-white placeholder-white rounded-2xl border-2 border-white bg-transparent  focus:bg-white focus:text-black  focus:placeholder-black focus:outline-none transition duration-300' />
        </form>
      <img
        className='object-contain'
        src="https://links.papareact.com/ua6"
        alt="image"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header