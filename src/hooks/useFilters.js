import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    /*// const [filters, setFilters] = useState({
    //   category: "all",
    //   minPrice: 0,
    // }); Comentar varias lineas Ctrl + k + c
    PARA DESCOMENTAR ES CTRL + K + U
    */
    
    //Todo lo que hagamos para editar los filtros, se hace aqui porque se llama el contexto
    const { filters, setFilters } = useContext(FiltersContext)
  
    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category == "all" || product.category == filters.category)
        );
      });
    };
  
    return { filterProducts, setFilters, filters };
  }