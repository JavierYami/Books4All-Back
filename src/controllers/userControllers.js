const {User} = require('../DB_connection')

const getAllUsers = async () =>{
    const users = await User.findAll()

    return users
}

const getDetailUser = async (id) =>{
    const userDetail = await User.findOne({
        where:{
            id: id
        }
    })
    return userDetail
}

const createUser = async (name, picture, email) =>{
    const newUser = await User.create({name, picture, email})

    return "User successful"
}


module.exports = {getAllUsers, getDetailUser, createUser}