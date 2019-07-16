import React from "react";
import ReactDOM from "react-dom";
import TreeView from './TreeView'

let data = [
    {
        title: 'a1',
        nodes: [
            {
                title: 'a1-a1',
                nodes: []
            }
        ]
    },
    {
        title: 'a2',
        nodes: [
            {
                title: 'a2-a1',
                nodes: [
                    {
                        title: 'a2-a1-a1'
                    },
                    {
                        title: 'a2-a1-a2'
                    }
                ]
            }
        ]
    }, 
    {
        title: 'a3',
        nodes: [
            {
                title: 'a3-a1'
            },
            {
                title: 'a3-a2'
            }
        ]
    },
];

let data1 = [
    {
        title: 'root',
        nodes: [
            {
                title: 'a1',
                nodes: [
                    {
                        title: 'a1-a1',
                        nodes: []
                    }
                ]
            },
            {
                title: 'a2',
                nodes: [
                    {
                        title: 'a2-a1',
                        nodes: [
                            {
                                title: 'a2-a1-a1'
                            },
                            {
                                title: 'a2-a1-a2'
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'a3',
                nodes: [
                    {
                        title: 'a3-a1'
                    },
                    {
                        title: 'a3-a2'
                    }
                ]
            },
        ]
    }
];

ReactDOM.render(<TreeView data={data1} />, document.getElementById('root'));