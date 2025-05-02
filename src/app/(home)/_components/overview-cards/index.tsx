import { compactFormat } from "@/lib/format-number";
import { getDeviceStats } from "../../fetch"; // <- Adjust this to your actual API
import { OverviewCard } from "./card";
import * as icons from "./icons";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

export async function OverviewCardsGroup() {
  const { surplusEnergy, deeEarned, btcMined, tasksCompleted } = await getDeviceStats();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Surplus Energy Used"
        data={{
          ...surplusEnergy,
          value: compactFormat(surplusEnergy.value) + " kWh",
        }}
        Icon={icons.SurplusEnergyIcon}
      />

      <OverviewCard
        label="SST Tokens Earned 1 kWh = 1 SST"
        data={{
          ...deeEarned,
          value: compactFormat(deeEarned.value),
        }}
        Icon={icons.DEEEarnedIcon}
      />

      <OverviewCard
        label="BTC Mined"
        data={{
          ...btcMined,
          value: compactFormat(btcMined.value) + " BTC",
        }}
        Icon={icons.BTCMinedIcon}
      />

      <OverviewCard
        label="Tasks Completed"
        data={{
          ...tasksCompleted,
          value: compactFormat(tasksCompleted.value),
        }}
        Icon={icons.TasksCompletedIcon}
      />
    </div>
  );
}
