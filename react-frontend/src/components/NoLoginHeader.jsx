
export default function LoginHeader({ connect }) {

    return  <nav class="nav">
        <div class="hero__container">
        <header class="header">
            <div>
                <p>Cognition</p>
            </div>
            <ul class="flex">
                <button onClick={connect}>Dashboard</button>
            </ul>
        </header>
        </div>
    </nav> 

}