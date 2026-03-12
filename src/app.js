import express from "express";

const app = express();
app.use(express.json());//middleware: ter acesso a requisicoes e respostas, e fazer ações nelas - encadeia esses middlewars
//requisicoes com body de json vai passar pelo middleware e parseado pra json - com body, chega como string

const livros = [
    {
        id: 1,
        titulo: "Harry Potter"
    },
    {
        id: 2,
        titulo: "Jujutsu Kaisen"
    }
];

function buscaLivros(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) =>{
    res.status(200).send("Api Node.js");//send = dados mais simples
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);//params pq é um parametro da rota - id = nome do id
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});