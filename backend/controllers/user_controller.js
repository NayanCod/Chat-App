import createTokenAndSaveCookies from "../jwt/generateToken.js";
import User from "../models/user_model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const {name, email, password, confirmPassword} = req.body;
    try {
        if(password !== confirmPassword) {
            return res.status(400).json({message: "Password does not match"});
        };

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"});
        };

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({
            name,
            email,
            password: hashPassword,
        });
        await newUser.save();
        if(newUser){
            createTokenAndSaveCookies(newUser._id, res);
            res.status(201).json({message: "User registered successfully", user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        }})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server error"});
        
    }
}

export const login = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid user or password"});
        }

        createTokenAndSaveCookies(user._id, res);
        res.status(201).json({message: "User logged in successfully", user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        }});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server error"});
    }
}

export const logout = async(req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({message: "User logged out successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server error"});
    }
}