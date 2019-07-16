import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import TreeViewNode from './TreeViewNode'
import { isArray, isUndefined, isNull } from 'util';

class TreeView extends React.Component {
    render() {
        let isShow =  !isUndefined(this.props.data) && !isNull(this.props.data) && isArray(this.props.data);
        let width = isUndefined(this.props.width) && isNull(this.props.width) ? '100%' : this.props.width;
        let height = isUndefined(this.props.height) && isNull(this.props.height) ? '100%' : this.props.height;
        let cssStyle = {
            width: width,
            height: height
        };
        return(
            <div id="treeview">
                <div className="treeview" style={cssStyle}>
                    <ul className="list-group">
                        {isShow ? <TreeViewNode data={this.props.data} /> : ''}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TreeView