import { BOOKS } from '../../../constants/books';

const initState = {
    books: BOOKS,
};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default bookReducer;
