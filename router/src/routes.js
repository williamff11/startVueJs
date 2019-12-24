import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import Error404Component from './components/Error404Component'
export default [
    {path: '/', component: HomeComponent},
    {path: '/tarefa/:id', component: TasksComponent, name: 'tasks', props: true},
    {path: '/produtos', component: ProductsComponent, name: 'products'},
    {path: '/redirect', redirect: '/produtos'},
    {path: '*', component: Error404Component},
]