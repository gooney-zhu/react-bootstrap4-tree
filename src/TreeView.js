import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import TreeNode from './TreeNode'
import { isUndefined, isNull, isArray } from 'util';
import TreeText from './TreeText';

class TreeView extends React.Component {
    render() {
        let isShow = !isUndefined(this.props.data) && !isNull(this.props.data) && isArray(this.props.data) && this.props.data.length > 0;
        let tree = [];
        if (isShow) {
            for (let node of this.props.data) {
                let haveChild = !isUndefined(node.nodes) && !isNull(node.nodes) && isArray(node.nodes) && node.nodes.length > 0;
                if (haveChild) {
                    tree.push(<TreeNode key={Math.random()} title={node.title} nodes={node.nodes} onClick={this.props.onClick}/>);
                } else {
                    tree.push(<TreeText key={Math.random()} title={node.title}/>);
                }
            }
        }
        return(
            <ul id="treeview">
                {tree}
            </ul>
        )
    }
}

export default TreeView