
import { useState, useEffect } from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '..ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {
    const [prodct, setProduct] = useState(null)

    const {itemId} = useParams()
    
    useEffect(() => {
        getProductById(itemId)
         .then(response => {
            setProduct(response)
         })
         .catch(error => {
            console.error(error)
         })
    }, [itemId])

    return(
        <div className='ItemDetailConetiner'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner