import { HashRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "sonner";

import { GamePage } from "./features/game/pages/GamePage";
import { GameSetupPage } from "./features/game/pages/GameSetupPage";
import { ResultsPage } from "./features/game/pages/ResultsPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GameSetupPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster
        position="top-center"
        richColors
        toastOptions={{ className: "game-toast" }}
      />
    </HashRouter>
  );
}

export default App;
