import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts';

const Products = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const products = all_product.find((e)=> e.id === Number(productId))

  return (
    
    <div>
        <Breadcrumb product={products} />
        <ProductDisplay product={products} />
        <DescriptionBox />
        <RelatedProducts />
    </div>
  )
}

export default Products