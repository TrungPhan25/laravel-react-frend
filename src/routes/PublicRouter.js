import Dashboard from "../components/admin/Dashboard"
import Profile from "../components/admin/Profile"
import Category from "../components/admin/category/Category"
import ViewCategory from "../components/admin/category/ViewCategory"
import EditCategory from "../components/admin/category/EditCategory"
const PublicRouter = [
    { path:'/admin'  },
    { path: '/dashboard', component: Dashboard},
    { path: '/add-category', component: Category},
    { path: '/view-category', component: ViewCategory},
    { path: '/edit-category/:id', component: EditCategory},

    { path: '/profile', component: Profile},
    
]
 export default PublicRouter