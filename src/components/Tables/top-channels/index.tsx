import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getDevices } from "../fetch";
import { TbDeviceAnalytics } from "react-icons/tb";
import { VscRunCoverage } from "react-icons/vsc";

export async function TopChannels({ className }: { className?: string }) {
  const data = await getDevices();

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Connected Devices
      </h2>
      <Table>
  <TableHeader>
    
    <TableRow className="border-none uppercase [&>th]:text-center">
      <TableHead className="min-w-[120px] !text-left">Device</TableHead>
      <TableHead></TableHead>
      <TableHead className="!text-right">Status</TableHead>
      <TableHead  className="!text-right">kWh</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {data.map((channel, i) => (
      <TableRow
        key={channel.name}
        className="text-base font-medium text-dark dark:text-white"
      >
        <TableCell className="flex items-center gap-3 ">
          <TbDeviceAnalytics/>
          {channel.name}
        </TableCell>

        <TableCell>{channel.info}</TableCell>

        <TableCell className="!text-right  text-green-light-1">
          <div className="inline-flex gap-1">
            <VscRunCoverage/> {channel.status}
          </div>
        </TableCell>

        <TableCell className="!text-right">
          {channel.kwh}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

    </div>
  );
}
