const User = require("../models/userModel");

const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json({
            success: true,
            users: users
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Database Error!"
        });

    }

};

const getUser = async (req, res) => {

    try {

        const id = req.params.id;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user: user
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Database Error!"
        });

    }

};


const addUser = async (req, res) => {

    try {

        const { name, age } = req.body;

        const user = await User.create({
            name,
            age
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: user
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};


const editUser = async (req, res) => {

    try {

        const id = req.params.id;
        const { name, age } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            {
                name,
                age
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: user
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};
    
const removeUser = async (req, res) => {

    try {

        const id = req.params.id;

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user: user
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });

    }

};


module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser
};