const user = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new user({
            name,
            email
        });

        const emailExists = await user.findOne({ email });

        if (emailExists) {
            return res.status(400).json({});
        } else {
            await newUser.save();
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: newUser
            });
        }


    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create user',
            error: error.message
        });
    }
}