import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, Row, Col } from 'reactstrap';

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
        this.handleClick = this.handleClick.bind(this);
    }

    // e is the event. For example here the event is `click`. 
    // This variable has some information like: name, id etc. of the component which fired it.
    handleClick(e) {
        // Creating a duplicate of arr variable of state
        let temparr = this.state.compare.arr;
        // e.target.id returns the id of the button which fired the event.
        //This helps us in identifying the component
        let id = temparr.indexOf(e.target.id)
        //Checking if the component is already present in the arr variable or    not
        if (id !== -1) {
            //If present then remove it
            temparr.splice(id, 1)
        }
        else {
            //else push the id to the temparr
            temparr.push(e.target.id)
        }
        //setState function helps in changing the state. It can't be done    manually
        this.setState({ compare: { arr: temparr } });
    }

    render() {

        let temparr = this.state.compare.arr

        let temp = []  // Array of objects which we need to compare
        // Iterating in temparr
        for (var i = 0; i < temparr.length; i++) {
            // x is the object from `this.state.products` which has the required id
            let x = this.state.trees.find(tree => tree.id === temparr[i]);
            temp.push(x)
        }

        return (
            <div>
                <Row>
                    {this.state.trees.map((tree, index) => (
                        <Col key={tree.id} md="2" lg="2">
                            <Card body outline engine="primary">
                                <img height="120px" width="240px" src={require("../assets/images/placeholder.JPG")} alt={tree.name} />
                                <CardTitle>{tree.name}</CardTitle>
                                <Button type="button" id={tree.id} onClick={this.handleClick}>Compare</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Col md="12" lg="12">
                <Table className="treeTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    {temp.map((tree) => (
                        <tbody>
                            <tr>
                                <td key="tree.name">{tree.name}</td>
                                <td key="tree.height">{tree.height}</td>
                                <td key="tree.age">{tree.age}</td>
                            </tr>
                        </tbody>

                    ))}
                </Table>
                </Col>
            </div>
        )
    }
}

export default Trees;