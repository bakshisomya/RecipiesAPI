const joi = require('joi');

exports.recipevalidator = (body)=>{
    const joiSchema = joi.object({
        dish : joi.string().min(4).required().messages({
            'string.base' : `{#key} should be a type of text`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
        }),
        chef: joi.string().min(4).required().messages({
            'string.base' : `{#key} should be a type of text`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
        }),
        image: joi.string().required().messages({
            'string.base' : `{#key} should be a type of text`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
        }),
        description: joi.string().min(8).required().messages({
            'string.base' : `{#key} should be a type of text`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
        }),
        ingredientArray: joi.required(),
    })
    return joiSchema.validate(body, { abortEarly: false });
}