import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import usuarioRoutes from "./src/routes/Usuario.routes.js";
import detalleRoutes from "./src/routes/Detalle.routes.js";
import categoriaRoutes from "./src/routes/Categoria.routes.js";
import productoRoutes from "./src/routes/Producto.routes.js";
import preArmadoRoutes from "./src/routes/PreArmado.routes.js";
import preArmadoProductoRoutes from "./src/routes/PreArmado-Producto.routes.js";
import reporteRoutes from "./src/routes/Reporte.routes.js";

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(usuarioRoutes);
app.use(detalleRoutes);
app.use(categoriaRoutes);
app.use(productoRoutes);
app.use(preArmadoRoutes);
app.use(preArmadoProductoRoutes);
app.use(reporteRoutes);

export default app;
