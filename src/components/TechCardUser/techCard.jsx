import { useContext } from "react";
import { TechsContext } from "../../Contexts/TechsContext";
import { CardTech } from "./techCardStyle";

export function TechCard({ tech }) {
  const { setModalDelete, setDeleteId } = useContext(TechsContext);

  return (
    <CardTech
      onClick={() => {
        setModalDelete(true);
        setDeleteId(tech);
      }}
    >
      <h4>{tech.title}</h4>
      <span>{tech.status}</span>
    </CardTech>
  );
}
