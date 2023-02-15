import { useContext } from "react";
import { TechsContext } from "../../Contexts/TechsContext";
import { ModalEditDelete } from "../ModalEditDelete";
import { CardTech } from "./techCardStyle";

export function TechCard({ tech }) {
  const { setModalDelete } = useContext(TechsContext);

  return (
    <CardTech
      onClick={() => {
        setModalDelete(true);
      }}
    >
      <h4>{tech.title}</h4>
      <span>{tech.status}</span>
    </CardTech>
  );
}
