import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import { MinusIcon, PlusIcon } from 'react-open-iconic-svg';
import { isUndefined, isNull, isArray } from 'util';
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
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        return(
            <span>
                <li className="list-group-item" style={{color: '#428BCA', cursor: 'pointer', border: 'none'}}>
                    <span onClick={this.handleClick}>{this.state.haveChild ? this.state.expand ? <MinusIcon className="svg-icon" /> : <PlusIcon className="svg-icon" /> : ''}</span>
                    <span style={{width: '1rem', height: '1rem', marginLeft: '10px', marginRight: '5px'}} onClick={this.handleClick}>
                        {this.state.title}
                    </span>
                </li>
                {this.state.haveChild && this.state.expand ? <TreeViewNode data={this.props.data.nodes}/> : ''}
            </span>
        )
    }
}

export default TreeViewSubNode