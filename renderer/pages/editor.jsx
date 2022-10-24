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


function Next() {
  //TODO  : this can be simplified later, find cause of bot.attribute = some_thing results in bot = attribute
     const [xml, setXml] = useState(ConfigFiles.INITIAL_XML);
     var [bot,setBot] = useState({});
     useEffect(() => {
      console.log("usefee")
      console.log(JSON.parse(localStorage.getItem('bot')))
      // botData = JSON.parse(localStorage.getItem('bot'));
      setBot(JSON.parse(localStorage.getItem('bot')));
      bot.workspace = JSON.parse(localStorage.getItem('bot')).workspace; 
      console.log(bot.workspace);
      if(bot.workspace != ''){
        console.log("Setting xml as per bot");
        setXml(bot.workspace);
      }
      else
      {
        console.log("Setting xml as per config");
        bot = {...JSON.parse(localStorage.getItem('bot')), workspace: ConfigFiles.INITIAL_XML};
        console.log(bot)
        setXml(ConfigFiles.INITIAL_XML);
        setBot(bot);
      }
    
     }, []);
     const updateWorkspace = async (workspace) => {
      console.log("Updating workspace");
      setXml(workspace);
      console.log(bot);
      var initialWorkspace = bot.workspace;
   
      bot.workspace = workspace;
      if(initialWorkspace != bot.workspace){
        console.log("workspace changed .test passed");
      }
      else
      {
        console.log("Workspace bug");
      }
      setBot(bot);
  }
  const saveWorkspace = async () => {
      console.log("Saving workspace");
      setBot(JSON.parse(localStorage.getItem('bot')));
      bot = {...bot, workspace: xml};
      console.log(bot);
      await updateDBBot(bot);
  }
   
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript-tailwindcss)</title>
      </Head>
        <div className='mt-1 w-full flex-wrap flex justify-center' onClick= {(e) => saveWorkspace()} >
        <Link href='/dashboard'>
          <a className='btn-blue'>Go to Dashboard</a>
        </Link>

      </div>
        <BlocklyWorkspace
      className="h-screen" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={updateWorkspace} //updateWorkspace here instead
    />
    </React.Fragment>
  )
}

export default Next;
