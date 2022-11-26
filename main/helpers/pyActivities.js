import { PythonShell } from 'python-shell';
import { Promise } from 'bluebird'; // still blown away by the fact that this was needed to make promises work here 0_0.


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
