import LoginHead from "../../components/LoginHeader"
import "./postdetail.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Web3 from 'web3/dist/web3.min.js'
import { imageTokenAddress, allImageAbi } from '../../contracts/allInOneImage';
import { IpfsImage } from 'react-ipfs-image';

export default function PostDetail(){

    const navigator = useNavigate()

    const [accounts, setAccounts] = useState(null);
    const [image, setImage] = useState(null)

    let id = parseInt(useParams().id)

    useEffect(() => {
        const { ethereum } = window

        ethereum.request({method: "eth_requestAccounts"}).then(async (accounts) => {
            if (accounts){
                setAccounts(ethereum.selectedAddress)

                const web3 = new Web3(Web3.givenProvider)

                const contract = new web3.eth.Contract(allImageAbi, imageTokenAddress);
                console.log(id)
                const image = await contract.methods.images(id).call()
                setImage(image)

            
                
            }
        })

       
    }, [])

    return <div class="media-body">
    { accounts && <LoginHead account={accounts}/> }
    <section class="hero__container">
        <section class="flex gap-5">
            <div class="side-container pt-5">
                <div class="px-6 pt-8 flex gap-2">
                    <i class="fa-solid fa-house text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Home  </p> 
                </div>
                <div class="px-6 py-8 flex gap-2">
                    <i class="fa-solid fa-hashtag \ text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Explore</p>
                </div>
                <div class="px-6 flex gap-2">
                    <i class="fa-solid fa-pen  text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl cursor-pointer" onClick={() => navigator('/create')}>Create</p>
                </div>
                {/* <div class="px-6 py-8 flex gap-2">
                    <i class="fa-solid fa-user  text-[#273339] text-xl"></i>
                    <p class="font-bold text-[#273339] text-xl">Profile</p>
                </div> */}
            </div>

            <div class="mt-8">
                <div class="border-line mt-2"></div>
                <section class="main-vsd">
                       <div class="border px-6 py-10">
                        <div class="work-flex">
                            <div class="flex gap-5 post-site">
                                <div>
                                   
                                    <div class="mt-5">
                                        <img src={ 'https://' +  image?.ipfsId + ".ipfs.dweb.link/" + image?.fileName} alt="" class="post-image"/>
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
    </div>
}