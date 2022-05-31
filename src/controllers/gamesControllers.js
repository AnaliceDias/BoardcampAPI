import connection from "../../database.js"

export async function listarJogos(req , res){
    try {
        const categorias = await connection.query(`
            SELECT * FROM games
        `);

        res.send(categorias.rows);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}

export async function inserirJogo(req, res){

    try {
        const categoria = await connection.query(
            `
            INSERT INTO games (name , image , "stockTotal" , "categoryId" , "pricePerDay")
            VALUES ($1 , $2 , $3 , $4 , $5)
            ` , 
            [req.body.name , req.body.image , req.body.stockTotal , req.body.categoryId , req.body.pricePerDay]
        );

        res.sendStatus(201);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}