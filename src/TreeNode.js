import React from 'react'
import TreeText from './TreeText'
import { isUndefined, isNull, isArray, isFunction } from 'util';

class TreeNode extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        let tree = [];
        for (let node of this.props.nodes) {
            let haveChild = !isUndefined(node.nodes) && !isNull(node.nodes) && isArray(node.nodes) && node.nodes.length > 0;
            if (haveChild) {
                tree.push(<TreeNode key={Math.random()} title={node.title} nodes={node.nodes} onClick={this.props.onClick}/>);
            } else {
                tree.push(<TreeText key={Math.random()} title={node.title}/>);
            }
        }

        this.state = {
            expand: false,
            tree: tree
        }
    }

    handleClick() {
        let expand = !this.state.expand;
        this.setState({
            expand: expand
        });
        if (!isUndefined(this.props.onClick) && !isNull(this.props.onClick) && isFunction(this.props.onClick)) {
            this.props.onClick({
                title: this.props.title,
                expand: expand
            });
        }
    }

    render() {
        return(
            <li>
                <span className={this.state.expand ? 'caret caret-down' : 'caret'} onClick={this.handleClick}>{this.props.title}</span>
                <ul className={this.state.expand ? 'active' : 'nested'}>
                    {this.state.tree}
                </ul>
            </li>
        )
    }
}

export default TreeNode