const CustomAPIError = require('./custom-error')
const {StatusCodes, BAD_REQUEST} = require('http-status-codes')

class BadRequest extends CustomAPIError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest
