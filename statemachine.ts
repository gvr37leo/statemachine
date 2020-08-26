class StateMachine{
    id = 0
    currentstateid:number = null
    states = new TableMap<State>('id',[])
    edges = new TableMap<Edge>('id',['from','to'])

    constructor(

    ){
        
    }

    traverse(){

    }

    jump(targetid:number){

        var currentstate = this.states.get(this.currentstateid)
        var targetstate = this.states.get(targetid)
        currentstate.exit.trigger()
        this.currentstateid = targetid
        targetstate.enter.trigger()
        
    }

    update(dt){
        
    }
}

class Edge{
    id
    transition = new EventSystem<void>()

    constructor(
        public from:number,
        public to:number,
    ){

    }
}

class State{

    id
    machineid

    enter = new EventSystem<void>()
    update = new EventSystem<number>()
    exit = new EventSystem<void>()

    constructor(

    ){
        
    }
}