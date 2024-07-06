export const packageFile = `{
  "name": "frontend",
  "proxy": "http://127.0.0.1:5000",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.24.0",
    "react": "^18.0.0",
    "react-bootstrap": "^2.3.0",
    "react-dom": "^18.0.0",
    "react-helmet": "^6.1.0",
    
    "react-redux": "^8.0.1",
    "react-router-bootstrap": "^0.26.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^2.1.3",
    "redux": "^4.2.0",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "assert": "^2.0.0",
    "buffer": "^6.0.3",
    "crypto-browserify": "^3.12.0",
    "https-browserify": "^1.0.0",
    "os-browserify": "^0.3.0",
    "process": "^0.11.10",
    "react-app-rewired": "^2.2.1",
    "react-checkbox-tree": "^1.8.0",
    "styled-components": "^4.3.2",
    "stream-browserify": "^3.0.0",
    "stream-http": "^3.2.0",
    "url": "^0.11.0"
  }
}

  `
export const packageGeralFile = `{
  "name": "shoptese",
  "version": "1.0.0",
  "description": "tese app",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \\"npm run server\\" \\" npm run client\\"",
    "data:import": "node backend/seeder",
    "data:destroy": "node backend/seeder -d"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
   
    
    
    "axios": "^0.24.0",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "bootswatch": "^5.2.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.0",
    "express-async-handler": "^1.2.0",
    "file-saver": "^2.0.5",
    "form-data": "^4.0.0",
    "jsonwebtoken": "^8.5.1",
    "jszip": "^3.10.1",
    
    "mongoose": "^6.3.1",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "node": "^16.16.0",
    "parse-json": "^6.0.2",
    "path": "^0.12.7",
    "react": "^18.2.0",
    "react-bootstrap-switch": "^15.5.3",
    "react-checkbox-tree": "^1.8.0",
    "react-dom": "^18.2.0",
    "react-select": "^5.7.0",
    "styled-components": "^4.3.2"
  },
  "devDependencies": {
    "concurrently": "^7.1.0",
    "nodemon": "^2.0.15"
  }
}
`
