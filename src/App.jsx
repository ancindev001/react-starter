import { Outlet } from "react-router-dom";
import { Header } from "./lib/components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
