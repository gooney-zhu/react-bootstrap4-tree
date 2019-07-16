import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import { MinusIcon, PlusIcon } from 'react-open-iconic-svg';
import TreeViewSubNode from './TreeViewSubNode'

class TreeViewNode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expand: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        let subNodes = [];
        for (let node of this.props.data) {
            subNodes.push(<TreeViewSubNode key={Math.random()} data={node} />);
        }
        return(
            <ul>
                {subNodes}
            </ul>
        )
    }
}

export default TreeViewNode