import validate from '../userModel/userModel.js';
import User from '../userModel/userModel.js';
import bcrypt from 'bcrypt';


const signup_user = async(req,res) => {
    try
    {
        const { error } = validate(req.body);
        if( error )
        {
            return res.status(400).send({message: error.details[0].message});
        }

        const existing_User = await User.findOne({ email : req.body.email });

        if(existing_User)
        {
            return res.status(409).send({message : "User with given email already exits"});
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password , salt);

        await new User({...req.body , password : hashPassword}).save();
        res.status(200).send({message : "User created successfully"});
    } catch ( error )
    {
        res.status(500).send({message: "Internal server error"});
    }
    
}


export { signup_user as default };