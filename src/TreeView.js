import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import TreeViewNode from './TreeViewNode'
import { isArray, isUndefined, isNull } from 'util';

class TreeView extends React.Component {
    render() {
        let isShow =  !isUndefined(this.props.data) && !isNull(this.props.data) && isArray(this.props.data)
        return(
            <div id="treeview">
                <div className="treeview">
                    <ul className="list-group">
                        {isShow ? <TreeViewNode data={this.props.data} /> : ''}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TreeView