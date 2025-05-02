import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { standardFormat } from "@/lib/format-number";
import { BiBitcoin } from "react-icons/bi";
import { SiSolana } from "react-icons/si";
import { GiToken } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Wallet Page",
};

type Transaction = {
  id: number;
  date: string;
  token: "BTC" | "ORE" | "SST";
  amount: number;
  type: "Deposit" | "Withdrawal";
};

async function WalletPage() {
  // Demo data; replace with your real data fetching
  const balanceBTC = 1.25;
  const balanceORE = 3000;
  const balanceDEE = 340;

  const transactions: Transaction[] = [
    { id: 1, date: "2025-04-17", token: "BTC", amount: -0.05, type: "Withdrawal" },
    { id: 2, date: "2025-04-16", token: "ORE", amount: 150, type: "Reward" },
    { id: 3, date: "2025-04-14", token: "SST", amount: -20, type: "Withdrawal" },
    { id: 4, date: "2025-04-16", token: "ORE", amount: 50, type: "Reward" },
    { id: 5, date: "2025-04-14", token: "SST", amount: -20, type: "Withdrawal" },
    { id: 6, date: "2025-04-16", token: "ORE", amount: 450, type: "Reward" },
    { id: 7, date: "2025-04-14", token: "SST", amount: -20, type: "Withdrawal" },
    
  ];

  return (
    <>
      <Breadcrumb pageName="Wallet" />
     
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Balances Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BTC Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500 flex flex-col items-center hover:shadow-2xl transition">
            <BiBitcoin size={36} className="text-orange-500" />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">BTC Earned</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              {standardFormat(balanceBTC)} BTC
            </p>
            <div className="space-x-5">
              <button className="mt-5 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Withdraw BTC
              </button>
              <a href="/zbtc">
              <button className="mt-5 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Get zBTC
              </button>
              </a>

     
            </div>
 
            
          </div>

          {/* ORE Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-800 flex flex-col items-center hover:shadow-2xl transition">
            <SiSolana size={36} className="text-blue-800" />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">ORE Earned</h3>
            <p className="text-3xl font-bold text-blue-700 mt-2">
              {standardFormat(balanceORE)} ORE
            </p>
            <button className="mt-5 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Withdraw ORE
            </button>
          </div>

          {/* SST Token Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-800 flex flex-col items-center hover:shadow-2xl transition">
            <GiToken size={36} className="text-green-800" />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">SST Tokens</h3>
            <p className="text-3xl font-bold text-green-700 mt-2">
              {standardFormat(balanceDEE)} SST
            </p>
            <button className="mt-5 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
              Withdraw SST
            </button>
          </div>
        </div>

        {/* Transaction History Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Transaction History</h3>
          <ul className="divide-y">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  {tx.token === "BTC" && <BiBitcoin size={24} className="text-orange-500" />}
                  {tx.token === "ORE" && <SiSolana size={24} className="text-blue-800" />}
                  {tx.token === "SST" && <GiToken size={24} className="text-green-800" />}
                  <span className="text-gray-700">{tx.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.amount > 0 ? '+' : '-'}{standardFormat(Math.abs(tx.amount))} {tx.token}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">{tx.type}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default WalletPage;