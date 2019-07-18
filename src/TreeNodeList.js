import React from 'react'
import TreeNode from './TreeNode'
import { isUndefined, isNull, isArray } from 'util';

class TreeNodeList extends React.Component {

    render() {
        let data = this.props.data;
        let nodes = [];
        for (let node of data) {
            nodes.push(<TreeNode key={Math.random()} data={node} treeData={this.props.treeData} level={this.props.level} onExpand={this.props.onExpand} onSelect={this.props.onSelect} />);
        }
        return(
            <span>{nodes}</span>
        )
    }
}

export default TreeNodeList