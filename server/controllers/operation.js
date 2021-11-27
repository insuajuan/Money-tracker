const { sequelize, User, Operation } = require('../models');

module.exports.newOperation = async (req, res) => {
    try {
        const user = await User.findOne({ where: { uuid: req.user.id } });
        const { expense, description, amount, date } = req.body;
        const Correctdate = new Date(date);
        const operation = await Operation.create({userId: user.id, expense: expense, description: description, amount: amount, date: Correctdate})
        res.status(200).json(operation)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

module.exports.getAllOperations = async (req, res) => {
    try {
        const user = await User.findOne({ where: { uuid: req.user.id } });
        const operations = await Operation.findAll({where: {userId: user.id}});
        res.status(200).json(operations)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

module.exports.getOperationById = async (req, res) => {
    try {
        const user = await User.findOne({ where: { uuid: req.user.id } });
        const operation = await Operation.findOne({where: {userId: user.id, uuid: req.params.op_id}});
        res.status(200).json(operation)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
};

module.exports.updateOperationById = async (req, res) => {
    try {
        const user = await User.findOne({ where: { uuid: req.user.id } });
        const { expense, description, amount, date } = req.body;
        const Correctdate = new Date(date);
        const operation = await Operation.update(
            {expense: expense, description: description, amount: amount, date: Correctdate},
            {returning: true, where: {userId: user.id, uuid: req.params.op_id}},
            );
        res.status(200).json(operation[1][0])
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }  
};

module.exports.deleteOperationById = async (req, res) => {
    try {
        const user = await User.findOne({ where: { uuid: req.user.id } });
        await Operation.destroy({where: {userId: user.id, uuid: req.params.op_id}});
        res.status(200).json("deleted operation")
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }  
};