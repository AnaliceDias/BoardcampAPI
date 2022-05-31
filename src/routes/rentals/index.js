import { Router } from "express";
import { apagarAluguel, listarAlugueis, listarAlugueisDeUmCliente } from "../../controllers/rentalsControllers.js";
import { validarFormato, verificarDevolucao } from "../../middlewares/rentalsMiddlewares.js";


const rentalsRouter = Router();

rentalsRouter.get("/rentals" , listarAlugueis);
rentalsRouter.get("/rentals/:customerId" , listarAlugueisDeUmCliente);
rentalsRouter.post("/rentals" , validarFormato);
rentalsRouter.post("/rentals/:id/return");
rentalsRouter.delete("/rentals/:id" , verificarDevolucao , apagarAluguel);

export default rentalsRouter;