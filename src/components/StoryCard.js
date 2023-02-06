

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
        <div className='bg-white p-4 border border-gray-300 flex space-x-3 overflow-x-auto scrollbar scrollbar-thumb-slate-400  scrollbar-medium'>
            {data.map(e => <StoryItem key={e.index} name={e.name.first} lastname={e.name.last} picture={e.picture.large} />)}

        </div>
    )
}
