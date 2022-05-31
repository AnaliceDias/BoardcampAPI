import connection from "../../database.js";

export async function listarAlugueis(req, res) {
    let arrAlugueis = [];
    let aluguel;

    try{
        const alugueis = await connection.query(`
        SELECT rentals.* , customers.name AS "nameCustomer" , customers.phone , customers.cpf , customers.birthday , games.name AS "nameGame" , games."categoryId" , categories.name AS "categoryName"
        FROM rentals 
        JOIN customers 
            ON rentals."customerId"=customers.id 
        JOIN games 
            ON rentals."gameId"=games.id
        JOIN categories 
            ON categories.id=games."categoryId"
        `);

        alugueis.rows.map((aluguelObject) => {
            
            aluguel = {
                id: aluguelObject.id,
                customerId: aluguelObject.customerId,
                gameId: aluguelObject.gameId,
                rentDate: aluguelObject.rentDate,
                daysRented: aluguelObject.daysRented,
                returnDate: aluguelObject.returnDate,
                originalPrice: aluguelObject.originalPrice,
                delayFee: aluguelObject.delayFee,
                customer: {
                    id: aluguelObject.customerId,
                    name: aluguelObject.nameCustomer
                },
                game: {
                    id: aluguelObject.gameId,
                    name: aluguelObject.nameGame,
                    categoryId: aluguelObject.categoryId,
                    categoryName: aluguelObject.categoryName
                }
            }

            arrAlugueis.push({...aluguel});

        });
        
        res.send(arrAlugueis);

    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}

export async function listarAlugueisDeUmCliente(req , res){
    let arrAlugueis = [];
    let aluguel;
    
    try{
        const alugueis = await connection.query(`
        SELECT rentals.* , customers.name AS "nameCustomer" , customers.phone , customers.cpf , customers.birthday , games.name AS "nameGame" , games."categoryId" , categories.name AS "categoryName"
        FROM rentals 
        JOIN customers 
            ON rentals."customerId"=customers.id 
        JOIN games 
            ON rentals."gameId"=games.id
        JOIN categories 
            ON categories.id=games."categoryId"
        WHERE rentals."customerId"=$1
        `, [req.params.customerId]);

        alugueis.rows.map((aluguelObject) => {
            
            aluguel = {
                id: aluguelObject.id,
                customerId: aluguelObject.customerId,
                gameId: aluguelObject.gameId,
                rentDate: aluguelObject.rentDate,
                daysRented: aluguelObject.daysRented,
                returnDate: aluguelObject.returnDate,
                originalPrice: aluguelObject.originalPrice,
                delayFee: aluguelObject.delayFee,
                customer: {
                    id: aluguelObject.customerId,
                    name: aluguelObject.nameCustomer
                },
                game: {
                    id: aluguelObject.gameId,
                    name: aluguelObject.nameGame,
                    categoryId: aluguelObject.categoryId,
                    categoryName: aluguelObject.categoryName
                }
            }

            arrAlugueis.push({...aluguel});

        });

        res.send(arrAlugueis)    
    }catch(err){
        console.log(err);
        res.sendStatus(404);
    }
}

export async function apagarAluguel(req, res){
    res.send("OK");
}