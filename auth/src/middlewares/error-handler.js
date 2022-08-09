

const errorHandler = (err, req, res, next) => {
  console.error(err)
  if(err instanceof Error) {
    return res.status(err.statusCode || 500).send({
      message: err.message || 'something went wrong'
    })
  }
}


module.exports = {
  errorHandler
}