export const reducer = (state, action) => {
    let newPeople;
    switch (action.type){
        case 'ADD_ITEM':
            newPeople = [...state.people, action.payload];
            return {
                ...state,
                people: newPeople,
                isModalOpen: true,
                modalContent: 'item added',
            };
        case 'NO_VALUE':
            return { ...state, isModalOpen: true, modalContent: 'please enter value' };
        case 'CLOSE_MODAL':
            return { ...state, isModalOpen: false };
        case 'REMOVE_ITEM':
            newPeople = state.people.filter(
                (person) => person.id !== action.payload
              );
              console.log({ ...state, people: newPeople })
              return { ...state, people: newPeople };
        default:
            throw new Error('no matching action type');
    }
};
  