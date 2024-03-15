import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getClients } from "./services";

interface Client {
  name: string;
  // add other properties as needed
}

function App() {
  const [count, setCount] = useState(0);
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    getClients().then((data) => setClients(data));
  }, []);

  return (
    <>
      <ul>
        {clients.map((client) => (
          <li className="text-xs text-red-500" key={client.name}>
            {client.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
