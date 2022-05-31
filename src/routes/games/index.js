import { Router } from "express";
import { inserirJogo, listarJogos } from "../../controllers/gamesControllers.js";
import { validaCategoryId, validarNome, validarFormato } from "../../middlewares/gamesMiddlewares.js";

const gamesRouter = Router();

gamesRouter.get("/games" , listarJogos);
gamesRouter.post("/games" , validarFormato , validarNome , validaCategoryId , inserirJogo);

export default gamesRouter;