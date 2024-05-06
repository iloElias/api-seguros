const csv = require('csv-parser');
const fs = require('fs');
const creditScoreModel = require('../model/creditScoreModel');

let data = [];
fs.createReadStream('./data/car_insurance_claim.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');
    });

exports.calculateCreditScore = (req, res) => {
    const creditScore = creditScoreModel.calculate(req.body);
    res.json({ creditScore });
};
