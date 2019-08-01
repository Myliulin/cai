import Home from "./views/Home/Home";
import About from "./views/About/About";
import ItemList from "./views/ItemList/ItemList";
import Concat from "./views/About/Concat";
import Ryu from "./views/About/Ryu";

const routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/about',
        component:About,
        children1:[
            {
                path:'/about/concat',
                component:Concat
            },
            {
                path:'/about/ryu',
                component:Ryu
            }
        ]
    },
    {
        path:'/list',
        component:ItemList
    }
];
export default routes;