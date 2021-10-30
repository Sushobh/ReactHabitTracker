import React from 'react'
import { authRoles } from '../../auth/authRoles'

const customerRoutes = [
    {
        path: '/customer/customer-list',
        component: React.lazy(() => import('./customer-list/Customer')),
        auth: authRoles.admin,
    },
    {
        path: '/customer/new-customer',
        component: React.lazy(() => import('./new-customer/NewCustomer')),
        auth: authRoles.admin,
    },
    {
        path: '/customer/updateCustomer',
        component: React.lazy(() => import('./customer-update/UpdateCustomer')),
        auth: authRoles.admin,
    }
]

export default customerRoutes
