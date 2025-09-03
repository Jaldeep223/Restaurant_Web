import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("MasterCard"); // default card type
  const [success, setSuccess] = useState(false);

  // Use Number(item.price) since price is numeric
  const grandTotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const handlePayment = (e) => {
    e.preventDefault();
    if (!cart.length) return alert("Your cart is empty!");
    setSuccess(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-300 via-teal-200 to-purple-200">
      <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          Payment Details
        </h2>

        {success ? (
          <p className="text-green-600 font-bold text-center">
            Payment Successful! Redirecting...
          </p>
        ) : (
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Cardholder Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-blue-200 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                maxLength={16}
                className="w-full border border-blue-200 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-1">Expiry</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  required
                  className="w-full border border-blue-200 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
              </div>

              <div className="flex-1">
                <label className="block font-medium mb-1">CVV</label>
                <input
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  maxLength={3}
                  className="w-full border border-blue-200 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Card Type Selection */}
            <div>
              <label className="block font-medium mb-1">Card Type</label>
              <select
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                className="w-full border border-blue-200 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              >
                <option>MasterCard</option>
                <option>Visa</option>
                <option>Debit Card</option>
                <option>Others</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition font-bold"
            >
              Pay £{grandTotal.toFixed(2)}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
