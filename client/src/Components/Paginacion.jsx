import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Pagination({ totalProductos, paginas, productPorPagina }) {
  const paginate = [];   //array con los numeros que van a ver en la paginacion
  const cantidadProductos = totalProductos.length;

  for (var i = 1; i <= Math.ceil(cantidadProductos / productPorPagina); i++) {  //math.ceil te redondea para arriba
    paginate.push(i);
  }

  return (
    <div>
      <ul class="pagination" style={{ width: "200px"}} >
        <li class="page-item disabled">
          <a class="page-link " href="#">&laquo;</a>
        </li>
        <li class="page-item" style={{ display: "flex" }}>
          {paginate.map(number =>
          <NavLink to="#">
            <a class="page-link " href="" onClick={() => paginas(number)}>{number}</a>
          </NavLink>
          )}
        </li>
        <li class="page-item disabled">
          <a class="page-link" href="#">&raquo;</a>
        </li>
      </ul>
    </div>
  )
}
