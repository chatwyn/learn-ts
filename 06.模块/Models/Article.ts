
import {MysqlDb as SqlDB} from "../modules/db"

class Article {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

var ArticleDB = new SqlDB<Article>()

export{
    Article,
    ArticleDB
}
