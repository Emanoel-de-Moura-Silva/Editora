import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="principal">
        <h2>404!</h2>
        <p>Pagina não encontrada ou removida. <Link to='/'>Ir para Home Page</Link>       
        </p>
    </main>
  );
};
