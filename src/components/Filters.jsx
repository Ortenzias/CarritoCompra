import { useContext, useId, useState } from "react";
import "./Products.css"
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const filtroPrecioMinimoID = useId()
  const filtroCategoryID = useId()
  const { filters, setFilters } = useFilters()

  const handleChangePrecioMinimo = (e) => {
    setFilters(estadoPrevio => ({
      ... estadoPrevio, minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(estadoPrevio => ({
      ... estadoPrevio, category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={filtroPrecioMinimoID}>Precio: </label>
        <input type="range" name="" id={filtroPrecioMinimoID} min="0" max="125" onChange={handleChangePrecioMinimo} value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={filtroCategoryID}>
            <select name="" id={filtroCategoryID} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="beauty">Belleza</option>
                <option value="fragrances">Fragancia</option>
                <option value="furniture">Muebles</option>
                <option value="groceries">Comestibles</option>
            </select>
        </label>
      </div>
    </section>
  );
}
