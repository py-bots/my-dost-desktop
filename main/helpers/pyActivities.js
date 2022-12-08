import { PythonShell } from 'python-shell';
import { Promise } from 'bluebird'; // still blown away by the fact that this was needed to make promises work here 0_0.
//const storageAct = require('./storageActivities.js'); //does not work 
//import {getBotFilePath} from './storageActivities.js'
import {app} from 'electron';
const fs = require('fs');
const path = require('path');


export async function runScript(args)  
{
    const {success,err = "Testing the Error", results} = await new Promise(
        (resolve,reject) => 
        {
            try {
                      var pyPath = args.pythonPath && args.pythonPath != '' ? args.pythonPath : args.pre_def_path;
                      let options =
                      {
                        mode: 'text',
                        pythonPath: pyPath,
                      };
                      //console.log("path is " + path);
                      PythonShell.runString(args.codeString, options, function (err, results) {
                        if (err) 
                        {
                          reject({success:false, err: [err]})
                        }
                        resolve({results:results, success:true})
                      });
                    } catch (error) {
                      //console.log("error occured " + error);
                      reject({success:false, err: [err]});
                    }

        });
        if(!success)
        {
            console.log("Error Occured"); 
            return  err;
        }
        return results; 


}

// currently the user lacks the option to select manual python path for scheduled files, the default will be used
// easy work around by passing extra parameters
export async function runScriptFile(args)  
{
    
  const {success,err = "Testing the Error", results} = await new Promise(
        (resolve,reject) => 
        {
          
            try {
                      const pre_def_path = path.join(app.getPath('home'), '..', 'Public', 'PyBOTs LLC', 'DOST', 'support', 'python.exe');
                      var pyPath = args.pythonPath && args.pythonPath != '' ? args.pythonPath : pre_def_path;
                      let options =
                      {
                        mode: 'text',
                        pythonPath: pyPath,
                      };
                      //const filePath = storageAct.getBotFilePath(args.bot_id);
                      //console.log("path is " + path);
                      //find a better way to get the file path
                     const filePath =  path.join(app.getPath('home'), '..', 'Public', 'PyBOTs LLC', 'DOST', 'py_files_folder', args.bot_id) + ".py";
                      PythonShell.run(filePath, options, function (err, results) {
                        if (err) 
                        {
                          reject({success:false, err: [err]})
                        }
                        resolve({results:results, success:true})
                      });
                    } catch (error) {
                      //console.log("error occured " + error);
                      reject({success:false, err: [err]});
                    }

        });
        if(!success)
        {
            console.log("Error Occured"); 
            return  err;
        }
        console.log("Script file ran successfully for bot "+args.bot_id + " with results "+ results);
        return results;
}

export async function saveScriptFile(args)  
{
  //shift initialization of folders to main init functions to avoid repeated checking.
  console.log("---------------");
  console.log(args); 
  console.log(fs.existsSync(path.dirname(args.py_file_path))); 
  if(!fs.existsSync(path.dirname(args.py_file_path)))
  {
    fs.mkdirSync(path.dirname(args.py_file_path), { recursive: true });
    console.log('Created directory: ' + path.dirname(args.py_file_path));
  }                                                      
    fs.writeFileSync(args.py_file_path, args.code);
    console.log("File Saved");
}

export async function deleteScriptFile(args)
{
 
  if(fs.existsSync(args.py_file_path))
  {
    fs.unlinkSync(args.py_file_path);
    console.log("File Deleted");
    return true ; 
  }
  return false;
  
}