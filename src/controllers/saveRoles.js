const { Role } = require('../DB_connection')

const createRoles = () => {
    Role.create({
        name: "user"
    });

     Role.create({
        name: "admin"
    });
}

module.exports = {
    createRoles
}