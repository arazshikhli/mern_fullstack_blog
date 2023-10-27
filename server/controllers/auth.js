import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
//Register
export const Registration=async (req,res)=>{
    try {
        const {username,password}=req.body
        const isUsed=await User.findOne({username})

        if (isUsed){
            return res.status(402).json({
                message:"This username is busy"
            })
        }
        const passLength=password.length
        if(passLength<8){
            return res.status(402).json({
                message:"password min 8 symbols"
            })
        }
        
        const hasCapital = (password) => !(password === password.toLowerCase());
        
        if (!hasCapital(password)){
            return res.status(402).json({
                message:"Пароль должен содержать минимум одну заглавную букву"
            })
        }
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(password,salt)

        const newUser=new User({
            username,
            password:hash
        })

        await newUser.save()
        res.json({
            newUser,message:"Registration has been successfull"
        })
    } catch (error) {
        res.json({message:"Undefined error"})
    }
}

//login
export const Login=async (req,res)=>{
    try {
        const {username,password}=req.body
        const user=await User.findOne({username})
        if(!user){
            return res.status(402).json({
                message:'Такого пользователя нет в базе'
            })
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password)
        if (!isPasswordCorrect){
            return res.status(402).json({
                message:"Wrong password,try again"
            })
        }
        const token=jwt.sign({
            id:user._id,
        },process.env.JWT_SECRET, {expiresIn:'30d'})

        res.json({
            token,user,message:"Success authintification"
        })
        
    } catch (error) {
        res.status(400).json({
            message:"Ошибка авторизации"
        })
    }
}

//getME
export const GetMe=async (req,res)=>{
    try {
        const user=await User.findById(req.userId)
        if (!user){
            return res.json({
                message:"Такого пользователя не существует"
            })
        }

        const token=jwt.sign({
            id:user._id,
        },process.env.JWT_SECRET, {expiresIn:'30d'})
        
        res.json({
            user,token
        })
    } catch (error) {
        res.json({message:"No access"})
    }
}