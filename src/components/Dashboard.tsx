import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Control, Input } from "./Input";
import { Search, Filter, MoreHorizontal, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

interface DataResponse {
  currencies: Currencies;
  stocks: Stocks;
  available_sources: string[];
  taxes: number[];
}
interface Stocks {
  IBOVESPA: IBOVESPA;
  IFIX: IBOVESPA;
  NASDAQ: IBOVESPA;
  DOWJONES: IBOVESPA;
  CAC: IBOVESPA;
  NIKKEI: IBOVESPA;
}
interface IBOVESPA {
  name: string;
  location: string;
  points: number;
  variation: number;
}
interface Currencies {
  [key: string]: GBP | USD;
}
interface GBP {
  name: string;
  buy: number;
  sell?: number;
  variation: number;
}
interface USD {
  name: string;
  buy: number;
  sell: number;
  variation: number;
}

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [dataResponse, setDataResponse] = useState<DataResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // const { data: dataResponse, isLoading } = useQuery<DataResponse>({
  //   queryKey: ["currency"],
  //   queryFn: async () => {
  //     //https://raw.githubusercontent.com/CinPi7/MyAPI/master/financeAPI.json
  //     const response = await fetch("https://api.hgbrasil.com/finance");
  //     const data = await response.json();
  //     console.log(data);

  //     return data;
  //   },
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/CinPi7/MyAPI/master/financeAPI.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        console.log(data.results);

        setDataResponse(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col w-[90%] my-6">
      <div className="flex flex-row">
        <h1 className="text-xl text-white mb-2 font-bold">Finance</h1>
        <button className="inline-flex items-center ml-6 justify-center gap-1.5 text-xs bg-indigo-400 text-zinc-950 font-bold rounded-full px-1.5 py-2 w-24 mb-4">
          <Plus className="size-3 text-zinc-950 font-bold" />
          Criar
        </button>
      </div>
      <div className="bg-zinc-800 opacity-80 max-h-[calc(100vh - 296px)] overflow-y-auto">
        <div className="py-10 space-y-8 mx-8">
          <main className="max-w-6xl mx-auto space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center w-[100%] pb-6">
                <Input variant="filter">
                  <Search className="size-3" />
                  <Control
                    placeholder="Pesquise"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                  />
                </Input>
                <Button className="mx-3 rounded-full">
                  <Filter className="size-3" /> Filter
                </Button>
              </div>
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Moedas</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Compra</TableHead>
                    <TableHead>Venda</TableHead>
                    <TableHead>Variação</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                {dataResponse && dataResponse.currencies && (
                  <TableBody>
                    {Object.keys(dataResponse.currencies).map(
                      (currency, index) => {
                        if (currency === "source") return null;
                        const getInfoCurrency =
                          dataResponse.currencies[currency];
                        return (
                          <TableRow key={index}>
                            <TableCell></TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium text-zinc-100">
                                  {currency}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium text-zinc-100">
                                  {getInfoCurrency.name}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium text-zinc-100">
                                  {getInfoCurrency.buy}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium text-zinc-100">
                                  {getInfoCurrency.sell
                                    ? getInfoCurrency.sell
                                    : "____"}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span
                                  className={`font-medium ${
                                    getInfoCurrency.variation > 0
                                      ? "text-green-400"
                                      : getInfoCurrency.variation < 0
                                      ? "text-red-300"
                                      : "text-blue-200"
                                  }`}
                                >
                                  {getInfoCurrency.variation}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button size="icon">
                                <MoreHorizontal className="size-4"></MoreHorizontal>
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                )}
              </Table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
