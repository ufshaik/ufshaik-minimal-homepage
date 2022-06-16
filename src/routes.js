import Home from './views/pages/Home'
import Test from './views/pages/Test'


const routes = [
    { path:'/', exact: true, name:'Home', component: Home},
    { path:'/test', exact: true, name:'Test', component: Test},
]

export default routes;