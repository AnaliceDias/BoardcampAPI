import connection from "../../database.js";
import rentalSchema from "../schemas/rentalsSchema.js";

export function validarFormato(req , res , next){
    if(req.body.customerId <= 0|| req.body.gameId <= 0|| req.body.daysRented <= 0){
        res.sendStatus(400);
    }
    const validar = rentalSchema.validate(req.body);

    if (validar.error) {
        res.status(400).send(validar.error.details);
    }

    res.send("OK");
    next();
}

export async function verificarDevolucao(req, res, next) {

    try{
        const aluguel = await connection.query(`
            SELECT * FROM rentals
            WHERE id = $1
        `, [req.params.id]);

        if(aluguel.rows.length === 0){
            res.status(404).send("Aluguel inesistente");
        }else if(aluguel.rows[0].returnDate === null){
            res.status(400).send("Você não pode apagar um aluguel que não foi finalizado");
        }else{
            next();
        }
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}