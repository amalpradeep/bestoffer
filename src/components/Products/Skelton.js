import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductSkelton = () => {
  return (
    <div className='grid grid-cols-1 mt-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {[...Array(8)].map((_, i) => (
        <div class='cursor-pointer group relative' key={i}>
          <div class='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
            <Skeleton className='h-full w-full' />
          </div>
          <div class='mt-4'>
            <div class='w-full'>
              <Skeleton className='mt-2 h-6 w-full' />
            </div>
          </div>
          <div class='w-full'>
            <Skeleton className='mt-2 h-6 w-1/2' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSkelton
