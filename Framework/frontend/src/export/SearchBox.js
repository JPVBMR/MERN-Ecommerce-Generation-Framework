export const SearchBoxFile = `import React, { useState } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
import { Routes, useNavigate } from 'react-router-dom'


const SearchBox = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      console.log('dentro')
      navigate('/productlist', { state: { keyword: keyword } })
    } else {
      console.log('nada')
      navigate('/productlist', { state: { keyword: '' } })
    }
    console.log(keyword)
  }

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Procurar produtos..."
        className="mr-sm-2 ms-sm-5"
      ></FormControl>
      <Button type="submit" variant="outline-light" className="p-2">
        Procurar
      </Button>
    </Form>
  )
}

export default SearchBox

`
