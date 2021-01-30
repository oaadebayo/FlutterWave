const router = require("express").Router();

const {addUserValidation} = require('../../validation/t1/t1validation');
router.get("/", checkToken, getUsers);
router.post("/", checkToken, addUserValidation, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;