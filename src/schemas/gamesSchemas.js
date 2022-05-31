import joi from "joi";

const gamesSchema = joi.object(
    {
    name: joi.string().required(),
    image: joi.string().required(),
    stockTotal: joi.number().required(),
    categoryId: joi.number().required(),
    pricePerDay: joi.number().required()
    },
    { abortEarly: true }
);

export default gamesSchema;