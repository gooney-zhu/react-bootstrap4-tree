import React from 'react'
import './TreeView.css'
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
            <ul className="list-group">
                {subNodes}
            </ul>
        )
    }
}

export default TreeViewNode