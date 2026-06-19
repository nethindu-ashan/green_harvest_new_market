import { Link } from "react-router-dom"

export default function Sidebar(){

return(
<div className="h-screen w-64 bg-gray-900 text-white p-5">

<h2 className="text-xl font-bold mb-6">
GreenHarvest
</h2>

<nav className="space-y-3">

<Link className="block hover:text-green-400" to="/dashboard">Dashboard</Link>
<Link className="block hover:text-green-400" to="/orders">Orders</Link>
<Link className="block hover:text-green-400" to="/hubs">Hubs</Link>
<Link className="block hover:text-green-400" to="/pricing">Pricing</Link>
<Link className="block hover:text-green-400" to="/forecast">Forecast</Link>
<Link className="block hover:text-green-400" to="/notifications">Notifications</Link>

</nav>

</div>
)
}