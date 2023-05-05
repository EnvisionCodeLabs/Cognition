import "./landing.css"
import LoginHeader from "../../components/LoginHeader"


export default function Landing({ connect }){
    return  <>

    <LoginHeader/>

    <button onClick={connect}>Login</button>

     <section class="odd-background">
            <div class="hero__container  pt-40">
                <h1 class="text-header text-center">You know what the rock is cooking?</h1>
                <p class="text-center text-base">rocky soup, get it hahaha bruh</p>
                <div class="svg-sec pb-10">
                    <img src="https://cdn.svgator.com/assets/main-page/fold1/astronaut-hero.svg" alt=""/>
                </div>
            </div>
        </section>
        <section class="hero__container">
            <div class="grid-2 mt-20">
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt=""/>
                <div>
                    <h1 class="sub-text-header text-6xl font-bolder">
                        Easily accesible just sleep
                    </h1>
                    <div class="minor-heading">
                        <h2 class="">Minor heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde beatae, ex sapiente error delectus numquam magnam dolores quasi ipsam rem vitae expedita sunt maxime modi minima nam reiciendis sed!</p>
                    </div>
                    <div class="minor-heading">
                        <h2 class="">Minor heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde beatae, ex sapiente error delectus numquam magnam dolores quasi ipsam rem vitae expedita sunt maxime modi minima nam reiciendis sed!</p>
                    </div>
                </div>
            </div>
            
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 110" class="K_bC"><path d="M 0 0 L 1920 0 L 960 110 Z" fill="#fff"></path></svg>

        <section class="odd-background">
            <div class="hero__container pt-36">
                <h1 class="text-center text-[#fff] font-bolder text-7xl">Very good sht this is </h1>
            <div class="grid-2 mt-10">
                <div>
                    <h2 class="sub-text-header text-6xl font-bolder ">Be a noob right away</h2>
                    <div>
                        <h3>Minorheading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit totam voluptatem animi, dolore nam debitis eaque fugit qui minus facilis quo exercitationem esse tenetur, et nihil cum eius, neque molestias.</p>
                    </div>
                    <div>
                        <h3>Minorheading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit totam voluptatem animi, dolore nam debitis eaque fugit qui minus facilis quo exercitationem esse tenetur, et nihil cum eius, neque molestias.</p>
                    </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=2000" alt=""/>
                </div>
            </div>
            </div>
        </section>
    </>
}