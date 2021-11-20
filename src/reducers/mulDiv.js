const initialState1 = 5;

const multTheNumber = (state = initialState1, action) =>{
    switch (action.type) {
        case "MULT": return state * action.payload;
        case "DIVIDE": return state / 5;   
        default: return state;
    }
}

export default multTheNumber;