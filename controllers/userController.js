let users = require("../models/userModel");


// GET all users
exports.getUsers = (req, res) => {
    res.json(users);
};


// GET single user
exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};


// CREATE user
exports.createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json(newUser);
};


// UPDATE user
exports.updateUser = (req, res) => {

    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
};


// DELETE user
exports.deleteUser = (req, res) => {

    const index = users.findIndex(u => u.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.json({ message: "User deleted successfully" });
};