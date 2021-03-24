export const deleteItem = (id) => {
    return {
        type: 'DELETE',
        paylod: id,
    }
}

export const addItem = (user) => {
    return {
        type: 'ADD',
        paylod: user,
    }
}

export const updateItem = (user) => {
    return {
        type: 'UPDATE',
        paylod: user,
    }
}