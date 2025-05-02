import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { BiCubeAlt, BiCodeAlt } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaRegFile } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Marketplace Page",
};
const connectedDevices = [
  {
    id: "dev001",
    name: "Ryzen 7 PC",
    status: "online",
    performanceScore: 92,
  },
  {
    id: "dev002",
    name: "SolarSurge Device",
    status: "idle",
    performanceScore: 67,
  },
];
// Demo task definitions
const tasks = [
  {
    id: 1,
    icon: BiCubeAlt,
    title: "3D Rendering",  
    description: "High-resolution 3D scene rendering in Blender (1080p, 60fps)",
    cost: 120, // SST tokens
  },
  {
    id: 2,
    icon: AiOutlineDatabase,
    title: "AI Model Training",
    description: "Train a small neural network on custom dataset (5 epochs)",
    cost: 250,
  },
  {
    id: 3,
    icon: RiServiceLine,
    title: "Scientific Simulation",
    description: "Run thermal fluid dynamics simulation (2h compute)",
    cost: 180,
  },
  {
    id: 4,
    icon: BiCodeAlt,
    title: "Code Compilation",
    description: "Compile large codebase and run unit tests",  
    cost: 60,
  },
  {
    id: 5,
    icon: FaRegFile,
    title: "Video Transcoding",
    description: "Transcode 4K video to H.264 format (10min clip)",
    cost: 95,
  },
];

export default function MarketplacePage() {
  return (
    <>
      <Breadcrumb pageName="Marketplace" />
      Your SolarSurge device can pick up tasks and utilize your connected computer or SolarSurge device to earn a share or the entire reward!      
      <div className="container mx-auto px-4 py-8">
 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col hover:shadow-2xl transition"
            >
              <task.icon size={40} className="text-green-500" />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {task.title}
              </h2>
              <p className="mt-2 text-gray-600 flex-1">
                {task.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                  {task.cost} SST
                </span>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                  Pay with SST
                </button>
              </div>
            </div>
          ))}
        </div>
        {connectedDevices.length > 0 && (
  <div className="mt-12">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Connected Devices</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {connectedDevices.map((device) => (
        <div
          key={device.id}
          className="bg-white rounded-xl shadow-md p-5 transition hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <h3 className=" text-xl font-semibold text-gray-800">{device.name}</h3>
            <span
              className={`text-sm font-medium ${
                device.status === "online"
                  ? "text-green-600"
                  : "text-yellow-500"
              }`}
            >
              {device.status}
            </span>
          </div>
          <p className="mt-2 text-gray-600">
            Performance Score: {device.performanceScore}%
          </p>
          <button
            className="mt-4 w-full bg-green-600 hover:bg-green-800 text-white py-2 rounded-full transition"
          >
            Accept Task
          </button>
        </div>
      ))}
    </div>
  </div>
)}
      </div>
    </>
  );
}
