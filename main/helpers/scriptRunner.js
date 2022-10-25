import {PythonShell} from 'python-shell';

let options = 
{
    mode: 'text',
    pythonPath: 'C:\\Users\\user\\AppData\\Local\\Programs\\Python\\Python37-32\\python.exe',
    pythonOptions: ['-u'],
    scriptPath: 'C:\\Users\\user\\Desktop\\test',
    args: ['value1', 'value2', 'value3']
};

PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    console.log('results: %j', results);
}
);
exports.runScript = (id,path, args) => {
    //path can be constructed with id if file name is id based
    console.log("runScript");
    console.log(id);
    console.log(args);
    PythonShell.run(path)
}


exports.runCodeString = (codeString) => {

    console.log("runCodeString");
    PythonShell.runString(codeString)

}