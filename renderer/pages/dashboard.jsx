import { PlusIcon } from '@heroicons/react/20/solid'
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../components/Model'
import BasicTable from '../components/Table';
import { useEffect, useState } from 'react'
import uuid from 'react-uuid';
import { addBot, deleteDBBot, getAllBots, getUserName } from '../components/db-components';

export default function Example() {

    const [open, setOpen] = useState(false);
    const [bots, setBots] = useState([]);
    const [username, setUsername] = useState('');

    useEffect( () =>  {
        console.log(bots)
        async function getDataFromDB() {
            const userName = await getUserName(); 
            const dbData = await getAllBots();
            if (dbData) {
                setBots(dbData);
            }
            console.log(JSON.stringify(dbData));//from db 
            setUsername(userName[0].name);
           
        }
        getDataFromDB() ;         
    }, [])

    const formSubmitted = async (e) => {
        e.preventDefault();
        const bot_name = e.target.floating_name.value;
        const bot_description = e.target.floating_description.value;
            const bot = {
                'id': uuid(),
                'title': bot_name,
                'description': bot_description,
                'time': new Date().toLocaleString(),
                'workspace' : '' ,
                'code' : '', 
            }
            await addBot(bot); // add bot to db
        
        setBots(await getAllBots());
        setOpen(false);
    }

    const deleteBot = async (id) => {
        console.log(id, 'delete');
        if (bots) {
           await deleteDBBot(id); // delete bot from db
           setBots(await getAllBots());
        }     
    }

    const editBot = (id) => {
        console.log(id, 'edit');
        const bot = bots.find(bot => bot.id === id);
        console.log("Switching to editor")
        console.log(JSON.stringify(bot));
        localStorage.setItem('bot', JSON.stringify(bot));
        var winLoc =  origin + '/editor';
        //window.location.href = winLoc;
        //return false; 
        
    }

    const copyBot = async (id) => {
        console.log(id, 'copy');
        
            const botsArray = await getAllBots();
            const bot = botsArray.find(bot => bot.id === id);
            const newBot = {
                'id': uuid(),
                'title': '(Copy) ' + bot.name,
                'description': bot.description,
                'time': new Date().toLocaleString(),
                'workspace' : bot.workspace ,
                'code' : bot.code,

            }
            await addBot(newBot); // add bot to db
            setBots(await getAllBots());
        
    }


    return (
        <>
            <div className=" bg-background min-h-screen">
                <div className="">
                    <header className="py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-white text-center">
                                <span className='text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600'>
                                    {username ? username + "'s" : ''}
                                </span> Dashboard
                            </h1>
                        </div>
                    </header>
                </div>
                <main className="">
                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                        {(bots && bots.length > 0) ? (
                            <div>
                                <BasicTable data={bots} handleCopy={copyBot} handleEdit={editBot} handleDelete={deleteBot} />
                                <Fab color="primary" aria-label="add" sx={
                                    {
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                    }
                                } onClick={() => setOpen(true)}>
                                    <AddIcon />
                                </Fab>
                            </div>
                            
                        ) : (
                            <div className="bg-gray-800 rounded-lg shadow px-5 py-2 sm:px-6">
                                <div className="rounded-lg h-96 text-gray-50">
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    vectorEffect="non-scaling-stroke"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                />
                                            </svg>
                                            <h3 className="mt-2 text-sm font-medium text-gray-400">No programs</h3>
                                            <p className="mt-1 text-md text-gray-500">Create a new python program.</p>
                                            <div className="mt-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

                                                    onClick={() => setOpen(true)}
                                                >
                                                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                    New File
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </main>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <form onSubmit={formSubmitted}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea type="description" name="floating_description" id="floating_description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </Modal>
            </div>
        </>
    )
}

