"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { FaExchangeAlt, FaWallet, FaChartLine } from "react-icons/fa";
import { BiCoin } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";


// Available currencies to purchase SST tokens
const currencies = [
  {
    id: "sol",
    name: "SOL",
    balance: 0.56,
    rate: 500.2, // 1 ETH = 1905.2 SST
  },
  {
    id: "usdt",
    name: "USDT",
    balance: 675.25,
    rate: 0.81, // 1 USDT = 0.81 SST
  },

  {
    id: "ZBTC",
    name: "zBTC",
    balance: 1.25,
    rate: 10354, // 1 USDC = 0.80 SST
  },
];

// Token info
const deeToken = {
  name: "SolarSurge (SST)",
  balance: 235.75,
  description: "The native utility token for the SolarSurge ecosystem. Used for marketplace transactions, device activation, and network governance.",
  marketCap: "$18.5M",
  volume24h: "$2.4M",
};

export default function BuyDEEPage() {
  const [fromCurrency, setFromCurrency] = useState("usdt");
  const [fromAmount, setFromAmount] = useState("100");
  const [deeAmount, setDeeAmount] = useState("81");
  
  // Handle from amount change
  const handleFromAmountChange = (e) => {
    const value = e.target.value;
    setFromAmount(value);
    const selectedCurrency = currencies.find(c => c.id === fromCurrency);
    const calculatedDee = value === "" ? "" : (parseFloat(value) * selectedCurrency.rate).toFixed(2);
    setDeeAmount(calculatedDee);
  };
  
  // Handle currency change
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setFromCurrency(newCurrency);
    const selectedCurrency = currencies.find(c => c.id === newCurrency);
    const calculatedDee = fromAmount === "" ? "" : (parseFloat(fromAmount) * selectedCurrency.rate).toFixed(2);
    setDeeAmount(calculatedDee);
  };
  
  return (
    <>
      <Breadcrumb pageName="Buy SST Tokens" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SWAP Card */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <BiCoin className="mr-2 text-green-500" size={24} />
                Buy SST Tokens
              </h2>
              
              {/* From Currency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <div className="flex items-center currentColor border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500">
                    <input
                      type="number"
                      value={fromAmount}
                      onChange={handleFromAmountChange}
                      className="w-full outline-none text-lg dark:bg-white "

                      placeholder="0.00"
                    />
                    <div className="ml-2">
                      <select
                        value={fromCurrency}
                        onChange={handleCurrencyChange}
                        className="bg-gray-100 px-3 py-2 rounded-md text-gray-800 font-medium"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.id} value={currency.id}>
                            {currency.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500 flex justify-between">
                    <span>
                      Balance: {currencies.find(c => c.id === fromCurrency)?.balance.toFixed(2)} {currencies.find(c => c.id === fromCurrency)?.name}
                    </span>
                    <button className="text-green-500 hover:text-green-700">Max</button>
                  </div>
                </div>
              </div>
              
              {/* Exchange Icon */}
              <div className="flex justify-center my-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <FaExchangeAlt className="text-green-600" size={20} />
                </div>
              </div>
              
              {/* To SST */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-gray-50">
                    <input
                      type="text"
                      value={deeAmount}
                      readOnly
                      className="w-full outline-none bg-gray-50 text-lg"
                      placeholder="0.00"
                    />
                    <div className="ml-2">
                      <div className="bg-green-100 px-3 py-2 rounded-md text-gray-800 font-medium flex items-center">
                        <span className="text-green-600 mr-1">SST</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    <span>Balance: {deeToken.balance.toFixed(2)} SST</span>
                  </div>
                </div>
              </div>
              
              {/* Exchange Rate */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Exchange Rate</span>
                  <span className="font-medium">
                    1 {currencies.find(c => c.id === fromCurrency)?.name} = {currencies.find(c => c.id === fromCurrency)?.rate} SST
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Network Fee</span>
                  <span className="font-medium">0.05%</span>
                </div>
              </div>
              
              {/* Buy Button */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition shadow-md hover:shadow-lg">
                Buy SST Tokens
              </button>
            </div>
          </div>
          
          {/* Token Info Card */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">SST Token Info</h2>
              
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <FaChartLine className="text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium">Current Price</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">$1.24</div>
                <div className="text-sm text-green-600">+8.4% (24h)</div>
              </div>
              
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Market Cap</span>
                  <span className="font-medium">{deeToken.marketCap}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">24h Volume</span>
                  <span className="font-medium">{deeToken.volume24h}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">About SST Token</h3>
                <p className="text-gray-600 text-sm">{deeToken.description}</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-start">
                  <AiOutlineInfoCircle className="text-green-500 mt-1 mr-2" />
                  <p className="text-sm text-gray-700">
                    SST tokens are currently in test mode. They can be used to unlock features in the SolarSurge ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}