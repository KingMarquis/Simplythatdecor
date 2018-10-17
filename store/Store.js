class Store{
    constructor(state){
        this.state = Object.assign({}, state);
        this.listeners = [];
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        this.listeners.forEach((listener)=> listeners());
    }

    getState(){
        return this.state;
    }
}
export default new Store(state);