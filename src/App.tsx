import React, { Component } from 'react'
import { TodoApp } from "./TodoApp";
import Glossary from './Glossary'


class item {
    public id: number;
    public term: string;
    public description: string;

    constructor(id: number, term: string, description: string ) {
        this.id = id;
        this.term = term;
        this.description = description;
    }

}

let items: item[] = [new item(1,"math", "math is logical"), new item(2, "english", "english is universal"), new item(3, "chinese", "chinese has a long term history")]
console.log(items.map( item => item.term ))


export class App extends Component {
    render() {
        return (
            <div>
                <TodoApp />
                <Glossary items={items}></Glossary>
            </div>
        );
    }
}