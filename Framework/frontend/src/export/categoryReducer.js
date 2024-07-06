export const categoryReducerFile = `import { GET_CATEGORIES, CREATE_CATEGORY } from '../constants/categoryConstants'

const INITIAL_STATE = {
  categories: [],
}

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = []

  if (parentId === undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        category: category.category,

        type: category.type,
        children: [],
      },
    ]
  }

  for (let cat of categories) {
    if (cat._id === parentId) {
      const newCategory = {
        _id: category._id,
        category: category.category,

        parentId: category.parentId,
        type: category.type,
        children: [],
      }
      myCategories.push({
        ...cat,
        children:
          cat.children.length > 0
            ? [...cat.children, newCategory]
            : [newCategory],
      })
    } else {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(parentId, cat.children, category)
          : [],
      })
    }
  }

  return myCategories
}

export const categoryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      }
    case CREATE_CATEGORY:
      const category = action.payload.category
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      )
      return {
        ...state,
        categories: updatedCategories,
      }
    default:
      return state
  }
}
`
