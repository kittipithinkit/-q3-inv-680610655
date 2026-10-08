import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function DashboardTabs() {
  const [mode, setMode] = useState<"Overview" | "byCategory">("Overview");
  return (
    <Tabs
            value={mode}
            onValueChange={(v) => setMode(v as "Overview" | "byCategory")}
          >
            <TabsList>
              <TabsTrigger value="Overview">Overview</TabsTrigger>
              <TabsTrigger value="byCategory">By Category</TabsTrigger>
            </TabsList>
          </Tabs>
  );
}
