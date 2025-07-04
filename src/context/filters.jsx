import { createContext, useState } from "react";

// 1. Crear el context
// Este es el que tenemos que consumir
export const FiltersContext = createContext();

// 2. Crear el Provider, para proveer el contexto (Preparar, reunir lo necesario para un fin. Usado también como pronominal.)
// Este es el que nos provee de acceso a los datos
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  });

  return (
    <FiltersContext.Provider
      value={{
        /**
         * 3. Este es el valor que tendra el contexto
         * Es informacion que querra poder acceder, no hace falta que sea un estado, logica, podria ser un numero. Tambien puede ser un estado global para la aplicacion, tambien puede ser tema oscuro para el sitio web, colores del tema, etc
         */
        filters, setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

/**Siempre son 3 pasos para el contesto
 * 1. Crearlo
 * 2. Proveerlo
 * 3. Consumirlo
 */
