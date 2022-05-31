import joi from "joi";

const categoriesSchema = joi.object(
    { name: joi.string().required() },
    { abortEarly: true }
);

export default categoriesSchema;
