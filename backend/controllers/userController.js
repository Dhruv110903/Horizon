import User from "../models/User.js"


//create a new User
export const createUser = async (req, res) => {

    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: 'Successfully created',
            data: savedUser
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Failed to create. Try Again'
        });
    }
};

//update User
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id,
            {
                $set: req.body
            },
            {
                new: true
            });

        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updatedUser
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Failed to update'
        });
    }
};

//delete User

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Failed to delete'
        });
    }
};

//getSingleUser

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            message: 'Successfully found',
            data: user,
        });

    } catch (err) {
        console.log(err);
        res.status(404).json({
            success: false,
            message: 'not found'
        });
    }
};

//getall Users

export const getAllUser = async (req, res) => {
  

    try {
        const users = await User.find({});
        
        res.status(200).json({ success: true,
             message: "Successfull",
              data: users });

    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: "not-found",
        })
    }
};