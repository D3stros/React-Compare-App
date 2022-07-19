import React, { Component } from 'react';

class Trees extends Component {
    constructor() {
        super();

        this.state = {
            trees: [{ "name": "Tree1", "img": "1.jpg", "id": 1, "height": "10m", "age": "10years" },
            { "name": "Tree2", "img": "2.jpg", "id": 2, "height": "20m", "age": "20years" },
            { "name": "Tree3", "img": "3.jpg", "id": 3, "height": "30m", "age": "30years" },
            { "name": "Tree4", "img": "4.jpg", "id": 4, "height": "40m", "age": "40years" },
            ],
            compare: {
                arr: []
            }
        }
    }

    render() {

        return (
            <div>
                <p>Hello World!</p>
            </div>
        )
    }
}

export default Trees;