export const API_URL = "https://dnet-cms.reliasoftware.com";
export const API_AUTH_URL = 'https://dnet-auth-services.reliasoftware.com'
export const endPoints = {
  getNewsSummaries: `${API_URL}/items/NewsSummaries`,
  // loginFacebook: `${API_AUTH_URL}/api/v1/auth/social/facebook/login`,
  // loginGoogle: `${API_AUTH_URL}/api/v1/auth/social/google/login`,
  // loginMicrosoft: `${API_AUTH_URL}/api/v1/auth/social/google/login`,
  // codeFacebook: `${API_AUTH_URL}/api/v1/auth/social/facebook/code`,
  // codeGoogle: `${API_AUTH_URL}/api/v1/auth/social/google/code`,
  // codeMicrosoft: `${API_AUTH_URL}/api/v1/auth/social/google/code`
};


export const socialLoginEndpoints = (social: string, type: string, query?: string) => `${API_AUTH_URL}/api/v1/auth/social/${social}/${type}${query || ''}`
