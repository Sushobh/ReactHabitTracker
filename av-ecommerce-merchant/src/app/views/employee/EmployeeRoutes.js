import React from 'react'
import { authRoles } from '../../auth/authRoles'

const employeeRoutes = [
    {
        path: '/employee/employee-list',
        component: React.lazy(() => import('./employee-list/Employee')),
        auth: authRoles.sa,
    },
    {
        path: '/employee/new-employee',
        component: React.lazy(() => import('./new-employee/NewEmployee')),
        auth: authRoles.sa,
    },
    {
        path: '/employee/qr',
        component: React.lazy(() => import('./EmployeeAuthQR')),
        auth: authRoles.sa,
    }
]

export default employeeRoutes
