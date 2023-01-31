const deleteFunction = (event, id) => {
    console.log(id)
    event.preventDefault()
    if (window.confirm("Tem certeza que deseja remover este componente ?")) {
        const form = document.getElementById('deleteForm')
        form.action = "/adm/removeDevice/" + id
        form.submit()
    }
        
    
} 