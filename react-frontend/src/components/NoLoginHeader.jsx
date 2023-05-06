

export default function LoginHeader({ connect }) {

    return  <nav class="nav">
        <div class="hero__container">
        <header class="header">
            <div>
                <img src="../lib/tabicon.png" alt="" className="logo-img-cog"/>
            </div>
            <ul class="flex">
                <button onClick={connect} className="dashboard">Dashboard</button>
            </ul>
        </header>
        </div>
    </nav> 

}