import { Link } from "react-router-dom"

export default function Home(){

return(
<div style={{padding:"40px"}}>

<h1>GreenHarvest System</h1>

<p>Smart Agriculture Supply Chain Platform</p>

<br/>

<Link to="/login">
<button>Get Started</button>
</Link>

</div>
)
}