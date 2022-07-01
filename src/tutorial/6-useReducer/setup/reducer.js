export const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            showModal: true,
            modalContext: "item added",
        }
    }
    if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter((person) => person.id !== action.payload)
        return {
            ...state,
            people: newPeople,
        }
    }
    if (action.type === "ERROR") {
        return {
            ...state,
            showModal: true,
            modalContext: "please add item"
        }
    }
    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            showModal: false,
        }
    }
    throw new Error('no matching action type')
}