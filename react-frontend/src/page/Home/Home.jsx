import LoginHeader from "../../components/LoginHeader"
import "./home.css"

import Image from "../../abi/Image.json"
import ImageStorage from "../../abi/ImageStorage.json"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Home(){

    const navigator = useNavigate()

    const [accounts, setAccounts] = useState(null);

    useEffect(() => {
        const { ethereum } = window

        ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
            if (accounts){
                setAccounts(accounts)
            }
        }).catch(err => {
            navigator('/')
        })

       
    }, [ethereum])

    return <>
    <LoginHeader/>
    <section class="hero__container">
        <section class="flex">
            <div class="side-container pt-5">
                <div class="px-6 pt-8 flex gap-2">
                    <i class="fa-solid fa-house text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Home</p> 
                </div>
                <div class="px-6 py-8 flex gap-2">
                    <i class="fa-solid fa-hashtag \ text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Explore</p>
                </div>
                <div class="px-6 flex gap-2">
                    <i class="fa-solid fa-pen  text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Create</p>
                </div>
                <div class="px-6 py-8 flex gap-2">
                    <i class="fa-solid fa-user  text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Profile</p>
                </div>
            </div>
            <div class="mt-8">
                <h2 class="font-bold text-3xl pl-5">Home</h2>
                <div class="border-line mt-2"></div>
                <section class="main-vsd">
                    <div class="border px-6 py-10">
                        <div class="work-flex">
                            <div class="flex gap-5 post-site">
                                <img src="" alt="" class="profile"/>
                                <div>
                                    <h2 class="font-bolder text-[#273339] text-lg">Helloworld</h2>
                                    <p>sht</p>
                                    <div class="mt-5">
                                        <img src="https://cdna.artstation.com/p/assets/images/images/062/495/486/large/shangguan-zigang-wanshang.jpg?1683267057" alt="" class="post-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border px-6 py-10">
                        <div class="work-flex">
                            <div class="flex gap-5 post-site">
                                <img src="" alt="" class="profile"/>
                                <div>
                                    <h2 class="font-bolder text-[#273339] text-lg">Helloworld</h2>
                                    <p>sht</p>
                                    <div class="mt-5">
                                        <img src="https://cdna.artstation.com/p/assets/images/images/062/495/486/large/shangguan-zigang-wanshang.jpg?1683267057" alt="" class="post-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            <div>
                
            </div>
        </section>
    </section>
    </>
}