import "./main.css";

import { SignUp } from "./pages/SignUp";

export const App = () => (
  <div className="w-screen p-32 h-screen bg-amber-100 overflow-x-hidden overflow-y-auto flex items-center justify-center">
    <SignUp />
  </div>
);
