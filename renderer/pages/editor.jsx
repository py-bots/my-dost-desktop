import React, { useEffect, useState, useRef } from 'react';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';
import dynamic from "next/dynamic";
import Blockly from 'blockly';
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

function Next() {
  const { getPrompt } = usePromptDialog();
  const [xml, setXml] = useState(ConfigFiles.INITIAL_XML);
  var [bot, setBot] = useState({});
  const [pythonCode, setPythonCode] = useState("Drag and drop blocks to generate code");
  const [search, setSearch] = useState(false)



  useEffect(() => {
    setBot(JSON.parse(localStorage.getItem('bot')));
    bot.workspace = JSON.parse(localStorage.getItem('bot')).workspace;

    if (bot.workspace != '') {
      setXml(bot.workspace);
    }
    else {
      bot = { ...JSON.parse(localStorage.getItem('bot')), workspace: ConfigFiles.INITIAL_XML };
      setXml(ConfigFiles.INITIAL_XML);
      setBot(bot);
    }
    Blockly.prompt = function (msg, defaultValue, callback) {
      console.log("inside prompt");
      console.log(msg, defaultValue, callback);
      getPrompt({
        title: msg,
        label: "Enter value",
        value: defaultValue,

      }).then((value) => {
        console.log("value", value);
        callback(value);
      }).catch((err) => {
        console.log("err", err);
        callback(null);
      });
    };
  }, []);


  const updateWorkspace = async (workspace) => {
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const complete_code = Blockly.Python.workspaceToCode(workspace);
    setPythonCode(complete_code);
    bot.workspace = workspace;
    setBot(bot);
  }

  const saveWorkspace = async () => {
    setBot(JSON.parse(localStorage.getItem('bot')));
    bot = { ...bot, workspace: xml };
    console.log(bot);
    await updateDBBot(bot);
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
          <IconButton aria-label="run" color="primary">
            <PlayCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="back" color="primary" onClick={() => window.location.href = '/dashboard'}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      </div>
      <div className='grid grid-col-1'>
        <div className='bg-gray-300 h-screen w-full'>
          <BlocklyWorkspace
            className="h-screen"
            toolboxConfiguration={ConfigFiles.INITIAL_TOOLBOX_JSON}
            initialXml={xml}
            onXmlChange={setXml}
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
