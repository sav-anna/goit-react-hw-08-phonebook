const getIsLoginIn = state => state.auth.isLogIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoginIn,
  getUserName,
};
export default authSelectors;

// export const selectIsRefreshing = state => state.auth.isRefreshing;
// export const getVisibleContacts = createSelector(
//     [getContacts, getFilter],
//     (contacts, filter) => {
//       return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//   );
