import { supabase } from '../api/cliente'
import { AiOutlineSearch, AiFillHome, AiOutlineSend, AiOutlinePlusCircle, AiOutlineHeart, AiOutlineWarning } from "react-icons/ai";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaMoon, FaRegMoon } from "react-icons/fa";


export default function Header() {

    const [darkmode, setdarkmode] = useState(true);
    const [open, setOpen] = useState(false)
    const [post, setposts] = useState({ name: '', message: '', images: '', })
    const cancelButtonRef = useRef(null)

    const handlerDark = () => {
        setdarkmode(!darkmode)
        if (darkmode) {
            document.documentElement.classList.add('dark')
        } else {

            document.documentElement.classList.remove('dark')
        }
    }

    const handlerInsert = async (e) => {

        const file = e.target.files[0]
        const randomstring = Math.random().toString(36).slice(-8);

        const { data, error } = await supabase
            .storage
            .from('image-post')
            .upload(`public/${randomstring}`, file)

        if (data) {

            const InserData = async () => {

                const imageurl = await supabase
                    .storage
                    .from('image-post')
                    .getPublicUrl('public/' + randomstring)

                const { error } = await supabase
                    .from('posts')
                    .insert({ name: post.name, message: post.message, image: imageurl.data.publicUrl })
                console.log("log del inserdata")
                console.log(post)
                if (error) {
                    console.log('error a insertar la data en la tabla')
                    console.log(error)
                } else {

                }
            }


            InserData()

        } else {

            console.log('error al guardar imagen')
            console.log(error);

        }

    }


    return (
        <div className=' bg-white dark:bg-slate-800 transition-all dark:border-none  border-2 border-gray-200'>
            <div className='max-w-7xl mx-auto py-2 flex items-center justify-between px-5 '>

                {/* Logo*/}
                
                {darkmode ? <img className='w-28 hidden sm:block' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt="profile pic"/> : <img className='w-28 hidden sm:block' src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png" alt="profile pic" /> }
                
                {darkmode ? <img className='w-7 sm:hidden' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="profile pic" /> :  <img className='w-7 sm:hidden' src="https://icon-library.com/images/instagram-icon-png-white/instagram-icon-png-white-11.jpg" alt="profile pic" /> }
             

                {/* search bar*/}
                <div className="relative  items-center hidden sm:flex">
                    <div className='absolute pl-3'><AiOutlineSearch className='text-gray-400 text-lg' /></div>
                    <input className='border-md  dark:bg-slate-800 dark:text-white   dark:border-slate-500 border h-11 pl-9 rounded-md sm:w-80 w-13 bg-slate-50' type="text" placeholder='Search' />
                </div>

                {/* Menu*/}
                <div className='flex items-center space-x-5'>
                    <div className='h-14 flex sm:flex space-x-5 items-center'>
                        <AiFillHome className='dark:text-white hidden text-2xl hover:scale-125 hover:cursor-pointer transition-all sm:block ' />
                        <AiOutlineSend className=' dark:text-white hidden text-2xl hover:scale-125 hover:cursor-pointer transition-all -rotate-45  sm:block' />
                        <AiOutlinePlusCircle onClick={() => setOpen(!false)} className='dark:text-white text-2xl hover:scale-125 hover:cursor-pointer transition-all' />
                        <AiOutlineHeart className='dark:text-white hidden text-2xl hover:scale-125 hover:cursor-pointer transition-all  sm:block' />

                        {darkmode ? <FaRegMoon onClick={handlerDark} className=' text-2xl hover:scale-125 hover:cursor-pointer transition-all  sm:block' /> : <FaMoon onClick={handlerDark} className=' text-2xl text-white hover:scale-125 hover:cursor-pointer transition-all  sm:block' />}
                        <img className='hidden w-10 h-10 object-cover rounded-full hover:scale-125 hover:cursor-pointer transition-all' src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />

                    </div>

                </div>

            </div>


            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex  justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-slate-700  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg py-7">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-slate-700 dark:text-white">
                                        <div className="sm:flex sm:items-start">

                                            <div className="mt-3 text-center">
                                                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                                                    <h2 className='mb-12 font-bold text-xl dark:text-white'>Agregar nuevo post</h2>
                                                </Dialog.Title>

                                                <input type="text" placeholder='Nombre' onChange={e => setposts({ ...post, name: e.target.value })} className='dark:bg-slate-800 p-2 outline-none border-b-4 w-full mb-3' />
                                                <input type="text" placeholder='Mensaje' onChange={e => setposts({ ...post, message: e.target.value })} className='dark:bg-slate-800 p-2 outline-none border-b-4 w-full mb-3' />
                                                <input type="file" placeholder='Image url' onChange={e => handlerInsert(e)} className='p-2 outline-none border-b-4 w-full mb-3 bg-transparent' />
                                                <div className="mt-8 mb-6">
                                                    <AiOutlineWarning className='text-2xl text-yellow-600 m-auto mb-5' />
                                                    <p className="text-sm text-gray-500 text-center dark:text-slate-400">
                                                        No me hago responsable por lo que puedas ver o publicar, esta bajo tu consentimiento seguir viendo el contenido
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-700 flex justify-center py-3 sm:flex sm:flex-row-reverse gap-3">

                                        <button
                                            type="button"
                                            className=" outline-none border dark:text-white border-red-300 p-2 px-4 rounded-lg hover:bg-red-400"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className=" outline-none border bg-green-400 border-green-300 p-2 px-4 rounded-lg hover:bg-green-400"
                                            onClick={() => setOpen(false)}



                                            ref={cancelButtonRef}
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    )
}
