# OPC Backend

Simple JSON Server backend that serves Café Sabor t-shirt product data.

## Setup & Start

cd backend
npm install
npm start


The API will be available at http://localhost:3001

## Endpoints

- GET /products        — all products
- GET /products/:id    — single product by id
- POST /orders         — saves a completed checkout order (body: { date customer, items, total })
- GET /orders          — view all saved orders