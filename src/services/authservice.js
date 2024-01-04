// import jwtDecode from 'jsonwebtoken';

// export function getUserRole(token) {
//   try {
//     const decodedToken = jwtDecode(token);
//     return decodedToken.roles || decodedToken.role; // Choose based on how your server sends the role
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// }