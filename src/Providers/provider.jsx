import { UserProvider } from "../Contexts/UserContext";
import { TechsProvider } from "../Contexts/TechsContext";

export function Provider({ children }) {
  return (
    <UserProvider>
      <TechsProvider>{children}</TechsProvider>
    </UserProvider>
  );
}
