const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const clients = [
    { id: 1, name: "RwandanCDA", logo: "assets/img/clients/rncda.png" },
    { id: 2, name: "Connector", logo: "assets/img/clients/logo-connector-footer.png" },
    { id: 3, name: "Healthy Living", logo: "assets/img/clients/logo.png" },
    { id: 4, name: "results", logo: "assets/img/clients/logo-r.png" },
    { id: 5, name: "diabetes", logo: "assets/img/clients/diabetes.png" },
    { id: 6, name: "Healthy Living", logo: "assets/img/clients/logo.png" },
];

app.get('/clients', (req, res) => {
    res.json(clients);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});