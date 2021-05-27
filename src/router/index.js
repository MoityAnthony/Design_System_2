import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import ForgetPassword from '../views/ForgetPassword'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
]
console.log(routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
