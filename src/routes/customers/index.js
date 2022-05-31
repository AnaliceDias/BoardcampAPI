import { Router } from "express";
import { buscarCliente, cadastrarCliente, listarClientes } from "../../controllers/customersControllers.js";
import { validarCPF, validarFormatoCliente } from "../../middlewares/customersMiddlewares.js";

const customersRouter = Router();

customersRouter.get("/customers" , listarClientes);
customersRouter.get("/customers/:id" , buscarCliente);
customersRouter.post("/customers" , validarFormatoCliente , validarCPF , cadastrarCliente);
customersRouter.put("/customers/:id" , validarFormatoCliente);

export default customersRouter;