import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      <h4>
        Prueba tecnica de React *<span>@Ortenzias</span>-
      </h4>
      <h5>Shopping Cart con useContext, useID, use Reducer</h5>
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
}
