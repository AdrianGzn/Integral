const managemente = [
    {
        text: "Reportes",
        link: ""
    },
    {
        text: "Recursos",
        link: ""
    }
];

const escolarControl = [
    {
        text: "Boletas",
        link: ""
    },
    {
        text: "Horarios",
        link: ""
    },
    {
        text: "Reuniones",
        link: ""
    }
];

const resourses = [
    {
        text: "Solicitudes",
        link: ""
    },
    {
        text: "Aportes",
        link: ""
    }
];

const teacher = [
    {
        text: "Asistencia",
        link: ""
    },
    {
        text: "Ver horario",
        link: ""
    },
    {
        text: "Reunión",
        link: ""
    },
    {
        text: "Reportes",
        link: ""
    },
    {
        text: "Alta de calificaciones",
        link: ""
    },
    {
        text: "Ver boletas",
        link: ""
    }
];

function getManagement() {
    return managemente();
}

function getEscolarControl() {
    return escolarControl();
}

function getResourses() {
    return resourses();
}

function getTeacher() {
    return teacher();
}

export default {getManagement, getEscolarControl, getResourses, getTeacher};