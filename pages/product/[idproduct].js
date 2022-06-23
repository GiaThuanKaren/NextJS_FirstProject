import React from 'react'
import {useRouter} from "next/router"
function DetailProduct() {
    const router=useRouter()
    const { idproduct}=router.query
    return (
        <div>
            <h1>Detail for product  {idproduct}</h1>
        </div>
    )
}

export default DetailProduct
