let users = [
    {
        nombre: "Director",
        contraseña: 123,
        page: "/Home"
    },
    {
        nombre: "Maestro",
        contraseña: 123
    },
    {
        nombre: "Recursos",
        contraseña: 123
    },
    {
        nombre: "Control Escolar",
        contraseña: 123
    }
];

function getUsers() {
    return users;
}

function addUsers(nombre, contraseña) {
    users.push({nombre: nombre, contraseña: contraseña});
}

export default {getUsers, addUsers}