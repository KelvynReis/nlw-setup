import "./styles/global.css";
import "./lib/dayjs";
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <QueryClientProvider client={queryClient}>
          <Header />

          <SummaryTable />
        </QueryClientProvider>
      </div>
    </div>
  );
}
