import connection from "../../database.js";
import clienteSchema from "../schemas/customersSchemaCliente.js";

export function validarFormatoCliente(req , res , next) {

    if(req.body.name === "" || req.params.id <= 0){
        res.sendStatus(400);
    }

    const validar = clienteSchema.validate(req.body);

    if(validar.error){
        res.status(400).send(validar.error.details);
    }
    next();
}

export async function validarCPF(req , res , next){
    
    try{
        const busca = await connection.query(`
        SELECT * FROM customers WHERE cpf = '${req.body.cpf}'
        `);
        
        if(busca.rows.length === 0){
            next();
        }else{
            res.status(409).send("Este cpf já está cadastrado");
        }
        
    }catch(err){
        console.log(err);
        res.sendStatus(409);
    }
}