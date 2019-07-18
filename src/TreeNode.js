import React from 'react'
import TreeNodeList from './TreeNodeList'
import { isFunction } from 'util';

class TreeNode extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: this.props.data.state.expanded,
            selected: this.props.data.state.selected
        }

        this.handleExpand = this.handleExpand.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleExpand(event) {
        this.setState({
            expanded: !this.state.expanded
        });
        this.props.data.state.expanded = !this.state.expanded;
        if (isFunction(this.props.onExpand)) {
            this.props.onExpand(this.props.treeData);
        }
        event.stopPropagation();
    }

    handleSelect(event) {
        this.setState({
            selected: !this.state.selected
        });
        this.props.data.state.selected = !this.state.selected;
        if (isFunction(this.props.onSelect)) {
            this.props.onSelect(this.props.treeData);
        }
        event.stopPropagation();
    }

    render() {
        let text = this.props.data.text;
        let nodes = this.props.data.nodes;
        let level = this.props.level;
        let expanded = this.state.expanded;
        let selected = this.state.selected;
        let indent = [];
        for (let i = 0; i < level; i ++) {
            indent.push(<span key={Math.random()} className='indent'></span>);
        }

        let haveChild = nodes.length > 0;
        let iconExpanded = expanded ? <span className='icon' style={{color: '#428BCA'}}>&#x2212;</span> : <span className='icon' style={{color: '#428BCA'}}>&#x002B;</span>;
        let iconSelected = selected ? <span className='icon' style={{color: '#428BCA'}} onClick={this.handleSelect}>&#x2B1B;</span> : <span className='icon' style={{color: '#428BCA'}} onClick={this.handleSelect}>&#x2B1C;</span>;

        return(
            <span>
                <li key={Math.random()} className='list-group-item' onClick={this.handleExpand}>
                    {indent}
                    {haveChild ? iconExpanded : <span className="empty"></span>}
                    {iconSelected}
                    <span>{text}</span>
                </li>
                {expanded ? <TreeNodeList key={Math.random()} data={nodes} treeData={this.props.treeData} level={level + 1} onExpand={this.props.onExpand} onSelect={this.props.onSelect} /> : <span></span>}
            </span>
        )
    }
}

export default TreeNode