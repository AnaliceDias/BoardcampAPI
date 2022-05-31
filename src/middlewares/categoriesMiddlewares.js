import connection from "../../database.js";
import categoriesSchema from "../schemas/categoriesSchemas.js";

export function validarFormato(req, res , next){
   if(req.body.name === ""){
        res.sendStatus(400);
    }
    
    const validar = categoriesSchema.validate(req.body);

    if (validar.error) {
        res.status(400).send(validar.error.details);
    }

    next();
}

export async function validaNome(req, res , next){
    
    try{
        const busca = await connection.query(`
        SELECT * FROM categories WHERE name = '${req.body.name}'
        `);
        
        if(busca.rows.length === 0){
            next();
        }else{
            res.status(409).send("Esse nome de categoria já foi registrado. Por favor, escolha um novo nome");
        }
        
    }catch(err){
        console.log(err);
        res.sendStatus(409);
    }
}