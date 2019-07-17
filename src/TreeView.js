import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'
import TreeNodeContainer from './TreeNodeContainer'

class TreeView extends React.Component {
    render() {
        return(
            <div id='treeview' className='treeview'>
                <ul className='list-group'>
                    <TreeNodeContainer data={this.props.data} level={0}/>
                </ul>
            </div>
        )
    }
}

export default TreeView