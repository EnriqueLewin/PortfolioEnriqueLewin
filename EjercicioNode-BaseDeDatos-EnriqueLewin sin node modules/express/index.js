const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookRouter = require('./routes/book');
const categoryRouter = require('./routes/category');
const countryRouter = require("./routes/country");
const departmentRouter = require("./routes/department");
const loanRouter = require("./routes/loan");
const userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.use("/books", bookRouter);
app.use("/categories", categoryRouter);
app.use("/countries", countryRouter);
app.use("/department", departmentRouter);
app.use("/loans", loanRouter);
app.use("/users", userRouter);


app.get('/', (req, res) =>{
    res.send('Servidor Funcionando')
});

app.listen(4002, () =>{
    console.log('Hola soy un servidor funcionando')
});