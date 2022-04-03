const getisLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
   getisLoggedIn,
   getUserName,
   getFetchingCurrentUser
}

export default authSelectors;