const express  = require("express");
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).send("All Contacts Get");
});
router.route('/:id').get((req, res) => {
    res.status(200).send(`Get Contact Id ${req.params.id}`);
});
router.route('/').post((req, res) => {
    res.status(200).send("Create Contact");
});
router.route('/:id').put((req, res) => {
    res.status(200).send(`Update Contact ${req.params.id}`);
});
router.route('/:id').delete((req, res) => {
    res.status(200).send(`Delete Contact ID ${req.params.id}`);
});
module.exports = router;
