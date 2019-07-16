import React from 'react'
import './TreeView.css'
import { MinusIcon, PlusIcon } from 'react-open-iconic-svg';
import { isUndefined, isNull, isArray, isFunction } from 'util';
import TreeViewNode from './TreeViewNode'

class TreeViewSubNode extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        let haveChild = false;
        let title = '';
        if (!isUndefined(this.props.data) && !isNull(this.props.data)) {
            title = !isUndefined(this.props.data.title) && !isNull(this.props.data.title) ? this.props.data.title : '';
            haveChild = !isUndefined(this.props.data.nodes) && !isNull(this.props.data.nodes) && isArray(this.props.data.nodes) && this.props.data.nodes.length > 0;
        }

        this.state = {
            title: title,
            haveChild: haveChild,
            expand: true
        }
    }

    handleClick() {
        let expand = this.state.haveChild && !this.state.expand;
        this.setState({
            expand: expand
        });
        if (!isUndefined(this.props.onClick) && isFunction(this.props.onClick)) {
            this.props.onClick({
                title: this.state.title,
                expand: expand
            });
        }
    }

    render() {
        return(
            <span style={{marginLeft: '10px'}}>
                <li className="list-group-item" style={this.props.treeNodeCss}>
                    <span onClick={this.handleClick}>{this.state.haveChild ? this.state.expand ? <MinusIcon className="svg-icon" /> : <PlusIcon className="svg-icon" /> : ''}</span>
                    <span style={this.props.treeTextCss} onClick={this.handleClick}>
                        {this.state.title}
                    </span>
                </li>
                {this.state.haveChild && this.state.expand ? <TreeViewNode data={this.props.data.nodes} treeNodeCss={this.props.treeNodeCss} treeTextCss={this.props.treeTextCss} onClick={this.props.onClick}/> : ''}
            </span>
        )
    }
}

export default TreeViewSubNode