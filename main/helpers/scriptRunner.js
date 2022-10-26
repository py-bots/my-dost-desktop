const  {PythonShell}  = require('python-shell');



// exports.runScript = (id,path, args) => {
//     //path can be constructed with id if file name is id based
//     console.log("runScript");
//     console.log(id);
//     console.log(args);
//     PythonShell.run(path)
// }


exports.runCodeString = (codeString) => {
    console.log("runCodeString");
    var ex_results = [];
    let options = 
    {
        mode: 'text',
        pythonPath: 'C:\\Python310\\python.exe', //later to be C:\Users\Public\PyBots\My-DOST\support\python.exe
    };
    PythonShell.runString(codeString,options,function (err, results) {
        if (err) throw err;
        console.log(results)
        ex_results  = results; //how to extract this value to outer function? 
        return results; 
    });
    console.log("here");
    console.log(ex_results);
    return {"results": ex_results}; 
}



// exports.runCodeString = async function(codeString) {
//     console.log("runCodeString");
//     let options = 
//     {
//         mode: 'text',
//         pythonPath: 'C:\\Python310\\python.exe', //later to be C:\Users\Public\PyBots\My-DOST\support\python.exe
//     };
//     return new Promise((resolve, reject) => {
//         PythonShell.runString(codeString, options, (err, results) => {
//           if (err) return reject(err);
//           return resolve(results);
//         });
//       });
//     //   console.log(result) ; 
//     //   console.log(result.stdout);
//     //   return result;
// }