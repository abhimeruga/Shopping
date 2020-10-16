import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preive.styles.scss'
function CollectionPreview(props) {
    return (
        <div>
        <h2 className='title'>{props.collection.title}</h2>
        <div className='collection-preview'>    
            {
                props.collection.items.filter((item, index) => {
                    if (index < 4 ) 
                        return item; 
                }).map(item=>{
                    return (<div className='preview' >
                        <CollectionItem item={item} />
                    </div>                        
                    )
                })
            }
        </div>
        </div>
    )
}

export default CollectionPreview
