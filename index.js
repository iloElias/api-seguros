const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const creditScoreRoutes = require('./src/routes/creditScoreRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/credit-score', creditScoreRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
