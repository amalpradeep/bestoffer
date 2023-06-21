import React from 'react'
import useSWR from 'swr'
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

import Filter from '../Icons/Filter'
import Check from '../Icons/Check'

const ProductFilter = ({ filter, setFilter }) => {
  const { data: categories } = useSWR('/products/categories')

  return (
    <Menu className='w-52'>
      <MenuButton>
        <div className='w-52 shadow-md rounded-lg flex justify-between capitalize text-sm px-4 py-2'>
          {filter ? filter : 'All'} <Filter />
        </div>
      </MenuButton>
      <MenuList className='slide-down w-52 absolute bg-white shadow-lg rounded-lg py-1 text-sm'>
        <MenuItem
          className='capitalize px-3 hover:bg-purple-200 py-2 cursor-pointer'
          onSelect={() => setFilter('')}
        >
          <div className='flex'>
            <div className='w-8'>{!filter && <Check />}</div>
            All
          </div>
        </MenuItem>
        {categories?.map((category, i) => (
          <MenuItem
            key={i}
            className='capitalize px-3 hover:bg-purple-200 py-2 cursor-pointer'
            onSelect={() => setFilter(category)}
          >
            <div className='flex'>
              <div className='w-8'>{filter === category && <Check />}</div>
              {category}
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default ProductFilter
