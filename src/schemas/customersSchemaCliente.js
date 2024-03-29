import joi from "joi";

const clienteSchema = joi.object(
    {
    name: joi.string().required(),
    phone: joi.string().pattern(/^[0-9]{10,11}$/).required(),
    cpf: joi.string().pattern(/^[0-9]{11}$/).required(),
    birthday: joi.string().pattern(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/).required()     
    },
    { abortEarly: true }
);

export default clienteSchema;