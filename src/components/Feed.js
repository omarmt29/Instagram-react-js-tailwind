
import { Miniprofile } from './Miniprofile'
import { StoryCard } from './StoryCard'
import { AiOutlineMore } from "react-icons/ai"



export const Feed = () => {

    return (
        <div className='max-w-7xl mt-2 sm:mt-7 mx-auto grid grid-cols-3 space-x-6'>

            {/* leftside*/}

            <div className='col-span-3 md:col-span-2'>

                <StoryCard />


                {/* Post card */}

                <div className='overflow-y-auto scrollbar  scrollbar-thumb-slate-400 scrollbar-medium h-screen mt-5'>

                    <div>
                        <div className='bg-white flex items-center justify-between p-5 rounded-t-xl'>
                            <Miniprofile w='10' h='10' name="Rodolfo Corripio" image="https://picsum.photos/id/237/200/300" />
                            <AiOutlineMore className='rotate-90 text-2xl' />
                        </div>
                        <div className='w-full h-4/6 '>
                            <img className='w-full h-full object-cover rounded-b-xl' src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white mt-5 flex items-center justify-between p-5 rounded-t-xl'>
                            <Miniprofile w='10' h='10' name="Rodolfo Corripio" image="https://picsum.photos/id/237/200/300" />
                            <AiOutlineMore className='rotate-90 text-2xl' />
                        </div>
                        <div className='w-full h-4/6'>
                            <img className='w-full h-full object-cover rounded-b-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lQUKAxE6MnvAcuo4S9bTqv3w4AG80rwlgORkJRQ7zz-MkJNx6QRvO5xbPvLaX8oDPxI&usqp=CAU" alt="" />
                        </div>
                    </div>

                </div>





            </div>



            {/* Right side*/}

            <div className='col-span-1  hidden md:block px-4 pt-8'>

                {/* miniprofile */}

                <Miniprofile  className='h-20' name="Maria_burguer89" subname="Maria_burguer89" image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />

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
