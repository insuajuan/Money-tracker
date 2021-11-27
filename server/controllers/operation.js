const Operation = require('../models/operation');

module.exports.newOperation = async (req, res) => {
    try {
        console.log(req.user.id);
        const { expense, description, amount, date } = req.body;
        const Correctdate = new Date(date);
        const operation = await Operation.create({expense: expense, description: description, amount: amount, date: Correctdate})
        res.status(200).json(operation)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

module.exports.getAllOperations = async (req, res) => {
    try {
        const operations = await Operation.findAll({where: {id: req.user.id}});
        res.status(200).json(operations)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

module.exports.getOperationById = async (req, res) => {
    try {
        const operation = await Operation.findOne({where: {userId: req.user.id, id: req.params.op_id}});
        res.status(200).json(operation)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
};

module.exports.updateOperationById = async (req, res) => {
    try {
        const { expense, description, amount, date } = req.body;
        const Correctdate = new Date(date);
        const operation = await Operation.update(
            {where: {userId: req.user.id, id: req.params.op_id}},
            {expense: expense, description: description, amount: amount, date: Correctdate});
        
        res.status(200).json(operation)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }  
};

module.exports.deleteOperationById = async (req, res) => {
    try {
        const operation = await Operation.destroy({where: {userId: req.user.id, id: req.params.op_id}});
        res.status(200).json(operation)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }  
};