export default function LoginHead({account}){

    console.log(account)

    return  <nav class="navv2 hero__container">
        <header class="header">
            <div>
                <img src="../lib/cogAI.png" alt="" />
            </div>
             <ul class="flex gap-20">
                <li><a href="./login.html"><i class="fa-solid fa-house text-xl"></i></a></li>
                <li><a href="./register.html"><i class="fa-solid fa-hashtag text-xl"></i></a></li>
                <li><a href="./register.html"><i class="fa-solid fa-pen text-xl"></i></a></li>
                <li><a href="./register.html"><i class="fa-solid fa-user text-xl"></i></a></li>
            </ul>
            <div class="flex gap-5">
                <p class="mt-1 font-bold">{account.substr(0, 7)}</p>
                <img src={"https://robohash.org/" + account} class="profile-img-nav" />
            </div>
        </header>
    </nav>
}