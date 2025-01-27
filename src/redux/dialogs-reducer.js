const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good day'},
        {id: 3, message: 'Best work'},
        {id: 4, message: 'Bad news'},
        {id: 5, message: 'Nice car'},
        {id: 6, message: 'Many people'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    newMessageBody: ""
};


const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {

        ...state,
        messages: [...state.messages]
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
        ...state,
                newMessageBody: action.body
    };
case
    SEND_MESSAGE:
    let body = state.newMessageBody;
    return {
    ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
    };
default:
    return state;
}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;