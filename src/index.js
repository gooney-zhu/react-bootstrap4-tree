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

let aaa = function(value) {
    console.log(value);
}

ReactDOM.render(<TreeView data={data} title='MyTree' treeNodeCss={{color: '#428BCA', cursor: 'pointer', border: 'none', padding: '0.25rem 0.5rem'}} onClick={aaa}/>, document.getElementById('root'));