import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "conatcts",
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
