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
    customData: {

    },
    nodes: [
    ]
}

let data = [
    {
        text: 'a1',
        customData: {
            id: '1'
        },
        nodes: [
            {
                text: 'a1-a1',
                customData: {
                    id: '2'
                },
                nodes: []
            }
        ]
    },
    {
        text: 'a2',
        customData: {
            id: '3'
        },
        nodes: [
            {
                text: 'a2-a1',
                customData: {
                    id: '4'
                },
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
        customData: {
            id: '7',
            other: 'other'
        },
        nodes: [
            {
                text: 'a3-a1',
                customData: {
                    id: '9',
                    another: 'another'
                },
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

let aaa = function(node, treeData) {
    console.log(node);
    console.log(treeData);
}

let bbb = function(node, treeData) {
    console.log(node);
    console.log(treeData);
}

ReactDOM.render(
    <TreeView data={data} onExpand={aaa} onSelect={bbb}/>, 
    document.getElementById('root'));