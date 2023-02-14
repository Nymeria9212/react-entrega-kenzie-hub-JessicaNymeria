import { KenzieHubProvider } from "../Contexts";

export function Provider({ children }) {
  return <KenzieHubProvider>{children}</KenzieHubProvider>;
}
