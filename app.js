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
import ordenRoutes from "./src/routes/Orden.routes.js";
import ordenProductoRoutes from "./src/routes/Orden-Producto.routes.js";
import reviewRoutes from "./src/routes/Review.routes.js";
import tipoReviewRoutes from "./src/routes/TipoReview.routes.js";

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
app.use(ordenRoutes);
app.use(ordenProductoRoutes);
app.use(reviewRoutes);
app.use(tipoReviewRoutes);

export default app;
