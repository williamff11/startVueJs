import HomeComponent from '../components/home/HomeComponent'
import ProductsComponent from '../components/products/ProductsComponent'
import ProductCreateComponent from '../components/products/ProductCreateComponent'
import ProductEditComponent from '../components/products/ProductEditComponent'


export default [ 
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductsComponent},
    {path: '/produtos/create', component: ProductCreateComponent},
    {path: '/produtos/:id/edit', component: ProductEditComponent, name: 'produto.edit', props: true},
]