const initState = {
    users: [
        { id: 1, name: "Trung" },
        { id: 2, name: "hello" }
    ],
    abc: [],
}


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>>> check run into', action)
            const updatedUsers = state.users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users: updatedUsers
            }
        case 'CREATE_USER':
            console.log('>>>>> check run into ', action)
            let newUser = {
                id: Math.floor(Math.random() * 999) + 1,
                name: 'trungg'
            }
            return {
                ...state, users: [...state.users, newUser]
            }
        default:
            return state

    }


}
export default rootReducer