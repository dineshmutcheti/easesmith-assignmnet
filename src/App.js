import React from 'react'
import Header from './Header'
import Nav from './Nav'
import SearchInput from './SearchInput'
import Button from './Button'
import Nursery from './Nursery'
import Filter from './Filter'
import Product from './Product'

const App = () => {
  return(
    <div>
      <Header/>
      <Nav/>
      <SearchInput/>
      <Button/>
      <Nursery/>
      <Filter/>
      <Product/>
    </div>
    
  )
}

export default App