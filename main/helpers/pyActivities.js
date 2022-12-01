import { PythonShell } from 'python-shell';
import { Promise } from 'bluebird'; // still blown away by the fact that this was needed to make promises work here 0_0.
const fs = require('fs');
const path = require('path');
//test error handling later here. 
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


export async function runScriptFile(args)  
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
                      PythonShell.run(args.filePath, options, function (err, results) {
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