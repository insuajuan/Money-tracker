const router = require('express').Router();
const operationControllers = require('../controllers/operation');
const {verifyToken} = require('../middleware/authJwt'); 

// /api/v1/operation

// All Operations
router.get('/', verifyToken, operationControllers.getAllOperations);

// Create Operation
router.post('/new', verifyToken, operationControllers.newOperation);

// Operation
router.route('/:op_id')
    .get(verifyToken, operationControllers.getOperationById);
    // .put()
    // .delete()

module.exports = router;