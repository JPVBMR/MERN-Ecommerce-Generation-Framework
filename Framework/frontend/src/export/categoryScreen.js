export const categoryScreenFile = `import React, { useState } from 'react'
import { Form, Button, Row, Col, Modal } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {
  addCategory,
  getAllCategory,
  deleteCategories,
} from '../actions/categoryActions'
import { useDispatch, useSelector } from 'react-redux'
import CheckboxTree from 'react-checkbox-tree'
import 'react-checkbox-tree/lib/react-checkbox-tree.css'

const CategoriesList = (props) => {
  const categories = useSelector((state) => state.categories)
  const [categoryName, setCategoryName] = useState('')
  const [parentCategoryId, setParentCategoryId] = useState('')
  const [checked, setChecked] = useState([])
  const [expanded, setExpanded] = useState([])
  const [checkedArray, setCheckedArray] = useState([])
  const [expandedArray, setExpandedArray] = useState([])

  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  const handleClose = () => {
    dispatch(
      addCategory({
        category: categoryName,
        parentId: parentCategoryId,
      })
    )
    setCategoryName('')
    setParentCategoryId('')

    setShow(false)
  }

  const renderCategories = (categories) => {
    let myCategories = []

    for (let category of categories) {
      myCategories.push({
        label: category.category,
        value: category._id,
        children:
          category.children.length > 0 && renderCategories(category.children),
      })
    }
    return myCategories
  }

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        category: category.category,
        parentId: category.parentId,
      })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options
  }



  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)
  console.log(categories)

  const updateCheckedAndExpandedCategories = () => {
    const categoriess = createCategoryList(categories.categories)
    const checkedArray = []
    const expandedArray = []
    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categoriess.find(
          (category, _index) => categoryId === category.value
        )
        category && checkedArray.push(category)
      })
    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categoriess.find(
          (category, _index) => categoryId === category.value
        )
        category && expandedArray.push(category)
      })
    setCheckedArray(checkedArray)
    setExpandedArray(expandedArray)
  }

  const deleteCategory = () => {
    updateCheckedAndExpandedCategories()
    setDeleteCategoryModal(true)
  }

  const deleteCategoriesAqui = () => {
    const checkedIdsArray = checkedArray.map((item, index) => ({
      _id: item.value,
    }))
    const expandedIdsArray = expandedArray.map((item, index) => ({
      _id: item.value,
    }))
    const idsArray = expandedIdsArray.concat(checkedIdsArray)

    if (checkedIdsArray.length > 0) {
      dispatch(deleteCategories(checkedIdsArray)).then((result) => {
        if (result) {
          dispatch(getAllCategory())
          setDeleteCategoryModal(false)
        }
      })
    }

    setDeleteCategoryModal(false)
  }

  const renderDeleteCategoryModal = () => {
    console.log('delete', checkedArray)
    return (
      <Modal
        show={deleteCategoryModal}
        onHide={() => setDeleteCategoryModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem a certeza que quer eliminar as categorias?
          <p></p>
          {expandedArray.map((item, index) => (
            <span key={index}>{item.category}</span>
          ))}
          {checkedArray.map((item, index) => (
            <span key={index}>{item.category}</span>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={deleteCategoriesAqui}>
            Guardar alterações
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      <Row>
        <Col md={7}>
          <FormContainer>
            <Form onSubmit={handleClose}>
              <h1>Adicionar categoria</h1>

              <input
                type="text"
                className="form-control"
                value={categoryName}
                placeholder={'nome da categoria'}
                onChange={(e) => setCategoryName(e.target.value)}
              ></input>
              <p></p>
              <select
                className="form-control"
                value={parentCategoryId}
                onChange={(e) => setParentCategoryId(e.target.value)}
              >
                <option>selecionar categoria principal</option>
                {React.Children.toArray(
                  createCategoryList(categories.categories).map((option) => (
                    <option value={option.value}>{option.category}</option>
                  ))
                )}
              </select>
              <p></p>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Adicionar
              </Button>
            </Form>
          </FormContainer>
        </Col>

        <Col>
          <h1>Lista de categorias</h1>
          {/* <ul>{renderCategories(categories.categories)}</ul> */}
          <CheckboxTree
            nodes={renderCategories(categories.categories)}
            checked={checked}
            expanded={expanded}
            onCheck={(checked) => setChecked(checked)}
            onExpand={(expanded) => setExpanded(expanded)}
          />
          <p></p>
          <Col>
            <Button onClick={deleteCategory}> Apagar</Button>
          </Col>
        </Col>
      </Row>

      {renderDeleteCategoryModal()}
    </>
  )
}

export default CategoriesList
`
