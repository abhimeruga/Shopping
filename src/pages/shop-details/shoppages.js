import React, { Component } from 'react'
import SHOP_DATA from './shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
export class ShopPages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collection : SHOP_DATA
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.collection.map(collection=>{
                        return(
                            <CollectionPreview collection = {collection}/>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default ShopPages
