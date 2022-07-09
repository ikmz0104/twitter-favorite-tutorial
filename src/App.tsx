import MainTable from "./components/MainTable";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>twitter-like-search</title>
      </Helmet>
      <div className="bg-blue-50 min-h-screen">
        <div className="container mx-auto">
          <header className="flex justify-center items-center text-3xl h-32 mx-5">
            いいねした写真のアルバム
          </header>
          <div className="flex justify-center">
            <MainTable />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;