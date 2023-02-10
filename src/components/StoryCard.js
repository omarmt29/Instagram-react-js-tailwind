

import { useEffect, useState } from 'react'
import StoryItem from './StoryItem'
import { userlist } from '../services/userList'

export const StoryCard = () => {

    const [data, setdata] = useState([])

    useEffect(() => {

       const gettingdata = async () => {
            const res = await userlist();
            setdata(res)
        }
        
        gettingdata()

    }, [])

    return (
        <div className='bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white px-4 pb-4 sm:pt-4 border sm:rounded-xl dark:border-none border-gray-300 flex space-x-3 overflow-x-auto scrollbar scrollbar-thumb-slate-400  scrollbar-medium'>
            {data.map((e, index) => <StoryItem key={index} name={e.name.first} lastname={e.name.last} picture={e.picture.large} />)}

        </div>
    )
}
