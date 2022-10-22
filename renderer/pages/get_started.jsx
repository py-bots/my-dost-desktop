// Page to display the get started page
// page has a logo on top and Text DOST as the title and Advanced Python Made Easy as the subtitle
// page has a button to go to the next page

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';


function GetStarted() {

    const [username, setUsername] = React.useState('');

    function setName(e) {
        setUsername(e.target.value);
        //TODO: Change it to a global state later
        localStorage.setItem('username', e.target.value);
    }


    return (
        <React.Fragment>
            <Head>
                <title>Get Started - DOST</title>
            </Head>
            <div className='flex flex-col bg-background justify-start min-h-screen'>
                <div className="flex flex-col items-center justify-between  py-2 gap-10">

                    <img src="/images/dost_logo_dark.svg" className="h-60 m-10" />

                    <div className='flex flex-col items-center justify-center gap-3'>
                        <h1 className=" mt-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-600">
                            DOST
                        </h1>
                        <h2 className="text-3xl font-bold text-slate-200">Advanced Python Made Easy</h2>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center gap-5 p-10'>
                    <div className='shrink w-80'>
                        <input type="text" value={username} id="user-name" aria-describedby="user-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" onChange={(e) => setName(e)} />
                    </div>
                    <div className='flex-none'>
                        <Link href="/dashboard">
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Get Started
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default GetStarted;