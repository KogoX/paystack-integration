import React, { useState } from 'react'

function Donate() {
  const publicKey = "pk_live_5fe438b690a481610a2fd17e0bf78269c0c80c65"

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    
    if (value && !value.startsWith('07')) {
      if (value.startsWith('7')) {
        value = '0' + value
      } else if (value.startsWith('254')) {
        value = '0' + value.substring(3)
      }
    }

    if (value.length > 10) {
      value = value.substring(0, 10)
    }

    setPhoneNumber(value)

    if (value && value.length < 10) {
      setPhoneError('Phone number must be 10 digits')
    } else if (value && !value.startsWith('07')) {
      setPhoneError('Phone number must start with 07')
    } else {
      setPhoneError('')
    }
  }

  const handlePayment = () => {
    // Validation
    if (!email || !name || !phoneNumber || !amount || Number(amount) <= 0) {
      alert("Please fill all fields correctly")
      return
    }

    setLoading(true)

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: Number(amount) * 100, // convert to kobo
      currency: "KES",

      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "name",
            value: name,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone",
            value: phoneNumber,
          },
        ],
      },

      callback: function (response) {
        setLoading(false)
        alert("Payment successful! Ref: " + response.reference)

        // OPTIONAL: reset form
        setEmail('')
        setName('')
        setAmount('')
        setPhoneNumber('')
      },

      onClose: function () {
        setLoading(false)
        alert("Transaction cancelled")
      },
    })

    handler.openIframe()
  }

  const style = {
    input:
      "w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition",
    button:
      "w-full py-3 mt-2 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
    container:
      "min-h-screen flex items-center justify-center bg-black/50 px-4 container-animate",
    card:
      "w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200 card-animate",
    title:
      "text-2xl font-semibold text-center text-black mb-6",
    label:
      "block text-sm text-gray-600 mb-1",
    errorText:
      "text-red-500 text-xs mt-1 mb-2"
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>Make a Payment</h1>

        <div>
          {/* Name */}
          <label className={style.label}>Full Name</label>
          <input
            type="text"
            value={name}
            className={style.input}
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <label className={style.label}>Email Address</label>
          <input
            type="email"
            value={email}
            className={style.input}
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Amount */}
          <label className={style.label}>Amount (KES)</label>
          <input
            type="number"
            min="0"
            value={amount}
            className={style.input}
            placeholder="1000"
            onChange={(e) => {
              const value = e.target.value
              if (value === '' || Number(value) >= 0) {
                setAmount(value)
              }
            }}
          />

          {/* Phone */}
          <label className={style.label}>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            className={`${style.input} ${phoneError ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="07XXXXXXXX"
            onChange={handlePhoneChange}
            maxLength="10"
          />
          {phoneError && <p className={style.errorText}>{phoneError}</p>}

          {/* Button */}
          <button
            onClick={handlePayment}
            disabled={
              loading ||
              !email ||
              !name ||
              !phoneNumber ||              phoneError ||              !amount ||
              Number(amount) <= 0
            }
            className={style.button}
          >
            {loading ? "Processing..." : "Donate"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Donate