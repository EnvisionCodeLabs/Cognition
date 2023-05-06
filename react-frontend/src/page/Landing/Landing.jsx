import "./landing.css"
import LoginHeader from "../../components/NoLoginHeader"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Landing(){

    const [account, setAccount] = useState(null);
    const navigator = useNavigate()

    const connect = () => {
        const { ethereum } = window

        ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
            setAccount(accounts[0])
            navigator('/home')
        })
    }

    return  <>
        <LoginHeader connect={connect}/>
<section class="odd-background">
            <div class="hero__container  pt-40">
                <h1 class="text-header text-center text-[#fff]">You know what the rock is cooking?</h1>
                <p class="text-center text-base text-[#fff] font-semibold text-lg">rocky soup, get it hahaha bruh</p>
                <div class="svg-sec pb-10">
                    <object data="../lib/astro.svg" type="image/svg+xml">
                        <img src="../lib/astro.svg" alt=""/>
                    </object>
                </div>
            </div>
        </section>
        <section class="hero__container">
            <div class="grid-2 mt-32">
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt=""/>
                <div>
                    <h1 class="sub-text-header text-6xl font-bolder">
                        Easily accesible just sleep
                    </h1>
                    <div class="minor-heading">
                        <h2 class="m-hd text-[#273339]">Minor heading</h2>
                        <p class="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde beatae, ex sapiente error delectus numquam magnam dolores quasi ipsam rem vitae expedita sunt maxime modi minima nam reiciendis sed!</p>
                    </div>
                    <div class="minor-heading">
                        <h2 class="m-hd text-[#273339]">Minor heading</h2>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde beatae, ex sapiente error delectus numquam magnam dolores quasi ipsam rem vitae expedita sunt maxime modi minima nam reiciendis sed!</p>
                    </div>
                </div>
            </div>
            
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 110" class="K_bC"><path d="M 0 0 L 1920 0 L 960 110 Z" fill="#fff"></path></svg>

        <section class="odd-background-v2 pb-10">
            <div class="hero__container pt-36">
                <h1 class="text-center text-[#fff] font-bolder text-7xl mt-20 mb-16 capitalize">Make things great </h1>
            <div class="grid-2 mt-10">
                <div>
                    <h2 class="sub-text-header text-5xl font-bolder text-[#fff]">Be a noob right away</h2>
                    <div>
                        <h3 class="m-hd text-[#fff]">Minorheading</h3>
                        <p class="text text-[#fff]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit totam voluptatem animi, dolore nam debitis eaque fugit qui minus facilis quo exercitationem esse tenetur, et nihil cum eius, neque molestias.</p>
                    </div>
                    <div>
                        <h3 class="m-hd text-[#fff]">Minorheading</h3>
                        <p class="text text-[#fff]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit totam voluptatem animi, dolore nam debitis eaque fugit qui minus facilis quo exercitationem esse tenetur, et nihil cum eius, neque molestias.</p>
                    </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=2000" alt=""/>
                </div>
            </div>
            </div>
            <object aria-label="SVGator waves animation" class="b2_fZ" type="image/svg+xml" data-object="fold7/waves.svg" data="//cdn.svgator.com/assets/main-page/fold7/waves.svg" width="3840" height="560"><img alt="SVGator waves setting" src="//cdn.svgator.com/assets/main-page/fold7/waves.svg"/></object>
            <section class="hero__container pb-20">
                <h2 class="text-center text-[#fff] font-bolder text-7xl">We are god</h2>
                <div class="grid-2 mt-20">
                    <div>
                        <object data="/lib/earth.svg" type="image/svg+xml">
                            <img src="/lib/earth.svg" alt=""/>
                        </object>
                    </div>
                    <div class="mt-36">
                        <h2 class="sub-text-header text-4xl font-bolder text-[#fff]">Work like you never did before</h2>
                        <p class="text-white mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid officia ipsum rerum expedita facere harum? Unde modi quaerat temporibus provident quod quia beatae iste dolorum voluptas, cumque ratione ducimus!</p>
                        <h2 class="sub-text-header text-4xl font-bolder text-[#fff] mt-20">Work like you never did before</h2>
                        <p class="text-white mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate aliquid officia ipsum rerum expedita facere harum? Unde modi quaerat temporibus provident quod quia beatae iste dolorum voluptas, cumque ratione ducimus!</p>
                    </div>
                    
                </div>
            </section>
        </section>
    
            <section class="hero__container mt-32 pb-10 w-5/12">
                <h1 class="text-center text-7xl font-bolder text-[#273339]">Get started with today</h1>
                <p class="text-center font-semibold pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi nostrum culpa nesciunt magnam! Accusantium alias, sit tenetur voluptas aliquam ad cum? Tempore voluptas esse ex dolore inventore, doloribus hic.</p>
                <button class="my-10 py-4 signup-btn">Sign Up</button>
            </section>
        <footer >
            <div class="hero__container">
                <div class="work-flex mt-10">
                    <div class=" footer-vone">
                        <h1 class="text-[#fff] font-bolder text-4xl">Lets keep in touch</h1>
                        <p class="text-[#fff] mt-2 font-semibold text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro laudantium eligendi obcaecati voluptatum nemo nam adipisci optio animi harum, dolorum dolores quae eaque excepturi repellat? Minus voluptatum fuga neque.</p>
                    </div>
                    <div>
                        <h1 class="text-[#fff] font-bold text-2xl text-right">Developers</h1>
                        <ul class="text-[#fff] text-right text-lg font-semibold">
                            {/* <!-- <li>Apurba Adhikari</li>
                            <li>Ashwot Acharya</li>
                            <li>Suyog Chaulagain</li>
                            <li>Samyam Shrestha</li> --> */}
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </footer>
    </>
    
}