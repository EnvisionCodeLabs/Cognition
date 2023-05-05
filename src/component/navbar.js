class NoLoginHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="hero__container">
        <header class="header">
            <div>
                <p>Cognition</p>
            </div>
            <ul class="flex">
                <li><a href="./login.html">Login</a></li>
                <li><a href="./register.html">Sign Up</a></li>
            </ul>
        </header>
    </nav>
        `
    }
}

class LoginHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="hero__container">
        <header class="header">
            <div>
                <p>Cognition</p>
            </div>
            <ul class="flex">
                <li><a href="./login.html">Login</a></li>
                <li><a href="./register.html">Sign Up</a></li>
            </ul>
            <div>
                <p>Hello wrold</p>
            </div>
        </header>
    </nav>
        `
    }
}
customElements.define('nav-bar', NoLoginHeader)
customElements.define('nav-bar-main', LoginHeader)