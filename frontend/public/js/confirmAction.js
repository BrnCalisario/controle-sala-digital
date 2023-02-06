console.log()
const deleteFunctionDevice = (event) => {
    event.preventDefault()
    if (window.confirm("Tem certeza que deseja remover este componente ?")) {
        const form = document.getElementById('deleteForm')
        form.submit()
    }
} 

const deleteFunctionComputer = (event) => {
    event.preventDefault()
    if (window.confirm("Tem certeza que deseja remover este computador ?")) {
        const form = document.getElementById('deleteForm')
        form.submit()
    }
} 


const resolveLog = (event, i) => {
    event.preventDefault()
    if (window.confirm("Quer resolver este relatório ?")) {
        const form = document.getElementById('form-' + i)
        form.submit()
    }
}