import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import usuarioRoutes from "./routes/Usuario.routes.js";
import detalleRoutes from "./routes/Detalle.routes.js";
import categoriaRoutes from "./routes/Categoria.routes.js";
import productoRoutes from "./routes/Producto.routes.js";
import preArmadoRoutes from "./routes/PreArmado.routes.js";
import preArmadoProductoRoutes from "./routes/PreArmado-Producto.routes.js";
import reporteRoutes from "./routes/Reporte.routes.js";

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
