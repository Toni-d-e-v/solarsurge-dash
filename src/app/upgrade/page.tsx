import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FaServer, FaSolarPanel } from "react-icons/fa";
import { SiBitcoincash, SiNvidia } from "react-icons/si";
import { GiMiningHelmet } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Buy Devices",
};

const devices = [
  {
    id: 1,
    icon: GiMiningHelmet,
    title: "SolarSurge Pro Miner",
    description: "Next-gen SolarSurge device with enhanced mining power and auto-balancing.",
    cost: 1200, // SST tokens
  },
  {
    id: 2,
    icon: SiBitcoincash,
    title: "ASIC Miner S21 XP+",
    description: "Top-tier Bitcoin mining ASIC with water cooling and extreme efficiency.",
    cost: 2500,
  },
  {
    id: 3,
    icon: FaServer,
    title: "Compute Server Node",
    description: "High-end server for DePIN tasks: 64-core CPU, 256GB RAM, optimized for heavy workloads.",
    cost: 3000,
  },
  {
    id: 4,
    icon: SiNvidia,
    title: "AI GPU Rig",
    description: "4x RTX 4090 rig, perfect for AI training, scientific computing, and rendering tasks.",
    cost: 4000,
  },
  {
    id: 5,
    icon: FaSolarPanel,
    title: "Solar Energy Expansion Kit",
    description: "Expand your solar array to produce 20% more energy, maximizing surplus use.",
    cost: 800,
  },
];

export default function BuyDevicesPage() {
  return (
    <>
      <Breadcrumb pageName="Buy Devices" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Purchase New Devices</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col hover:shadow-2xl transition"
            >
              <device.icon size={40} className="text-green-500" />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {device.title}
              </h2>
              <p className="mt-2 text-gray-600 flex-1">
                {device.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                  {device.cost} SST
                </span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                  Buy Device
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
