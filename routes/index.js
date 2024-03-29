const userController = require('./user');
const supplierController = require('./supplier');
const storeController = require('./store');
const productController = require('./product');
const budgetReqController = require('./budget-request');
const budgetReplyController = require('./budget-reply');
const iuguController = require('./iugu');

module.exports = (app) => {
    // Supplier
    app.post('/api/supplier/create', supplierController.create);
    app.get('/api/supplier/getAll', supplierController.getAll);
    
    // Store
    app.post('/api/store/create', storeController.create);
    app.get('/api/store/getAll', storeController.getAll);

    // BudgetRequest
    app.post('/api/budget/sendRequest', budgetReqController.sendRequest);
    app.get('/api/budget/getAll', budgetReqController.getAll);
    app.post('/api/budget/disable', budgetReqController.disable);
    app.get('/api/budget/getByReply/:replyId', budgetReqController.getByReply);
    app.get('/api/budget/getOne/:id', budgetReqController.getOne);

    // Product
    app.post('/api/product/create', productController.create);
    app.get('/api/product/getAll', productController.getAll);
    // app.post('/api/product/update', productController.update);
    
    // User
    app.post('/api/user/create', userController.create);
    app.post('/api/user/login', userController.login);
    app.get('/api/user/getOne', userController.getOne);
    app.post('/api/user/update', userController.update);
    app.get('/api/user/getAll', userController.getAll);

    // BudgetReply
    app.post('/api/reply/:id', budgetReplyController.update);

    // IUGU
    app.post('/api/billing/charge', iuguController.charge);
}