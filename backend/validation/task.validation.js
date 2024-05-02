const Joi = require('joi')

const taskValidationSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.boolean().default(false)
});
const taskUpdateValidationSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.boolean()
});

module.exports = {
    taskValidationSchema,
    taskUpdateValidationSchema
}