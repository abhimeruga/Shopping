import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'
function MenuItem({title, imageUrl, size, history}) {
    return (
        <div className={`${size} menu-item`} onClick={()=> {history.push('/hats')}}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} >
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subTitle'> Start shopping</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
