import Home from './views/pages/Home'
import Goose from './views/pages/Goose'
import Posts from './views/pages/Posts';


const routes = [
    { path:'/', exact: true, name:'Home', component: Home},
    { path:'/goose', exact: true, name:'Goose', component: Goose},
    { path:'/posts', exact: true, name:'Posts', component: Posts}
]

export default routes;