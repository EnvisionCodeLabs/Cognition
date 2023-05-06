import "./landing.css"
import LoginHeader from "../../components/NoLoginHeader"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

    useEffect(() => {
        const t4 = gsap.timeline({
            scrollTrigger:{
              trigger:'.svdcsd',
              start:"top center",
              end:"bottom center",
              duration: 2,
              markers: false,
              immediateRender:false
            }
          }).fromTo('.svdcsd', {y:"20%", opacity:0, display:"none"}, {y:0,opacity:1, duration: 1, display:"block"})

          const t9 = gsap.timeline(
            {            
              delay:0.1,
                scrollTrigger:{
                trigger:".section-part-two",
                start:"-200px center",
                end:"bottom center",
                markers: false,
                stagger: 5,
                immediateRender:false
            }}
            ).fromTo('.section-part-two',{y:"40%", opacity:0}, {y:0, opacity:1, 
                stagger:{
                    each:0.3,
                    from:'left',
                    ease: "power2.inOut",
                
                }}
                , "<20%");

                const t10 = gsap.timeline(
                    {            
                      delay:0.1,
                        scrollTrigger:{
                        trigger:".section-part-three",
                        start:"-100px center",
                        end:"300px center",
                        markers: false,
                        stagger: 5,
                        immediateRender:false
                    }}
                    ).fromTo('.section-part-three',{y:"60%", opacity:0}, {y:0, opacity:1, 
                        stagger:{
                            each:0.3,
                            from:'left',
                            ease: "power2.inOut",
                        
                        }}
                        , "<20%");1
                        const t11 = gsap.timeline(
                            {            
                              delay:0.1,
                                scrollTrigger:{
                                trigger:".section-part-four",
                                start:"-200px center",
                                end:"bottom center",
                                markers: false,
                                stagger: 5,
                                immediateRender:false
                            }}
                            ).fromTo('.section-part-four',{y:"60%", opacity:0}, {y:0, opacity:1, 
                                stagger:{
                                    each:0.3,
                                    from:'left',
                                    ease: "power2.inOut",
                                
                                }}
                                , "<20%");
    }, [])

    return  <>
        <LoginHeader connect={connect}/>
<section class="odd-background">
            <div class="hero__container pt-28">
                <h1 class="text-header text-center text-[#fff] capitalize">Blockchain technology to protect copyrights</h1>
                <p class="text-center text-base text-[#fff] font-semibold text-lg">Prevent unauthorized use and distribution of copyrighted materials.</p>
                <div class="svg-sec pb-10">
                    <object data="../lib/astro.svg" type="image/svg+xml">
                        <img src="../lib/astro.svg" alt=""/>
                    </object>
                </div>
            </div>
        </section>
        <section class="hero__container">
            <div class="grid-2 mt-32">
                <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="" className="section-part-two mt-8"/>
                <div>
                    <h1 class="sub-text-header text-6xl font-bolder section-part-two">
                        Secure and transparent solution
                    </h1>
                    <div class="minor-heading section-part-two">
                        <h2 class="m-hd text-[#273339]">Recognition and Analysis</h2>
                        <p class="text">
                            Identifying and examining the components of a piece of content and  to extract useful information from the content, such as sentiment analysis or topic modeling, in order to better understand the content and make informed decisions.
                        </p>
                    </div>
                    <div class="minor-heading section-part-two">
                        <h2 class="m-hd text-[#273339]">Rights enforcement</h2>
                        <p class="text">
                            Enforce usage rights for various digital assets such as intellectual property or media content, stored on a blockchain network, and can be programmed to automatically execute when certain conditions are met.
                        </p>
                    </div>
                </div>
                <div className="mt-36">
                    <h1 class="sub-text-header text-6xl font-bolder section-part-two">
                        Legal Framework
                    </h1>
                    <div class="minor-heading section-part-two">
                        <h2 class="m-hd text-[#273339] ">Distributed Ledger</h2>
                        <p class="text"> 
                            Decentralized database shared across a network of computers to track distribution of digital content. Any updates or changes to the ledger can be traced and verified, providing greater transparency and accountability in the distribution process.
                        </p>
                    </div>
                    <div class="minor-heading section-part-two">
                        <h2 class="m-hd text-[#273339]">Timestamp</h2>
                        <p class="text">
                            Digital signature or hash of a particular data or transaction on a blockchain, enables anyone to verify the exact time at which the data or transaction occurred.
                        </p>
                    </div>
                </div>
                <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=1380&t=st=1683358306~exp=1683358906~hmac=fcff67dd5a1850e9dc481705abf047eab0c555edfee27f2d9e11583f933737a8" alt="" className="section-part-two"/>

            </div>
            
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 110" class="K_bC"><path d="M 0 0 L 1920 0 L 960 110 Z" fill="#fff"></path></svg>

        <section class="odd-background-v2 pb-10">
            <div class="hero__container pt-36">
                <h1 class="text-center text-[#fff] font-bolder text-7xl mt-20 mb-16 capitalize section-part-three">Contribute to the world</h1>
            <div class="grid-2 mt-10">
            <div>
                    <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=2000" alt="" className="section-part-three"/>
                </div>
                <div className="py-10">
                    <h2 class="sub-text-header text-5xl font-bolder text-[#fff] section-part-three">Combination of various technology</h2>
                    <div className="section-part-three">
                        <h3 class="m-hd text-[#fff]">Smart Contracts</h3>
                        <p class="text text-[#fff]">
                        Self-executing contract that automatically enforces the terms of the agreement between two parties, without the need for intermediaries                             </p>
                    </div>
                    <div className="section-part-three">
                        <h3 class="m-hd text-[#fff]">Efficiency</h3>
                        <p class="text text-[#fff]">
                            Faster and more efficient processing of transactions, as there is no need for intermediaries or manual verification.    
                        </p>
                    </div>
                </div>
                
            </div>
            </div>
            <object aria-label="SVGator waves animation" class="b2_fZ" type="image/svg+xml" data-object="fold7/waves.svg" data="//cdn.svgator.com/assets/main-page/fold7/waves.svg" width="3840" height="560"><img alt="SVGator waves setting" src="//cdn.svgator.com/assets/main-page/fold7/waves.svg"/></object>
            <section class="hero__container pb-20">
                <h2 class="text-center text-[#fff] font-bolder text-7xl section-part-four">Around the globe</h2>
                <div class="grid-2 mt-20">
                    
                    <div class="mt-36">
                        <h2 class="sub-text-header text-4xl font-bolder text-[#fff] section-part-four"> Innovation and Creativity</h2>
                        <p class="text-white mt-2 section-part-four text-xl">
                            Incentivize innovation and creativity, ultimately leads to the development of new technologies, products, and services that can benefit people.
                        </p>
                        <h2 class="sub-text-header text-4xl font-bolder text-[#fff] mt-20 section-part-four">Economic Growth</h2>
                        <p class="text-white mt-2 section-part-four text-xl">
                            Support economic growth by promoting the development of new industries and business models, leads to the creation of new jobs and opportunities for people around the world.
                            </p>
                    </div>
                    <div className="svdcsd">
                        <object data="/lib/earth.svg" type="image/svg+xml">
                            <img src="/lib/earth.svg" alt=""/>
                        </object>
                    </div>
                </div>
            </section>
        </section>
    
            <section class="hero__container mt-32 pb-10 w-5/12">
                <img src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=1380&t=st=1683355260~exp=1683355860~hmac=e509fb65b5961ec904227f20822cf8d160654e623bba05a9547a3907c76c9349" alt="" className="get-start-here-img"/>
                <h1 class="text-center text-7xl font-bolder text-[#273339]">Get started with today</h1>
                <p class="text-center font-semibold pt-10">Easily verify and work with things</p>
                <button class="my-10 py-4 signup-btn">Sign Up</button>
            </section>

        <footer >
            <div class="hero__container sasd">
                <div class="work-flex mt-20 sasdcxxz">
                    <div class=" footer-vone">
                        <h1 class="text-[#fff] font-bolder text-4xl">Lets keep in touch</h1>
                        {/* <img src="../lib/cogAI.png" alt="" className="footer-img" /> */}
                        <p class="text-[#fff] mt-2 font-semibold text-sm">a platform to verify ownership,enforce usage rights and monitor distribution of content</p>
                        <div className="social-media mt-5">
                            <h2 className="text-white font-bolder text-3xl">Connect with us</h2>
                            <div className="flex gap-5">
                            <i class="fa-brands fa-twitter text-xl text-white"></i>                       
                            <i class="fa-brands fa-linkedin text-xl text-white" ></i>                       
                            </div>
                             </div>
                    </div>
                    <div>
                        <h1 class="text-[#fff] font-bold text-2xl text-right">Social</h1>
                        <div className="text-[#fff] font-bold text-sm text-right my-2">Github</div>
                        <div className="text-[#fff] font-bold text-sm text-right">Linkedin</div>
                    </div>
                </div>
                
            </div>
            
        </footer>
    </>
    
}