const getisLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const authSelectors = {
   getisLoggedIn,
   getUserName
}

export default authSelectors;