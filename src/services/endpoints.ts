export const API_URL = "https://dnet-cms.reliasoftware.com";
export const API_AUTH_URL = 'https://dnet-auth-services.reliasoftware.com'
// export const API_AUTH_URL1 = 'https://d98a-115-78-7-64.ngrok-free.app'
export const endPoints = {
  getNewsSummaries: `${API_URL}/items/NewsSummaries`,

  userProfile: `${API_AUTH_URL}/api/users/profile`,
  getCmsUser: `${API_URL}/items/Users`,
  files: `${API_URL}/files`,
  comments: `${API_URL}/items/Comments`,
  commentReply: `${API_URL}/items/CommentReply`,
  likes: `${API_URL}/items/Likes`,
};


export const socialLoginEndpoints = (type: string, query?: string, social?: string,) => `${API_AUTH_URL}/api/v1/auth/social${social ? `/${social}` : ''}/${type}${query || ''}`
export const socialCodeEndpoint = (code: string) => `${API_AUTH_URL}/api/v1/auth/social/login/code?code=${code}`
