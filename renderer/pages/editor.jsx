import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from "next/dynamic";
const BlocklyWorkspace = dynamic(
  () => import('react-blockly').then((mod) => mod.BlocklyWorkspace),
  { ssr: false }
)
import  ConfigFiles from '../editor/constants'
import { updateDBBot } from '../components/db-components';
// import { selectedBot } from './dashboard';

function Next() {
     const [xml, setXml] = useState(ConfigFiles.INITIAL_XML);
    //   var bot = selectedBot; //TODO: localStorage is undefined here? 
    //   var botData = bot;
    //   console.log(botData);
    //   if(botData.workspace!= ''){
    //     setXml(botData.workspace);
    //   }
    //   else
    //   {
    //     bot.workspace = ConfigFiles.INITIAL_XML;
    //   }
    // const updateWorkspace = async (workspace) => {

    //     setXml(workspace);
    //     botData.workspace = workspace;
    //     localStorage.setItem('bot', JSON.stringify(botData));
    // }
    // const saveWorkspace = async () => {
    //     console.log("Saving workspace");
    //     await updateDBBot(botData);
    // }
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript-tailwindcss)</title>
      </Head>
        <div className='mt-1 w-full flex-wrap flex justify-center' /*onClick= {(e) => saveWorkspace()}*/ >
        <Link href='/dashboard'>
          <a className='btn-blue'>Go to Dashboard</a>
        </Link>

      </div>
        <BlocklyWorkspace
      className="h-screen" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml} //updateWorkspace here instead
    />
    </React.Fragment>
  )
}

export default Next;
