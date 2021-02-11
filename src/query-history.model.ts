export class QueryHistory{
    time: string;
    page: number;
    name: string;
    constructor(queryHistory:{time:string, page:number, name:string}){
        this.time = queryHistory.time;
        this.page = queryHistory.page;
        this.name = queryHistory.name;
    }
}