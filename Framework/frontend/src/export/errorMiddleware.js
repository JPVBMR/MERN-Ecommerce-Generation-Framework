export const errorMiddlewareFile = `/** Section 3.5 - Custom Error Handling - Created a errorMiddleware.js file **/
/* Error to when the user selects any Route (URL) that it's not defined ex. {{DOMAIN_NAME}}/api/asdasdasd */
const notFound = (req, res, next) => {
    const error = new Error(\`The requested URL was not found - \${req.originalUrl}\`)
    res.status(404)
    next(error)
}


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode //If we capture a (errorcode = 200) we set it to 500 otherwise we stick with what we capture
    res.status(statusCode)
    /** Define the response structure to this error as json **/ 
    res.json({
      message: err.message,
      stack : process.env.NODE_ENV === 'production' ? null : err.stack, /** See the Error Stack if the Enviornment != Production **/
    })
}

export {notFound, errorHandler}`
