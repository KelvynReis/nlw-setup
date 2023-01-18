import { Habits } from "./components/Habits";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Habits completed={4} />
      <Habits completed={8} />
      <Habits completed={10} />
    </>
  );
}
