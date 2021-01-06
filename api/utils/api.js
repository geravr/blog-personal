const { sanitizeEntity } = require("strapi-utils");

// Helper to add owner user in sanitizedEntity
const withOwnerUser = (entity, model) => {
  const sanitizedEntity = sanitizeEntity(entity, { model: strapi.models[model] });
  const ownerUser = {
    created_by: {
      username: entity.created_by.username,
      firstname: entity.created_by.firstname,
      lastname: entity.created_by.lastname,
    },
    updated_by: {
      username: entity.updated_by.username,
      firstname: entity.updated_by.firstname,
      lastname: entity.updated_by.lastname,
    },
  };

  return { ...sanitizedEntity, ...ownerUser };
};

// Helper to get one entity by custom uniqueField
const findByUniqueField = async (ctx, model, uniqueField, withOwner = false) => {
  const uniqueFieldValue = ctx.params[uniqueField];

  const entity = await strapi.services[model].findOne({ [uniqueField]: uniqueFieldValue });
  if (withOwner) {
    return withOwnerUser(entity, model);
  }
  return entity;
};

exports.withOwnerUser = withOwnerUser;
exports.findByUniqueField = findByUniqueField;
