import Sidebar from "../components/Sidebar"

export default function Dashboard(){

return(
<div className="flex">

<Sidebar />

<div className="flex-1 p-6 bg-gray-100 min-h-screen">

<h1 className="text-2xl font-bold mb-6">
Admin Dashboard
</h1>

<div className="grid grid-cols-3 gap-6">

<div className="bg-white p-5 rounded shadow">
<h3 className="font-bold">Orders</h3>
<p>Live order stats</p>
</div>

<div className="bg-white p-5 rounded shadow">
<h3 className="font-bold">Revenue</h3>
<p>Profit tracking</p>
</div>

<div className="bg-white p-5 rounded shadow">
<h3 className="font-bold">Hubs</h3>
<p>Delivery centers</p>
</div>

</div>

</div>

</div>
)
}