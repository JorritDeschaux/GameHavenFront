
const request = {

    //Games
    fetchGamesByName: `/games/search/`,
    fetchRecentGamesDiscover: `/discover`,
    fetchGameById: `/games/`,

    //Auth
    fetchUserLogin: `/auth/login`,
    registerUser: `/auth/register`,
    verifyUserWithToken: `/auth/userByToken`,

};

export default request;