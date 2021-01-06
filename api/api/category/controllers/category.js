'use strict';
const { findByUniqueField } = require('../../../utils/api');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    return findByUniqueField(ctx, 'category', 'slug');
  },
};
