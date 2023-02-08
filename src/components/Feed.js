
import { Miniprofile } from './Miniprofile'
import { StoryCard } from './StoryCard'
import { AiOutlineMore } from "react-icons/ai"

import { supabase } from '../api/cliente'
import { useEffect, useState } from 'react'


export const Feed = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        const fetch = async () => {
            const posts = await supabase.from('posts').select()
            setdata(posts.data)
        }
        fetch()

    }, [data])

    return (
        <div className='max-w-7xl mt-2 sm:mt-7 mx-auto grid grid-cols-3 space-x-6'>

            {/* leftside*/}

            <div className='col-span-3 md:col-span-2 '>

                <div className=' w-full fixed sm:relative top-16 sm:top-0 '>

                    <StoryCard />
                </div>


                {/* Post card */}

                <div className='overflow-y-auto snap-y scrollbar flex flex-col-reverse	scroll-snap-align: end; scrollbar-thumb-slate-400 scrollbar-medium mt-32 sm:mt-5'>



                    {data.map((e) =>
                        <div className='mb-5 snap-center '>
                            <div className='bg-white flex items-center justify-between p-5 rounded-t-xl'>
                                <Miniprofile w='10' h='10' name={e.name} image={e.image} />
                                <AiOutlineMore className='rotate-90 text-2xl' />
                            </div>
                            <div className='aspect-video object-cover'>
                                <img className='w-full ' src={e.image ? e.image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC'} alt="" />
                            </div>
                            <div className='bg-white w-100 p-4 rounded-b-xl flex items-center gap-1'>
                                <bold className='font-medium'>Message:</bold>
                                <p className='text-xs text-gray-600'>{e.message}</p>
                            </div>
                        </div>
                    )}




                </div>





            </div>



            {/* Right side*/}

            <div className='col-span-1  hidden md:block px-4 pt-8'>

                {/* miniprofile */}

                <Miniprofile className='h-20' name="Maria_burguer89" subname="Maria_burguer89" image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />

                {/* suggestions */}
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between mt-4'>
                        <p className='text-xl text-gray-400 font-semibold'>Suggestions for you</p>
                        <p className='text-md text-gray-700 font-bold'>See All</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Miniprofile w='10' h='10' name="Rodolfo Corripio" subname="Maria_burguer89" image="https://picsum.photos/id/237/200/300" />
                        <Miniprofile w='10' h='10' name="Alejandra_papa20" subname="Maria_burguer89" image="https://picsum.photos/id/238/200/300" />
                        <Miniprofile w='10' h='10' name="Itz real_gang" subname="Maria_burguer89" image="https://picsum.photos/id/234/200/300" />
                        <Miniprofile w='10' h='10' name="Sophie223" subname="Followed by Rodolfo.." image="https://picsum.photos/id/230/200/300" />

                    </div>
                </div>


            </div>



        </div>
    )
}
