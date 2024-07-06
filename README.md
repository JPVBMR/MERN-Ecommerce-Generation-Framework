# MERN Ecommerce Generation Framework

Welcome to the MERN Ecommerce Generation Framework! This project provides a comprehensive template for building a full-featured ecommerce application using the MERN stack (MongoDB, Express, React, Node.js).
![image](https://github.com/JPVBMR/MERN-Ecommerce-Generation-Framework/assets/51756941/a43422a6-b959-41ec-a6fe-31e2050c5edb)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The MERN Ecommerce Generation Framework is designed to help developers quickly set up and deploy an ecommerce platform. It includes essential features like user authentication, product management, shopping cart functionality, and order processing.

## Features

- **User Authentication**: Secure login and registration with JWT tokens.
- **Product Management**: Add, edit, and delete products.
- **Shopping Cart**: Add and remove items from the cart.
- **Order Processing**: Place orders and view order history.
- **Admin Dashboard**: Manage users, products, and orders.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - React
  - Redux
  - React Router
  - Bootstrap

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

- **Authentication**:
  - JSON Web Tokens (JWT)
  - bcrypt

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/mern-ecommerce.git
    cd mern-ecommerce
    ```

2. **Install dependencies for both frontend and backend**:
    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

## Configuration

1. **Backend Configuration**:
   - Create a `.env` file in the `backend` directory and add the following environment variables:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/mern-ecommerce
     JWT_SECRET=your_jwt_secret
     ```

2. **Frontend Configuration**:
   - Create a `.env` file in the `frontend` directory and add the following environment variables:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```

## Running the Application

1. **Start the backend server**:
    ```bash
    cd backend
    npm run dev
    ```

2. **Start the frontend server**:
    ```bash
    cd frontend
    npm start
    ```

3. **Access the application**:
   - Open your browser and go to `http://localhost:3000`

## Folder Structure

The project directory structure is organized as follows:

- **mern-ecommerce/**
  - **backend/**
    - **config/**
      - [db.js](backend/config/db.js) - Database configuration
    - **controllers/**
      - [productController.js](backend/controllers/productController.js) - Product-related controllers
      - [userController.js](backend/controllers/userController.js) - User-related controllers
      - [orderController.js](backend/controllers/orderController.js) - Order-related controllers
    - **models/**
      - [productModel.js](backend/models/productModel.js) - Product schema
      - [userModel.js](backend/models/userModel.js) - User schema
      - [orderModel.js](backend/models/orderModel.js) - Order schema
    - **routes/**
      - [productRoutes.js](backend/routes/productRoutes.js) - Product-related routes
      - [userRoutes.js](backend/routes/userRoutes.js) - User-related routes
      - [orderRoutes.js](backend/routes/orderRoutes.js) - Order-related routes
    - **utils/**
      - [errorHandler.js](backend/utils/errorHandler.js) - Custom error handler
    - [.env](backend/.env) - Environment variables
    - [server.js](backend/server.js) - Entry point for the backend server
    - [package.json](backend/package.json) - Backend dependencies and scripts
  - **frontend/**
    - **public/**
      - [index.html](frontend/public/index.html) - Main HTML file
    - **src/**
      - **actions/**
        - [productActions.js](frontend/src/actions/productActions.js) - Product-related actions
        - [userActions.js](frontend/src/actions/userActions.js) - User-related actions
        - [orderActions.js](frontend/src/actions/orderActions.js) - Order-related actions
      - **components/**
        - [Header.js](frontend/src/components/Header.js) - Header component
        - [Footer.js](frontend/src/components/Footer.js) - Footer component
        - [Product.js](frontend/src/components/Product.js) - Product component
      - **constants/**
        - [productConstants.js](frontend/src/constants/productConstants.js) - Product-related constants
        - [userConstants.js](frontend/src/constants/userConstants.js) - User-related constants
        - [orderConstants.js](frontend/src/constants/orderConstants.js) - Order-related constants
      - **reducers/**
        - [productReducers.js](frontend/src/reducers/productReducers.js) - Product-related reducers
        - [userReducers.js](frontend/src/reducers/userReducers.js) - User-related reducers
        - [orderReducers.js](frontend/src/reducers/orderReducers.js) - Order-related reducers
      - **screens/**
        - [HomeScreen.js](frontend/src/screens/HomeScreen.js) - Home screen
        - [ProductScreen.js](frontend/src/screens/ProductScreen.js) - Product details screen
        - [CartScreen.js](frontend/src/screens/CartScreen.js) - Shopping cart screen
        - [LoginScreen.js](frontend/src/screens/LoginScreen.js) - Login screen
        - [RegisterScreen.js](frontend/src/screens/RegisterScreen.js) - Registration screen
        - [ProfileScreen.js](frontend/src/screens/ProfileScreen.js) - User profile screen
        - [OrderScreen.js](frontend/src/screens/OrderScreen.js) - Order details screen
      - [App.js](frontend/src/App.js) - Main App component
      - [index.js](frontend/src/index.js) - Entry point for the frontend
      - [store.js](frontend/src/store.js) - Redux store configuration
    - [.env](frontend/.env) - Environment variables
    - [package.json](frontend/package.json) - Frontend dependencies and scripts
  - **assets/**
    - **images/**
      - [demo.png](assets/images/demo.png) - Example image
    - **videos/**
      - [demo.mp4](assets/videos/demo.mp4) - Example video
  - [README.md](README.md) - Project documentation

