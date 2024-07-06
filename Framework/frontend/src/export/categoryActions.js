export const categoryActionsFile = `import { GET_CATEGORIES, CREATE_CATEGORY } from '../constants/categoryConstants'
import axios from 'axios'

// export const getCategories = () => async (dispatch) => {
//   try {
//     const response = await axios.get('/api/category')
//     dispatch({ type: GET_CATEGORIES, payload: response.data.categories })
//   } catch (error) {
//     console.log('categorias error', error)
//   }
// }

// export const createCategory = (formData) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//     const response = await axios.post('/api/category', formData, config)
//     dispatch({ type: CREATE_CATEGORY, payload: response.data.category })
//   } catch (error) {
//     console.log('criar categorias error', error)
//   }
// }

export const getAllCategory = () => {
  return async (dispatch) => {
    const res = await axios.get(\`/api/category\`)
    console.log(res)
    if (res.status === 200) {
      const { categoryList } = res.data

      dispatch({
        type: GET_CATEGORIES,
        payload: { categories: categoryList },
      })
    }
  }
}

export const addCategory = (form) => {
  console.log('dentro da action', form)
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(\`/api/category\`, form, config)
      if (res.status === 201) {
        dispatch({
          type: CREATE_CATEGORY,
          payload: { category: res.data.category },
        })
      }
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const deleteCategories = (ids) => {
  return async (dispatch) => {
    const res = await axios.post(\`/api/category/delete\`, { payload: { ids } })

    if (res.status === 201) {
      return true
    } else {
      return false
    }
  }
}
`
