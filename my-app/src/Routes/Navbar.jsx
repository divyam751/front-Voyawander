import {Link} from "react-router-dom"
function Navbar() {
    const links = [
        {path:'/holiday',title:"Holiday"},
        {path:'/cart',title:"Cart"},
        {path:'/hotel',title:"Hotel"}
    ]
    return(
        <div className = "navbar" >
           {
                links.map((e)=>{
                    return <Link key={e.path}  to={e.path} >{e.title}</Link>
                })
            }
        </div>
    )
}

export { Navbar }