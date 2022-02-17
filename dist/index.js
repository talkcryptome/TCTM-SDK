
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tctm-sdk.cjs.production.min.js')
} else {
  module.exports = require('./tctm-sdk.cjs.development.js')
}
