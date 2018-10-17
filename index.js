import axios from 'axios';
import Navigo from 'navigo';
import { styler,timeline,tween } from 'popmotion';
import Navigation from './Components/navigation';
import Header from './Components/Header';
import Content from './Components/Content';
import * as State from './store/';
import store from './store/Store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var store;

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

store = new Store(State);

function render(state){
    var state = store.getState();
    
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state[state.active])}
            ${Content(state)}
            ${Footer(state[state.active])}`;

            router.updatePageLinks();
        }
        
            
        
function handleNavigation(activePage){
    store.dispatch((state)=>{
        state.active = activePage;
                
    return state;});
}

store.addStateListener(render);