const express = require('express');
const app = express();
const products = require('./data.js');
const PORT = process.env.PORT || 5174;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
    let dataList = products;
    if (dataList && !Array.isArray(dataList) && Array.isArray(dataList.products)) {
        dataList = dataList.products;
    } else if (Array.isArray(dataList) && dataList.length === 1 && dataList[0] && Array.isArray(dataList[0].products)) {
        dataList = dataList[0].products;
    }
    res.json(dataList);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
