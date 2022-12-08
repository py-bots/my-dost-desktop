import React, { useEffect, useState, useRef } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, Paper, Typography } from '@mui/material';
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
import '../editor/BlocksData';
import { updateDBBot } from '../components/db-components';
import { runCodeString } from '../components/coderun-components';
import electron from 'electron';


const ipcRenderer = electron.ipcRenderer || false;

function Next() {

  const { getPrompt } = usePromptDialog();
  const [xml, setXml] = useState(ConfigFiles.INITIAL_XML);
  var [bot, setBot] = useState({});
  const [pythonCode, setPythonCode] = useState("");
  const [search, setSearch] = useState(false)
  const [outputOpen, setOutputOpen] = useState(false)
  const [pythonError, setPythonError] = useState(false)
  const [pythonOutput, setPythonOutput] = useState("")
  const [pythonPath, setPythonPath] = useState("")
  const [pathFound, setPathFound] = useState(false)

  useEffect(() => {

    setBot(JSON.parse(localStorage.getItem('bot')));
    setPythonCode(JSON.parse(localStorage.getItem('bot')).code)
    setXml(JSON.parse(localStorage.getItem('bot')).workspace || ConfigFiles.INITIAL_XML);
    bot.workspace = JSON.parse(localStorage.getItem('bot')).workspace;
    if (bot.workspace != '') {
      //console.log("loading workspace from bot");
      //console.log(bot.workspace);
      setXml(bot.workspace);
      setBot(bot)
    }
    else {
      bot = { ...JSON.parse(localStorage.getItem('bot')), workspace: ConfigFiles.INITIAL_XML };
      setXml(ConfigFiles.INITIAL_XML);
      setBot(bot);
    }
    Blockly.prompt = function (msg, defaultValue, callback) {
      getPrompt({
        title: msg,
        label: "Enter value",
        value: defaultValue,

      }).then((value) => {
        callback(value);
      }).catch((err) => {
        callback(null);
      });
    };
  }, []);

  const handleOutputClose = () => {
    setOutputOpen(false);
    setPythonError(false);
    setPythonOutput("")
  };

  const getPythonPath = () => {
    if (!pathFound) {
      ipcRenderer.invoke('get-python-path').then((result) => {
        setPythonPath(result)
        setPathFound(true)
      }
      )
    }
  }
  const updateWorkspace = async (workspace) => {
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const complete_code = Blockly.Python.workspaceToCode(workspace);
    setPythonCode(complete_code);
  }
  //bot workspace is actually the xml
  const updateXml = async (workspace) => {
    // console.log("called")

    if (workspace == '<xml xmlns="https://developers.google.com/blockly/xml"></xml>' || workspace == '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>') {
      // console.log(JSON.parse (localStorage.getItem('bot')).workspace)
      setXml(JSON.parse(localStorage.getItem('bot')).workspace);
      // console.log("Actual xml "+ xml)
      return;
    };
    //console.log("Onside update xml" + workspace);
    setXml(workspace);
    bot.workspace = workspace;
    setBot(bot);
    console.log(pythonCode)
    bot = { ...JSON.parse(localStorage.getItem('bot')), workspace: xml, code: pythonCode, timeStamp: new Date().toLocaleString() };
    console.log("Update BOt : " + bot);
    await updateDBBot(bot);
  }

  const runCodeScript = async () => {
    var results = await runCodeString(pythonCode, pythonPath);
    setPythonOutput(results);
    if (results && results[results.length - 1] == "Error") {
      setPythonError(true);
    }
    else {
      setPythonError(false);
    }

    if (results) {
      setOutputOpen(true);
    }

  }



  return (
    <React.Fragment>


      <div className='bg-background flex flex-col justify-center p-1'>
        <div className='flex flex-row-reverse justify-center p-1 gap-2'>
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
        <div className='flex flex row gap-2 justify-center'>

          <Paper elevation={3} className='grow'>
            {pythonPath && pythonPath.length > 0 && (
              <div className='flex flex-row justify-center p-1'>
                <div className='flex flex-row justify-center p-1'>
                  <Typography variant="h6" color="primary">
                    Python Path:
                  </Typography>
                </div>
                <div className='flex flex-row justify-center p-1'>

                  <Typography variant="h6" color="primary">
                    {pythonPath}
                  </Typography>
                </div>
              </div>
            ) || (
                <div className='flex flex-row justify-center p-1'>
                  <div className='flex flex-row justify-center p-1'>
                    <Typography variant="h6" color="primary">
                      Python Path:
                    </Typography>
                  </div>
                  <div className='flex flex-row justify-center p-1'>

                    <Typography variant="h6" color="primary">
                      Default
                    </Typography>
                  </div>
                </div>
              )}

          </Paper>
          <Button color="primary" variant='outlined' onClick={getPythonPath}>


            Browse
          </Button>
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
          <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={outputOpen}
            onClose={handleOutputClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">{pythonError ? "Error" : "Output"}</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText
                id="scroll-dialog-description"
                tabIndex={-1}
              >
                {pythonOutput && pythonOutput.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleOutputClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>

      </div>
    </React.Fragment>
  )

}

export default Next;
