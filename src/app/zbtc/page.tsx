"use client";

import { useState } from "react";
import { FaBitcoin, FaArrowDown, FaLock } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { SiSolana } from "react-icons/si";
import { AiOutlineCheckCircle, AiOutlineLock } from "react-icons/ai";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function MintzBTCPage() {
  const [btcAmount, setBtcAmount] = useState("0.1");
  const [zbtcAmount, setZbtcAmount] = useState("0.1"); // 1:1 Pegged

  const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBtcAmount(value);
    setZbtcAmount(value); // 1:1 pegged for simplicity
  };

  return (
    <>
      <Breadcrumb pageName="Mint zBTC" />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Mint zBTC */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FaBitcoin className="text-yellow-500 mr-2" size={28} />
                Mint zBTC
              </h1>
              Balance: 1.25 BTC
              {/* BTC Input */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Use earned Bitcoin
                </label>
                <div className="flex items-center border border-gray-300 rounded-xl p-4 focus-within:ring-2 focus-within:ring-yellow-400">
                  <input
                    type="number"
                    value={btcAmount}
                    onChange={handleBtcChange}
                    className="w-full text-lg bg-white outline-none"
                    placeholder="0.00"
                  />
                  <span className="ml-2 text-gray-600 font-semibold">BTC</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-8">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FaArrowDown className="text-yellow-600" size={24} />
                </div>
              </div>

              {/* zBTC Output */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Receive zBTC
                </label>
                <div className="flex items-center border border-gray-300 rounded-xl p-4 bg-gray-50">
                  <input
                    type="text"
                    value={zbtcAmount}
                    readOnly
                    className="w-full text-lg bg-gray-50 outline-none"
                    placeholder="0.00"
                  />
                  <span className="ml-2 text-gray-600 font-semibold">zBTC</span>
                </div>
              </div>

              {/* Mint Button */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-xl text-lg shadow-md hover:shadow-lg transition">
                Mint zBTC
              </button>
            </div>
          </div>

          {/* Right: Info Card */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 shadow-lg rounded-2xl p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Why Mint zBTC?</h2>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <GiNetworkBars className="text-green-500 mr-3" size={22} />
                  <div>
                    <p className="font-semibold text-gray-700">Earn Bitcoin Yield</p>
                    <p className="text-gray-500 text-sm">
                      Generate returns without compromising Bitcoin s security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <SiSolana className="text-purple-500 mr-3" size={22} />
                  <div>
                    <p className="font-semibold text-gray-700">Access Solana DeFi</p>
                    <p className="text-gray-500 text-sm">
                      Use zBTC across platforms like Jupiter, Raydium, Drift, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AiOutlineLock className="text-blue-500 mr-3" size={22} />
                  <div>
                    <p className="font-semibold text-gray-700">Secure & Transparent</p>
                    <p className="text-gray-500 text-sm">
                      Built on Zeus Network with full on-chain verification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AiOutlineCheckCircle className="text-green-600 mr-3" size={22} />
                  <div>
                    <p className="font-semibold text-gray-700">Non-KYC/KYB</p>
                    <p className="text-gray-500 text-sm">
                      Permissionless onboarding. Maintain your financial privacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-sm text-gray-700">
                <p>
                  <strong>Note:</strong> Your zBTC is always 1:1 backed with Bitcoin on-chain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-4xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Powered by APOLLO Exchange
            </h2>
            <p className="text-gray-600 text-md md:text-lg">
              We partner with <strong>APOLLO Exchange</strong> to ensure your Bitcoin is securely locked
              and fully backed 1:1 on-chain. 
              <br />
              APOLLO’s permissionless system mints <strong>zBTC</strong> safely and transparently via the
              <strong> Zeus Network</strong> — no KYC, no friction.
            </p>

            <div className="mt-6">
              <a
                href="https://apollodex.io/" // Change to correct Apollo link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Learn More About APOLLO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}