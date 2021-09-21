const api_server = "http://localhost:3000";
const socket_server = "http://localhost:8080";
export default { api_server, socket_server };
mkdir src && cd $_
mkdir components && cd $_ && touch oneUser.js && cd ..
mkdir pages && cd $_
touch Login.js && touch Navigator.js && touch Profile.js && touch Room.js && touch Users.js
cd ..
touch env.js
