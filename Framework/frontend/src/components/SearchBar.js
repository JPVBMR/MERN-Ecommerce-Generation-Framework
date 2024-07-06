import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchString, setSearchString] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (searchString.trim()) {
      navigate(`/search/${searchString}`)
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <Table bordered responsive className='table-sm mt-4'>
        <thead>
          <tr>
            <th>
              <Form onSubmit={submitHandler} inline>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text' onClick={submitHandler}>
                      <i className='fas fa-search'></i>
                    </span>
                  </div>
                  <Form.Control
                    type='text'
                    name='q'
                    onChange={(e) => setSearchString(e.target.value)}
                    placeholder='Search Products...'
                    className='ml-0 border-0' // Remove default border
                  />
                </div>
              </Form>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  )
}

export default SearchBar
