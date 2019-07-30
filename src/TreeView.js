import React from 'react'
import './TreeView.css'
import TreeNodeList from './TreeNodeList'
import { parseDefault, organizeTreeData, parseBoolean } from './Util'
import { isUndefined, isNull, isArray } from 'util';

class TreeView extends React.Component {

    render() {
        let data = this.props.data;
        let color = parseDefault(this.props.color, '#428BCA');
        let backgroundColor = parseDefault(this.props.backgroundColor, '#FFFFFF');
        let showBorder = parseBoolean(this.props.showBorder, true);
        let showSelect = parseBoolean(this.props.showSelect, true);
        let isShow = !isUndefined(data) && !isNull(data) && isArray(data) && data.length > 0;
        let newData = [];
        if (isShow) {
            //organize the tree data
            organizeTreeData(data, newData, 0, color, backgroundColor, showBorder, showSelect);
        }

        this.state = {
            isShow: isShow,
            data: newData
        }
        return(
            <div id='treeview' className='treeview'>
                <ul className='list-group'>
                    {this.state.isShow ? <TreeNodeList data={this.state.data} treeData={this.state.data} level={0} onExpand={this.props.onExpand} onSelect={this.props.onSelect} /> : ''}
                    <span className="tree-node"></span>
                </ul>
            </div>
        )
    }
}

export default TreeView