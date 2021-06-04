const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;
export const headers = new Headers({
  "Client-ID": clientId!,
  Authorization: `Bearer ${oauthCode}`,
});
