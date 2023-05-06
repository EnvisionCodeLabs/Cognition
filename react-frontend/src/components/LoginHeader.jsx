import { Link } from "react-router-dom"

export default function LoginHead({account}){


    console.log(account)

    return  <nav class="navv2 hero__container">
        <header class="header">
            <div>
                <img src="../lib/tabicon.png" className="logo-img-cog-v2" alt="" />
            </div>
             <ul class="flex gap-20">
                <li><Link to="/home"><i class="fa-solid fa-house text-xl"></i></Link></li>
                <li><Link to="/home"><i class="fa-solid fa-hashtag text-xl"></i></Link></li>
                <li><Link to="/create"><i class="fa-solid fa-pen text-xl"></i></Link></li>
                {/* <li><a href="./register.html"><i class="fa-solid fa-user text-xl"></i></a></li> */}
            </ul>
            <div class="flex gap-5">
                <p class="mt-1 font-bold">{account.substr(0, 7)}</p>
                <img src={"https://robohash.org/" + account} class="profile-img-nav" />
            </div>
        </header>
    </nav>
}