const express = require('express');
const bodyParser = require('body-parser');
const professorRoutes = require('./routes/professorRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use('/api', professorRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados!');
        sequelize.sync();
    })
    .catch((error) => console.error('Erro ao conectar ao banco:', error));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
