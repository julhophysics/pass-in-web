import { Attendee } from "./components/attendees/AttendeeList";
import { Header } from "./components/header/Header";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <Attendee />
    </div>
  );
}
