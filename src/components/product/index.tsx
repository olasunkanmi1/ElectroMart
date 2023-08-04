import { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { logo } from '@public'
import { Product } from '@types'
import { useAppSelector } from '@redux'
import {GridType, ListType} from './type';

const Product = ({product, homepage}: Product) => {
    const { isList } = useAppSelector(({layout}) => layout)


    const propsToSend = {
        product,
        homepage
    }

  return (
    <>
        <div className='hidden ls:block'>
            { isList ? (
                <ListType options={propsToSend} />
            ) : (
                <GridType options={propsToSend} />
            ) }
        </div>

        <div className='block ls:hidden'> <GridType options={propsToSend} /> </div>
      </>
  )
}

export default Product