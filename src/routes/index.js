import {Router} from "express";
import categoriesRouter from "./categorias/index.js";
import customersRouter from "./customers/index.js";
import gamesRouter from "./games/index.js";
import rentalsRouter from "./rentals/index.js";

const router = Router();

router.use(categoriesRouter);
router.use(gamesRouter);
router.use(customersRouter);
router.use(rentalsRouter);

export default router;