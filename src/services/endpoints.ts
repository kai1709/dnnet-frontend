export const API_URL = "https://dnet-cms.reliasoftware.com";
export const API_AUTH_URL = 'https://dnet-auth-services.reliasoftware.com'
// export const API_AUTH_URL1 = 'https://d98a-115-78-7-64.ngrok-free.app'
export const endPoints = {
  getNewsSummaries: `${API_URL}/items/NewsSummaries`,
  // loginFacebook: `${API_AUTH_URL}/api/v1/auth/social/facebook/login`,
  // loginGoogle: `${API_AUTH_URL}/api/v1/auth/social/google/login`,
  // loginMicrosoft: `${API_AUTH_URL}/api/v1/auth/social/google/login`,
  // codeFacebook: `${API_AUTH_URL}/api/v1/auth/social/facebook/code`,
  // codeGoogle: `${API_AUTH_URL}/api/v1/auth/social/google/code`,
  // codeMicrosoft: `${API_AUTH_URL}/api/v1/auth/social/google/code`,
  userProfile: `${API_AUTH_URL}/api/users/profile`
};


export const socialLoginEndpoints = (type: string, query?: string, social?: string,) => `${API_AUTH_URL}/api/v1/auth/social${social ? `/${social}` : ''}/${type}${query || ''}`
export const socialCodeEndpoint = (code: string) => `${API_AUTH_URL}/api/v1/auth/social/login/code?code=${code}`
