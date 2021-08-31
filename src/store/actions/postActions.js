export const LOAD_POSTS = 'LOAD_POSTS'; 

export const loadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        payload: posts
    }
}