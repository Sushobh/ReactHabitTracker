import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import JwtRegister from './register/JwtRegister'
import JwtLogin from './login/JwtLogin'
import OTPLogin from './auth-login/OTPLogin'

const sessionRoutes = [
    {
        path: '/session/signup',
        component: JwtRegister,
    },
    {
        path: '/session/signin',
        component: JwtLogin,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/otp-login',
        component: OTPLogin,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
