import express, { request } from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);

//Rota: é o end completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Tipos de req:
///GET, POST, PUT, DELETE

//Request param: Parametros que vem na propria rota que identificam um recurso
// Query Param: São parametros geralmente opicionais. Que vem na propria rota.
// Request Body: Enviar dados na requisição. Mais usado Json

// termos usados pela comunidade:
// index: listar, show: exibir um, create, update e delete
