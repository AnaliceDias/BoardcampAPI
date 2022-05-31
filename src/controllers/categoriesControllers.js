import connection from "../../database.js"

export async function listarCategorias(req , res){
    try {
        const categorias = await connection.query(`
            SELECT * FROM categories
        `);

        res.send(categorias.rows);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}

export async function inserirCategoria(req, res) {
    
    try{
        const categoria = await connection.query(
            `
            INSERT INTO categories (name) VALUES ($1)
            ` , 
            [req.body.name]
        );

        res.sendStatus(201);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}