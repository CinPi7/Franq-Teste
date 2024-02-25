import { useState } from "react";
import { Button } from "./Button";
import { Control, Input } from "./Input";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const Dashboard = () => {
  const [filter, setFilter] = useState("");

  return (
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
            <TableBody>
              {Array.from({ length: 10 }).map((value, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">USD</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">Dólar</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">4.99</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">4.998</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">
                          -0.002
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
              })}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
