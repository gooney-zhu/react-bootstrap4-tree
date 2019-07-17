import React from 'react'
import './TreeView.css'
import 'bootstrap/dist/css/bootstrap.css'

class TreeView extends React.Component {
    render() {
        return(
            <div id='treeview' className='treeview'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='indent'></span>
                        <span className='icon plus'></span>
                        <span className='icon white'></span>
                        <span>aaa</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='indent'></span>
                        <span className='indent'></span>
                        <span className='icon minus'></span>
                        <span className='icon black'></span>
                        <span>aaa</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TreeView