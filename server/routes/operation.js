const router = require('express').Router();
const operationControllers = require('../controllers/operation');
const {verifyToken} = require('../middleware/authJwt'); 

// /api/v1/operation

router.route('/')
    .get(verifyToken, operationControllers.getAllOperations)
    .post(verifyToken, operationControllers.newOperation);

router.route('/:op_id')
    .get(verifyToken, operationControllers.getOperationById)
    .patch(verifyToken, operationControllers.updateOperationById)
    .delete(verifyToken, operationControllers.deleteOperationById)

module.exports = router;