# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# E-Commerce Product List

A simple React + Vite application that displays a list of products and allows users to view details for each product. Each product in the list links to a dedicated product detail page.

## Features

- Product listing page
- Product detail page for each item
- Routing with React Router
- Component-based architecture

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd ecommerce-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
ecommerce-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       ├── components/
│       │   ├── ProductList.jsx
│       │   └── ProductItem.jsx
│       └── react.svg
├── package.json
├── vite.config.js
└── README.md
```

## Usage

- The home page (`/`) displays a list of products.
- Click on any product to view its details on a separate page (`/product/:id`).

## Dependencies

- React
- Vite
- React Router DOM

## License

This project is licensed under the MIT License.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
