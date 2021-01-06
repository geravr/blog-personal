"use strict";
const { withOwnerUser, findByUniqueField } = require('../../../utils/api');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.post.search(ctx.query);
    } else {
      entities = await strapi.services.post.find(ctx.query);
    }
    
    return entities.map((entity) => {
      return withOwnerUser(entity, 'post');
    }
    );
  },

  async findOne(ctx) {
    const withOwner = true;
    return findByUniqueField(ctx, 'post', 'slug', withOwner);
  },
};
