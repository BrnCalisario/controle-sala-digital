const formatCPF = (str) => {
    if (str.length < 11)
        throw new Error("CPF Inválido")

    var first = str.substring(0, 3)
    first += '.'

    var second = str.substring(3, 6)
    second += '.'

    var third = str.substring(6, 9)
    third += '-'

    return first + second + third + str.substring(9)
}

export default formatCPF