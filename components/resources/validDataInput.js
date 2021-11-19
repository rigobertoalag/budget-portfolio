// FUNCION PARA VALIDAR INPUTS

export default function validDataInput(email, password) {
    if (!email & !password) {
        const valida = { correo: false, pass: false };
        return valida;
    } else if (email !== "" & !password) {
        const valida = { correo: true, pass: false };
        return valida;
    } else if (!email & password !== "") {
        const valida = { correo: false, pass: true };
        return valida;
    }
    const valida = { correo: true, pass: true };
    return valida;
}