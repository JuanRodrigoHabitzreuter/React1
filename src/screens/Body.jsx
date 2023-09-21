import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

export default function Body(){
    return(
    <div>
        <NavBar />
        <Outlet />
        <Footer />
        </div>
    )
}