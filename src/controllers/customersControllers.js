import connection from "../../database.js";

export async function listarClientes(req, res) {
    try {
        const clientes = await connection.query(`
            SELECT * FROM customers
        `);

        res.send(clientes.rows);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}

export async function buscarCliente(req , res){

    try {
        const clientes = await connection.query(`
            SELECT * FROM customers WHERE id = $1
        `, [req.params.id]);

        if(clientes.rows.length === 0){
            res.status(404).send("Cliente não encontrado");
        }else{
            res.send(clientes.rows);
        }

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}

export async function cadastrarCliente(req, res){
    
    try {
        const cliente = await connection.query(
            `
            INSERT INTO customers (name , phone , cpf , birthday)
            VALUES ($1 , $2 , $3 , $4)
            ` , 
            [req.body.name , req.body.phone , req.body.cpf , req.body.birthday]
        );

        res.sendStatus(201);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
    //res.send("OK");
}