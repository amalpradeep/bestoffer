import React, { useState } from 'react'
import useSWR from 'swr'

import ProductSkelton from './Skelton'
import ProductFilter from './ProductFilter'

const Products = () => {
  const [filter, setFilter] = useState()

  const { data: products, isLoading } = useSWR(
    `/products/${filter ? `/category/${filter}` : ''}`
  )

  return (
    <div>
      <div className='mt-12 flex justify-between items-center'>
        <h2 className='capitalize text-2xl font-extrabold tracking-tight text-gray-900'>
          {filter ? filter : 'All'} Products
        </h2>
        <div className='w-1/2 sm:w-56 z-10'>
          <div className='relative mt-1'>
            <ProductFilter filter={filter} setFilter={setFilter} />
          </div>
        </div>
      </div>
      {products?.length > 0 ? (
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products?.map((product, i) => (
            <div key={i} class='cursor-pointer group relative'>
              <div class='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
                <img
                  src={product?.image}
                  alt={product?.title}
                  class='w-full h-full object-center object-cover lg:w-full lg:h-full'
                />
              </div>
              <div class='mt-4'>
                <div class='w-full'>
                  <div class='w-full flex flex-center justify-between'>
                    <p class='text-sm font-medium text-gray-900'>
                      {product?.title}
                    </p>
                  </div>
                </div>
              </div>
              <h3 class='text-sm text-gray-700'>
                <p>{product?.category}</p>
              </h3>
            </div>
          ))}
        </div>
      ) : isLoading ? (
        <ProductSkelton />
      ) : (
        <p className='text-sm font-medium p-5'>No product found</p>
      )}
    </div>
  )
}

export default Products
