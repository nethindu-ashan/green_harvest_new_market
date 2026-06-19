import { Link } from "react-router-dom"

export default function Header(){

return(
<header style={{
display:"flex",
justifyContent:"space-between",
padding:"15px",
background:"#111",
color:"white"
}}>

<h2>GreenHarvest</h2>

<nav style={{display:"flex",gap:"15px"}}>

<Link to="/" style={{color:"white"}}>Home</Link>
<Link to="/dashboard" style={{color:"white"}}>Dashboard</Link>
<Link to="/orders" style={{color:"white"}}>Orders</Link>
<Link to="/hubs" style={{color:"white"}}>Hubs</Link>
<Link to="/pricing" style={{color:"white"}}>Pricing</Link>
<Link to="/forecast" style={{color:"white"}}>Forecast</Link>
<Link to="/notifications" style={{color:"white"}}>Alerts</Link>

</nav>

</header>
)
}