
const request = {

    //Games
    fetchGamesByName: `/games/search/`,
    fetchRecentGamesDiscover: `/discover`,
    fetchGameById: `/games/`,
    fetchTop100: `/top100`,

    //Auth
    fetchUserLogin: `/auth/login`,
    registerUser: `/auth/register`,
    verifyUserWithToken: `/auth/userByToken`,

    //Profile
    updateInfo: `/profile/updateInfo`,
    publicInfo: `/profile/`,

    //Forum
    fetchPosts: `/posts`,
    fetchPostById: `/posts/`

};

export default request;