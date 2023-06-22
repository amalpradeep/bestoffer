import React from 'react'

const sites = [
  { id: 'ajio', image: 'ajio.png' },
  { id: 'boat', image: 'boat.png' },
  { id: 'flipkart', image: 'flipkart.png' },
  { id: 'licious', image: 'licious.png' },
  { id: 'myntra', image: 'myntra.png' },
  { id: 'pizza-hut', image: 'pizza-hut.png' },
  { id: 'pride-logo', image: 'pride-logo.png' },
  { id: 'udemy', image: 'udemy.png' },
  { id: 'wow', image: 'wow.png' }
]

const Categories = () => {
  return (
    <div className='mb-8 grid gap-y-10 gap-x-6 grid-cols-4 lg:grid-cols-6 xl:gap-x-8'>
      {sites?.map(site => (
        <div className='cursor-pointer' key={site.id}>
          <div className='group relative shadow rounded-md hover:shadow-lg'>
            <div className='w-full min-h-16 flex justify-center aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-16 lg:aspect-none'>
              <img
                src={`/img/sites/${site?.image}`}
                alt='Ajio'
                className='w-full h-full object-center object-contain lg:w-full lg:h-full'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
