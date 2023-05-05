class NoLoginHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav">
        <div class="hero__container">
        <header class="header">
            <div>
                <p>Cognition</p>
            </div>
            <ul class="flex">
                <li><a href="./login.html">Dashboard</a></li>
            </ul>
        </header>
        </div>
    </nav>
        `
    }
}

class LoginHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navv2 hero__container">
        <header class="header">
            <div>
                <p>Cognition</p>
            </div>
             <ul class="flex gap-20">
                <li><a href="./login.html"><i class="fa-solid fa-house text-xl"></i></a></li>
                <li><a href="./register.html"><i class="fa-solid fa-hashtag text-xl"></i></li>
                <li><a href="./register.html"><i class="fa-solid fa-pen text-xl"></i></li>
                <li><a href="./register.html"><i class="fa-solid fa-user text-xl"></i></li>
            </ul>
            <div class="flex gap-5">
                <p class="mt-1 font-bold">Hello wrold</p>
                <img src="" class="profile-img-nav" />
            </div>
        </header>
    </nav>
        `
    }
}
customElements.define('nav-bar', NoLoginHeader)
customElements.define('nav-bar-main', LoginHeader)