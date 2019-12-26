import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/HomeComponent'
import TasksComponent from '../components/tasks/TasksComponent'

Vue.use(VueRouter)



const routes = [ 
    {path: '/', component: HomeComponent},
    {path: '/tarefas', component: TasksComponent},
]


export default new VueRouter({
    mode: 'history',
    routes
  })