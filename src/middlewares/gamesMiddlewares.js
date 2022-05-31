import connection from "../../database.js";
import gamesSchema from "../schemas/gamesSchemas.js";

export function validarFormato(req, res , next){
    if(req.body.name === "" || req.body.stockTotal <= 0 || req.body.pricePerDay <= 0){
        res.sendStatus(400);
    }
    
    const validar = gamesSchema.validate(req.body);

    if (validar.error) {
        res.status(400).send(validar.error.details);
    }else{
        next();
    }
}

export async function validarNome(req, res , next){
    
    try{
        const busca = await connection.query(`
        SELECT * FROM games WHERE name = '${req.body.name}'
        `);
        
        if(busca.rows.length === 0){
            next();
        }else{
            res.status(409).send("Já existe um jogo com esse nome cadastrado");
        }
        
    }catch(err){
        console.log(err);
        res.sendStatus(409);
    }
}

export async function validaCategoryId(req , res , next){
    try {
        const categoria = await connection.query(`
            SELECT * FROM categories WHERE id = $1
        ` , [req.body.categoryId]);

        if(categoria.rows.length === 0){
            res.status(400).send("Você está tentando cadastrar um jogo em uma categoria inexistente.");
        }else{
            next();
        }

    }catch(err){
        console.log(err);
        res.sendStatus(400);
    }
    
}