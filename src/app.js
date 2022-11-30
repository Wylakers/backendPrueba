import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import usuarioRoutes from "./routes/usuario.routes.js";
import detalleRoutes from "./routes/detalle.routes.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import preArmadoRoutes from "./routes/preArmado.routes.js";
import preArmado_Producto from "./models/PreArmado-Producto.js";

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(usuarioRoutes);
app.use(detalleRoutes);
app.use(categoriaRoutes);
app.use(productoRoutes);
app.use(preArmadoRoutes);

export default app;
