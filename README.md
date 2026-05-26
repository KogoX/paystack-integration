<div align="center">
  <h1>💳 Paystack Integration App</h1>
  <p>
    A sleek, robust, and modern React web application demonstrating seamless integration with the Paystack payment gateway.
  </p>
</div>

---

## ✨ Features

- **Seamless Payment Flow**: Integrates the Paystack inline popup for a smooth checkout experience without redirecting users.
- **Responsive Minimalist UI**: Crafted with React and Tailwind CSS v4 to look perfect on both mobile and desktop screens.
- **Custom Metadata Tracking**: Dynamically captures and sends payer details (Cardholder Name) alongside the transaction.
- **Currency Support**: Fully configured for Kenyan Shilling (KES) transactions by default.
- **Robust Validation**: Ensures data integrity with comprehensive form input validation before initializing payments.

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript
- **Tooling**: Vite (Fast HMR & Optimized Builds)
- **Styling**: Tailwind CSS v4
- **Payment**: Paystack API (`window.PaystackPop`)

## 🚀 Getting Started

Follow these steps to get the application running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A Paystack Account (for your Public Key)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paystack-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Keys**
   Open `src/Donate.jsx` and replace the `publicKey` variable with your actual Paystack test or live public key.
   ```javascript
   const publicKey = "pk_test_your_public_key_here"; // Use test key for development
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will automatically be available locally at `http://localhost:5173`.

## 📂 Project Structure

- `src/Donate.jsx` - Contains the main UI layout, form inputs, and the Paystack processing logic.
- `src/main.jsx` - The React application entry point.
- `src/index.css` - Global Tailwind configurations and styles.

## 🤝 Contributing

Contributions, bug reports, and feature requests are always welcome! Feel free to open an issue or submit a pull request.