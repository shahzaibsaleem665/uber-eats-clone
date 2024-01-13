import React from 'react'
import './FoodSearch.css'
import { Search } from '@mui/icons-material'

function FoodSearch({data}) {
  return (
    <div className='foodSearch'>
        <form>
          <Search />
          <input type='text' placeholder='Food, groceries, drinks, etc .....' />
        </form>
    </div>
  )
}

export default FoodSearch