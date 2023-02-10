export default function StoryItem({name, lastname, picture}) {
    return(    
        <div key={name} className='hover:scale-110 hover:cursor-pointer transition-all'>
            <img className='rounded-full w-12 h-12  sm:w-16 sm:h-16 border p-[1.5px] border-md border-red-600 object-fill ' src={picture} alt="" />
            <p className='text-xs w-20 truncate text-center text-gray-500 dark:text-white mt-2'>{name} {lastname}</p>
        </div>
    )
}


