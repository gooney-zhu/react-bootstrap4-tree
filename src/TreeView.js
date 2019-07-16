import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import TreeViewNode from './TreeViewNode'
import { isArray, isUndefined, isNull } from 'util';
import { MinusIcon, PlusIcon } from 'react-open-iconic-svg';

class TreeView extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            expand: true
        }
    }

    handleClick() {
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        let width = isUndefined(this.props.width) && isNull(this.props.width) ? '100%' : this.props.width;
        let height = isUndefined(this.props.height) && isNull(this.props.height) ? '100%' : this.props.height;
        let cssStyle = {
            width: width,
            height: height
        };
        let treeNodeCss = isUndefined(this.props.treeNodeCss) && isNull(this.props.treeNodeCss) ? {color: '#428BCA', cursor: 'pointer', border: 'none', padding: '0.25rem 0.5rem'} : this.props.treeNodeCss;
        let title = isUndefined(this.props.title) && isNull(this.props.title) ? '' : this.props.title;
        return(
            <div id="treeview">
                <div className="treeview" style={cssStyle}>
                    <ul className="list-group">
                        <li className="list-group-item" style={treeNodeCss}>
                            <span onClick={this.handleClick}>{this.state.expand ? <MinusIcon className="svg-icon" /> : <PlusIcon className="svg-icon" />}</span>
                            <span style={{width: '1rem', height: '1rem', marginLeft: '10px', marginRight: '5px', whiteSpace: 'nowrap', userSelect: 'none'}} onClick={this.handleClick}>
                                {title}
                            </span>
                        </li>
                        {this.state.expand ? <TreeViewNode data={this.props.data} treeNodeCss={treeNodeCss}/> : ''}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TreeView