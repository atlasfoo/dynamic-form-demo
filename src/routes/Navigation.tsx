import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import logo from '../logo.svg'
import { routes } from './routes'

const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.length > 0 && routes.map(({to, name})=>(
              <li key={to}>
                <NavLink to={to} className={({isActive}) => isActive? 'nav-active' : '' }>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.length > 0  && routes.map(route=>(
            <Route key={route.to} path={route.path} element={<route.Component/>} />
          ))}
          {routes.length > 0 &&
              <Route path="/*" element={ <Navigate to={routes[0].to} replace/>}/>}
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  )
}

export default Navigation