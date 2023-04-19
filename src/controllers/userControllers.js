const { log } = require('console')
const {User} = require('../DB_connection')
const {Role} = require('../DB_connection')

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

    if(!email) email = 'not specified'

    const [user, created ] = await User.findOrCreate({
        where: { email: email },
        defaults: { name: name, picture: picture, email: email }
      });

    const role = await Role.findOne({
        where:{name: 'user'}
    })

    await user.addRole(role)

    return user;
}


module.exports = {getAllUsers, getDetailUser, createUser}