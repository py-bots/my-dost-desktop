
class Bot {
    constructor(id , name , description = "some description" ,code = "12345", workspace = "xml String" ) {
        this.name = name;
        this.description = description;
        this.code = code;
        this.workspace = workspace;
        this.id = id;
    }
    static botFromJson(json) {
        return new Bot(json.id, json.name, json.description, json.code, json.workspace);
    }

}