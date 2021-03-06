function resolveIp() {
  const mode = process.env.NODE_ENV.trim();
  if (mode === 'development') {
    return {
      login: '/log',
      thirdServer: '/third',
      logic: '/fangman'
    };
  }
  return {
    login: 'http://passport.leekerlabs.com',
    thirdServer: 'http://dashboard.api.leekerlabs.com',
    logic: 'http://dashboard.api.leekerlabs.com'
  };
}
export const serverIp = resolveIp();
