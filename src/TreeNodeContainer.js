import React from 'react'
import TreeNode from './TreeNode'
import { isUndefined, isNull, isArray } from 'util';

class TreeViewNode extends React.Component {

    render() {
        let data = this.props.data;
        let nodes = [];
        if (!isUndefined(data) && !isNull(data) && isArray(data) && data.length > 0) {
            for (let node of data) {
                nodes.push(<TreeNode key={Math.random()} data={node} level={this.props.level}/>);
            }
        }
        return(
            <span>{nodes}</span>
        )
    }
}

export default TreeViewNode