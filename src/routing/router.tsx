import {createBrowserRouter} from "react-router-dom";
import PokemonPage from "../pages/PokemonPage";
import MainLayouts from "../layouts/MainLayouts";
import LikesPage from "../pages/LikesPage";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayouts/>, children:[
            {index:true,element:<PokemonPage/>},
            {path:'/pokemon',element:<PokemonPage/>},
            {path:'/likes',element: <LikesPage/>}
        ]}
]);