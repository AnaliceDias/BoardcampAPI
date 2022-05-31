import { Router } from "express";
import { inserirCategoria, listarCategorias } from "../../controllers/categoriesControllers.js";
import { validaNome, validarFormato } from "../../middlewares/categoriesMiddlewares.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories" , listarCategorias);
categoriesRouter.post("/categories" , validarFormato , validaNome , inserirCategoria);

export default categoriesRouter;
