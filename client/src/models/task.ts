class Task{
    id:string;
    task:string;
    date:string;
    color:string;
    important:string;
    constructor(id:string,task:string,date:string,color:string,important:string){
        this.id=id;
        this.task=task;
        this.date=date;
        this.color=color;
        this.important=important;
    }
}
export default Task;