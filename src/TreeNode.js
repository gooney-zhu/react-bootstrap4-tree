import React from 'react'
import TreeNodeContainer from './TreeNodeContainer'
import { isUndefined, isNull, isArray } from 'util';

class TreeNode extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expand: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        let text = this.props.data.text;
        let nodes = this.props.data.nodes;
        let level = this.props.level;
        let expand = this.state.expand;
        let indent = [];
        for (let i = 0; i < level; i ++) {
            indent.push(<span key={Math.random()} className='indent'></span>);
        }

        let haveChild = !isUndefined(nodes) && !isNull(nodes) && isArray(nodes) && nodes.length > 0;
        let iconExpand = expand ? <span className='icon minus'></span> : <span className='icon plus'></span>;

        return(
            <span>
                <li key={Math.random()} className='list-group-item' onClick={this.handleClick}>
                    {indent}
                    {haveChild ? iconExpand : <span></span>}
                    <span className='icon white'></span>
                    <span>{text}</span>
                </li>
                {this.state.expand ? <TreeNodeContainer key={Math.random()} data={nodes} level={level + 1}/> : <span></span>}
            </span>
        )
    }
}

export default TreeNode