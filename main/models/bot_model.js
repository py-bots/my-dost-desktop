
 class Bot {
    constructor(id, name, description = "some description", timeStamp = "",code = "Drag and drop blocks to generate code", workspace = "" , isScheduled =false) {
        this.name = name;
        this.description = description;
        this.code = code;
        this.workspace = workspace;
        this.id = id;
        this.timeStamp = timeStamp;
        this.isScheduled = isScheduled;
        this.py_file_path = "NotSet";
    }
    static botFromJson(json) {
        return new Bot(json.id, json.name, json.description, json.code, json.workspace);
    }

    setPyFilePath(path)
    {
        this.py_file_path = path;
    }

}
module.exports = Bot;