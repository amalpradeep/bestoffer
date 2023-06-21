import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductSkelton = () => {
  return (
    <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {[...Array(4)].map((_, i) => (
        <div class='cursor-pointer group relative' key={i}>
          <div class='w-full min-h-80  aspect-h-1 rounded-md  lg:h-80 '></div>
          <Skeleton className='h-full w-full' />
        </div>
      ))}
    </div>
  )
}

export default ProductSkelton
