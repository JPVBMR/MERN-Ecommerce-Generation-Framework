import React from 'react'
import { Button, Card, Col, FormLabel, Row } from 'react-bootstrap'
import Switch from '../components/Switch'
import StatisticsScreenPreview from '../previews/StatisticsScreenPreview'
import ProductListScreenPreview from '../previews/ProductListScreenPreview'
import ColorPicker from '../components/ColorPicker'

const AdminFeatureSelectorCard = (props) => {
  const {
    title,
    showCartIcon,
    includeProductListScreen,
    setIncludeProductListScreen,
    navbar,
    setNavbar,
    footer,
    setFooter,
    rodape,
    setRodape,
    darkmode,
    setDarkMode,
    color,
    setColor,
    tamanhoimagem,
    setTamanhoImagem,
    productlist,
    setproductlist,
    marca,

    showAppBarInStatistics,
    setShowAppBarInStatistics,
    previewStatistics,
    setPreviewStatistics,

    includeStatisticsScreen,
    setIncludeStatisticsScreen,
    expandAdminUserPages,
    setExpandAdminUserPages,
  } = props

  const renderProductListSection = () => {
    return (
      <>
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>
              <h2>
                <Switch
                  isToggled={includeProductListScreen}
                  onToggle={() =>
                    setIncludeProductListScreen(!includeProductListScreen)
                  }
                ></Switch>{' '}
                Product List Page
              </h2>
            </Card.Title>
            <Card.Text>
              To include the Product List Page, simply check the corresponding
              checkbox. This page shows the list of products in the database and
              displays the id, name, price and brand. It also includes an inline
              button for each product in order to edit or delete the
              corresponding product.
            </Card.Text>
            <Switch
              isToggled={navbar}
              onToggle={() => setNavbar(!navbar)}
            ></Switch>

            <FormLabel>Include navigation bar</FormLabel>

            <p></p>
            <div>
              <Switch
                isToggled={footer}
                onToggle={() => setFooter(!footer)}
              ></Switch>
              <FormLabel>Add footer</FormLabel>
            </div>

            {footer && (
              <div className='listagem'>
                <FormLabel>Footer text</FormLabel>
                <input
                  type='text'
                  onChange={(e) => setRodape(e.target.value)}
                ></input>
              </div>
            )}

            <p></p>
            <Switch
              isToggled={darkmode}
              onToggle={() => setDarkMode(!darkmode)}
            ></Switch>
            <FormLabel>Darkmode </FormLabel>

            <p></p>
            <FormLabel>Button Color</FormLabel>
            <ColorPicker
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></ColorPicker>
            <p></p>
            <FormLabel className='mr-3'>Image size</FormLabel>
            <input
              type='tamanhoimagem'
              placeholder='Introduza tamanho'
              value={tamanhoimagem || ''}
              onChange={(e) => setTamanhoImagem(e.target.value)}
            ></input>

            <p></p>

            <Button onClick={() => setproductlist(!productlist)}>
              {!productlist ? 'Preview' : 'Hide'}
              {!productlist ? (
                <svg
                  className='ml-2'
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 1024 1024'
                  height='1.5em'
                  width='1.5em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                </svg>
              ) : (
                <svg
                  className='ml-2'
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 1024 1024'
                  height='1.5em'
                  width='1.5em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
                  <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
                </svg>
              )}
            </Button>
            <p></p>
            {productlist && (
              <>
                <ProductListScreenPreview
                  tamanhoimagemscreen={tamanhoimagem}
                  colorteste={color}
                  marcascreen={marca}
                  darkmodescreen={darkmode}
                  navbar={navbar}
                  footer={footer}
                  rodape={rodape}
                  colorBtn={color}
                  tamanhoimagem={tamanhoimagem}
                  showCartIcon={showCartIcon}
                  title={title}
                ></ProductListScreenPreview>
              </>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }

  const renderStatisticsSection = () => {
    return (
      <>
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>
              <h2>
                <Switch
                  isToggled={includeStatisticsScreen}
                  onToggle={() =>
                    setIncludeStatisticsScreen(!includeStatisticsScreen)
                  }
                ></Switch>{' '}
                Statistics Page
              </h2>
            </Card.Title>
            <Card.Text>
              To include the Statistics Page, simply check the corresponding
              checkbox.
            </Card.Text>
            <Switch
              isToggled={showAppBarInStatistics}
              onToggle={() =>
                setShowAppBarInStatistics(!showAppBarInStatistics)
              }
            ></Switch>

            <FormLabel>Include navigation bar</FormLabel>

            <p></p>

            <Button onClick={() => setPreviewStatistics(!previewStatistics)}>
              {!previewStatistics ? 'Preview' : 'Hide'}
              {!previewStatistics ? (
                <svg
                  className='ml-2'
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 1024 1024'
                  height='1.5em'
                  width='1.5em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                </svg>
              ) : (
                <svg
                  className='ml-2'
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 1024 1024'
                  height='1.5em'
                  width='1.5em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
                  <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
                </svg>
              )}
            </Button>
            <p></p>
            {previewStatistics && (
              <StatisticsScreenPreview
                showAppBarInStatistics={showAppBarInStatistics}
                showCartIcon={showCartIcon}
                title={title}
              />
            )}
          </Card.Body>
        </Card>
      </>
    )
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 24 24'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z'></path>
                </g>
              </svg>
              <span className='ml-3'>Admin Features</span>
            </h2>
          </Card.Title>

          <Card.Text>
            In this section you can add the Product List, Orders List and Users
            List pages to your application. Those pages are only available for
            admin users and let you interact with the records of our database
            collections.
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <button
                  onClick={() => setExpandAdminUserPages(!expandAdminUserPages)}
                  className='btn btn-link ml-3 mt-2'
                >
                  {expandAdminUserPages ? 'Show Less' : 'Show More'}

                  {expandAdminUserPages ? (
                    <svg
                      className='ml-2'
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.5em'
                      width='1.5em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#2196F3'
                        points='5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12'
                      ></polygon>
                    </svg>
                  ) : (
                    <svg
                      className='ml-2'
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.5em'
                      width='1.5em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#2196F3'
                        points='43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36'
                      ></polygon>
                    </svg>
                  )}
                </button>
              </Col>
            </Row>
          </Card.Text>

          {expandAdminUserPages && (
            <>
              {/* PRODUCT LIST PAGE */}
              {renderProductListSection()}
              {/* USER LIST PAGE  [TO BE DEFINED] */}
              {/* renderUSERListSection() */}
              {/* STATISTICS  [TO BE DEFINED] */}
              {renderStatisticsSection()}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default AdminFeatureSelectorCard
