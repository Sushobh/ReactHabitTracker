import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import customerRoutes from './views/customers/CustomerRoutes'
import employeeRoutes from './views/employee/EmployeeRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'
import productRoutes from './views/product/ProductRoutes'
import orderRoutes from './views/orders/OrderRoutes'

import poRoutes from './views/purchase-order/PORoutes'
import cartRoutes from './views/cart/CartRoutes'


const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...customerRoutes,
    ...employeeRoutes,
    ...cartRoutes,
    ...orderRoutes,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...formsRoutes,
    ...productRoutes,
    ...poRoutes,
    ...mapRoutes,
    ...redirectRoute,
    ...errorRoute
]

export default routes
