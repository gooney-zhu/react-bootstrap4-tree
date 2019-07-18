import React from "react";
import ReactDOM from "react-dom";
import TreeView from './TreeView'

let defaultNode = 
{
    text: '',
    color: "#428BCA",
    backgroundColor: "#FFFFFF",
    showBorder: true,
    showSelect: true,
    state: {
        expanded: false,
        selected: false
    },
    nodes: [
    ]
}

let data = [
    {
        text: 'a1',
        nodes: [
            {
                text: 'a1-a1',
                nodes: []
            }
        ]
    },
    {
        text: 'a2',
        nodes: [
            {
                text: 'a2-a1',
                nodes: [
                    {
                        text: 'a2-a1-a1'
                    },
                    {
                        text: 'a2-a1-a2'
                    }
                ]
            }
        ]
    }, 
    {
        text: 'a3',
        nodes: [
            {
                text: 'a3-a1',
                nodes: [
                    {
                        text: 'a2-a1-a1',
                        nodes: [
                            {
                                text: 'a2-a1-a1'
                            },
                            {
                                text: 'a2-a1-a2'
                            }
                        ]
                    },
                    {
                        text: 'a2-a1-a2'
                    }
                ]
            },
            {
                text: 'a3-a2'
            }
        ]
    },
];

let aaa = function(value) {
    console.log(value);
}

let bbb = function(value) {
    console.log(value);
}

ReactDOM.render(
    <TreeView data={data} onExpand={aaa} onSelect={bbb}/>, 
    document.getElementById('root'));