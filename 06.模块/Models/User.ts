
import {MysqlDb as SqlDB} from "../modules/db"

class User {
    name: string;

    constructor(params: {
        name: string
    }) {
        this.name = name;
    }
}

var UserDB = new SqlDB<User>()
export{
    User,
    UserDB
}
