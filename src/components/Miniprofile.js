import React from 'react'

export const Miniprofile = ({name, subname, image, w = "20", h = "20"}) => {
    return (
        <div className='w-100 flex items-center justify-between '>
            <div className={`flex items-center space-x-4`}>
                <img className={` w-${w} h-${h} object-cover rounded-full hover:scale-125 hover:cursor-pointer transition-all`} src={image} alt="asd" />
                <div>
                    <p className='text-xl text-gray-700 font-semibold truncate'>{name}</p>
                    <p className='text-gray-500 truncate'>{subname}</p>

                </div>
            </div>
          
        </div>
    )
}
