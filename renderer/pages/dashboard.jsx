import { PlusIcon } from '@heroicons/react/20/solid'
import { Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../components/Model'
import BasicTable from '../components/Table';
import { useEffect } from 'react'
import uuid from 'react-uuid';
import { addBot, deleteDBBot, getAllBots, getUserName } from '../components/db-components';
import { isProduction } from '../components/coderun-components';
import React from 'react';
import { version_info } from '../components/server-components.js';
import { ipcRenderer } from 'electron';
import DatePicker from "react-multi-date-picker"
import {TimePicker} from 'react-time-picker/dist/entry.nostyle' ; 
import "react-time-picker/dist/TimePicker.css" ;
import "react-clock/dist/Clock.css" ;
import { setSchedule,removeSchedule } from '../components/schedule-components';
import { deleteScriptFile } from '../../main/helpers/pyActivities';

var Bot = require('../../main/models/bot_model.js');
var Cron = require('../../main/models/cron_model.js')


const weekDays = ["S", "M", "T", "W", "T", "F", "S"]

function SchedulePickerWindow(){
    var [value, onChange] = React.useState('10:00');
    var [selectedDays, setSelectedDays] = React.useState([1, 2, 3, 4, 5, 6, 7]);
    

    const scheduleBot = () => {
        console.log("Schedule bot");
       // SetHiddenWindow(true);
    }
    const onDayChange = (selectedDays) => {
        console.log(selectedDays);
        setSelectedDays(selectedDays);
    }
    const onTimeChange = (value) => {
        console.log(value);
        onChange(value);
    }


    return(
        
        <div>
            <DatePicker
                weekDays={weekDays}
                value={selectedDays}
                onChange={onDayChange}
                />
            <TimePicker
                onChange={onTimeChange}
                value={value}
                />
            <Button variant="contained" onClick={() => {}}>Schedule</Button>
        </div>
    )


}



function notificationWindow() {
    var [hiddenWindow, SetHiddenWindow] = React.useState(true);
    var [notiftext, setNotifText] = React.useState('');
    var [hiddenButton, setHiddenButton] = React.useState(true);

    useEffect(() => {
        ipcRenderer.on('update_available', () => {
            SetHiddenWindow(false);
            setNotifText('A new update is available. Downloading now...');
            return () => {
                ipcRenderer.removeAllListeners('update_available');
            }
        });

        ipcRenderer.on('download_progress', (event, log_message) => {
            // console.log(log_message);
            setNotifText(log_message);
            return () => {
                ipcRenderer.removeAllListeners('update_available');
            }

        })

        ipcRenderer.on('update_downloaded', () => {
            ipcRenderer.removeAllListeners('update_downloaded');
            setNotifText('Update Downloaded. It will be installed on restart. Restart now?');
            setHiddenButton(false);
            SetHiddenWindow(false);
            // message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
            // restartButton.classList.remove('hidden');
            // notification.classList.remove('hidden');

            return () => {
                ipcRenderer.removeAllListeners('update_available');
            }
        });
    }, []);

    return (
        <div id="notification" className="notifwindow" hidden={hiddenWindow}>
            <p  {...notiftext} ></p>
            <button id="close-button" onClick={() => SetHiddenWindow = true}>
                Close
            </button>
            <button id="restart-button" onClick={() => ipcRenderer.send('restart_app')} className="notifwindow" hidden={hiddenButton}>
                Restart
            </button>
        </div>

    )
}


function getVersion() {
    const [version, setVersion] = React.useState('');
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        // console.log('useEffect');
        version_info().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setVersion(data);
            }
        });
    }, []);

    return (
        <div className='flex flex-row justify-end m-3 px-2'>
            <p className='text-md text-white italic'>Version : <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300'>{version}</span> {error}</p>
        </div>
    );
}

export default function Example() {

    const [open, setOpen] = React.useState(false);
    const [bots, setBots] = React.useState([]);
    const [username, setUsername] = React.useState('');
    var [showScheduleWindow, setShowScheduleWindow] = React.useState(false);
    

    useEffect(() => {
        // console.log(bots)
        async function getDataFromDB() {
            const userName = await getUserName();
            const dbData = await getAllBots();
            if (dbData) {
                setBots(dbData);
            }
            // console.log(JSON.stringify(dbData));//from db 
            setUsername(userName[0].name);

        }
        getDataFromDB();
    }, [])

    const formSubmitted = async (e) => {
        e.preventDefault();
        const bot_name = e.target.floating_name.value;
        console.log(bot_name);
        const bot_description = e.target.floating_description.value;
        const bot = new Bot(uuid(), bot_name,bot_description , new Date().toLocaleString()) ; 

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

    const editBot = async (id) => {
        // console.log(id, 'edit');
        const bot = bots.find(bot => bot.id === id);
        localStorage.setItem('bot', JSON.stringify(bot));


        if (await isProduction()) {
            window.location.href = 'app://./editor.html';
        }
        else {
            window.location.href = "/editor";
        }
        //tried window.location.reload(); -failed 
        //tried Router.push('/editor'); - failed 
        // console.log(window.location.href);
        //return false; // to prevent default behaviour of form
    }

    const copyBot = async (id) => {
        // console.log(id, 'copy');

        const botsArray = await getAllBots();
        const bot = botsArray.find(bot => bot.id === id);
        const newName = "(copy) " + bot.name ;
        const newBot = new Bot(uuid(), newName, bot.description, new Date().toLocaleString() ,bot.code , bot.workspace , false);
        await addBot(newBot); // add bot to db
        setBots(await getAllBots());

    }

    const scheduleBot = async (id) => {
        console.log(id, 'schedule');
        const bot = bots.find(bot => bot.id === id);
        const cronObj = new Cron("21:44", [0,1,0,1,1,1,1],true)
        console.log(cronObj);
        console.log(cronObj.toUsable());
        await setSchedule(bot, cronObj);
       // setShowScheduleWindow(true);
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
                                {notificationWindow()}
                                {showScheduleWindow && SchedulePickerWindow()}
                            </h1>
                        </div>
                    </header>
                </div>
                <main className="">

                    <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                        {getVersion()}
                        {(bots && bots.length > 0) ? (
                            <div>
                                <BasicTable data={bots} handleCopy={copyBot} handleEdit={editBot} handleDelete={deleteBot} handleSchedule = {scheduleBot}/>
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
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea type="description" name="floating_description" id="floating_description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label htmlFor="floating_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </Modal>
            </div>
        </>
    )
}

