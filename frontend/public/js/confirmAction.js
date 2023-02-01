const deleteFunction = (event) => {
    event.preventDefault()
    if (window.confirm("Tem certeza que deseja remover este componente ?")) {
        const form = document.getElementById('deleteForm')
        form.submit()
    }
} 