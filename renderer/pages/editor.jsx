import React, { useEffect, useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';
import dynamic from "next/dynamic";
import Blockly from 'blockly';
import Link from 'next/link';
import '@blockly/block-plus-minus';
import "blockly/python";
import { CodeBlock, vs2015 as theme } from "react-code-blocks";
const BlocklyWorkspace = dynamic(
  () => import('react-blockly').then((mod) => mod.BlocklyWorkspace),
  { ssr: false }
)
import { usePromptDialog } from "../components/PromptDialog";
import ConfigFiles from '../editor/constants'
import { updateDBBot } from '../components/db-components';
import { runCodeString } from '../components/coderun-components';
import { RestaurantRounded } from '@mui/icons-material';

function Next() {
  
  const { getPrompt } = usePromptDialog();
  const [xml, setXml] = useState(ConfigFiles.INITIAL_XML);
  var [bot, setBot] = useState({});
  const [pythonCode, setPythonCode] = useState("Drag and drop blocks to generate code");
  const [search, setSearch] = useState(false)
  useEffect(() => {
    
    setBot(JSON.parse(localStorage.getItem('bot')));
    setXml(JSON.parse(localStorage.getItem('bot')).workspace || ConfigFiles.INITIAL_XML);
    bot.workspace = JSON.parse(localStorage.getItem('bot')).workspace;
    console.log(bot.workspace == "")
    if (bot.workspace != '') {
      //console.log("loading workspace from bot");
      //console.log(bot.workspace); 
      console.log("loading workspace from bot");
      console.log(bot.workspace);
      setXml(bot.workspace);
      setBot(bot)
      
      //console.log(xml)
    }
    else {
      bot = { ...JSON.parse(localStorage.getItem('bot')), workspace: ConfigFiles.INITIAL_XML };
      setXml(ConfigFiles.INITIAL_XML);
      setBot(bot);
    }
    Blockly.prompt = function (msg, defaultValue, callback) {
      //console.log("inside prompt");
      //console.log(msg, defaultValue, callback);
      getPrompt({
        title: msg,
        label: "Enter value",
        value: defaultValue,

      }).then((value) => {
        //console.log("value", value);
        callback(value);
      }).catch((err) => {
        //console.log("err", err);
        callback(null);
      });
    };
  }, []);


  const updateWorkspace = async (workspace) => {
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const complete_code = Blockly.Python.workspaceToCode(workspace);
    setPythonCode(complete_code);
  }
 //bot workspace is actually the xml
  const updateXml = async (workspace) => {
    console.log("called")
   
    if(workspace =='<xml xmlns="https://developers.google.com/blockly/xml"></xml>' || workspace == '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>')
    {
      // console.log(JSON.parse (localStorage.getItem('bot')).workspace)
       setXml(JSON.parse (localStorage.getItem('bot')).workspace);
      // console.log("Actual xml "+ xml)
      return;
    };
    //console.log("Onside update xml" + workspace);
    console.log("update XML  -: "+ xml);
    console.log("update workspace xml -: "+ workspace);
    setXml(workspace);
    bot.workspace = workspace;
    setBot(bot);
    bot = { ...JSON.parse(localStorage.getItem('bot')), workspace: xml ,code: pythonCode,timeStamp : new Date().toLocaleString()};
    console.log(bot);
    await updateDBBot(bot);
  }
    


  const runCodeScript = async  () => {
    //console.log("Running code");
    //console.log(pythonCode);
    var results = await runCodeString(pythonCode);
    //results are not currently returning to this point 
    // check script runner js line 25 to solve this. 
    //console.log("back");
    //results of pyCode
    //console.log(JSON.stringify(results));
  }



  return (
    <React.Fragment>

      <div className='bg-background flex flex-row-reverse justify-center p-1 gap-2 '>
        <div>
          <IconButton aria-label="search" color="primary" onClick={setSearch}>
            <SearchIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="run" color="primary" onClick={runCodeScript}>
            <PlayCircleIcon />
          </IconButton>
        </div>
        <div>
          <Link href="/dashboard">
          <IconButton aria-label="back" color="primary" >
            <ArrowBackIcon />
          </IconButton>
          </Link>
        </div>
      </div>
      <div className='grid grid-col-1'>
        <div className='bg-gray-300 h-screen w-full'>
          <BlocklyWorkspace
            className="h-screen"
            toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON}
            initialXml={xml}
            onXmlChange={updateXml}
            workspaceConfiguration={ConfigFiles.WORKSPACE_THEME_DARK}
            onWorkspaceChange={updateWorkspace}
          />
        </div>
        <div className="h-fit">
          <div className=' bg-gray-900 text-gray-200'>
            <CodeBlock
              text={pythonCode}
              language={"python"}
              showLineNumbers={true}
              theme={theme}
            />
          </div>

        </div>
      </div>
    </React.Fragment>
  )

}

export default Next;
