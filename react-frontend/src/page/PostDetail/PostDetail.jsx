import LoginHead from "../../components/LoginHeader"
import "./postdetail.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Web3 from 'web3/dist/web3.min.js'
import { imageStorageToken, imageStorageAbi } from '../../contracts/imageStorage';
import { imageAbi, imageTokenAddress } from '../../contracts/image'
import { IpfsImage } from 'react-ipfs-image';

export default function PostDetail(){

    const navigator = useNavigate()

    const [accounts, setAccounts] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const { ethereum } = window

        ethereum.request({method: "eth_requestAccounts"}).then(async (accounts) => {
            if (accounts){
                setAccounts(ethereum.selectedAddress)

                const web3 = new Web3(Web3.givenProvider)

                const contract = new web3.eth.Contract(imageStorageAbi, imageStorageToken);

                const images = await contract.methods.getImages().call()

                for (const image of await images){
                    let imageContract = new web3.eth.Contract(imageAbi, image)
                    let ipfs = await imageContract.methods.ipfsId().call()
                    let name = await imageContract.methods.fileName().call()

                    console.log(name)
                    await setPosts([...posts, { ipfs : ipfs, name: name}])

                }

                console.log(posts)

                
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
                <h2 class="font-bold text-3xl pl-5">Post Detail Title</h2>
                <div class="border-line mt-2"></div>
                <section class="main-vsd">
                   {
                        posts.map(element => {

                            return <div class="border px-6 py-10">
                        <div class="work-flex">
                            <div class="flex gap-5 post-site">
                                <img src="" alt="" class="profile"/>
                                <div>
                                    <h2 class="font-bolder text-[#273339] text-lg">Helloworld</h2>
                                    <p>sht</p>
                                    <div class="mt-5">
                                        <img src={ 'https://' +  element.ipfs + ".ipfs.dweb.link/" + element.name} alt="" class="post-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>})}
                    
                    

                        
                    
                </section>

                        
                

            </div>
            <div>
                
            </div>
            <div className="vote">
                <div className="vote-section">
                    <div className="sds">
                        <h2 className="text-center font-bold text-xl text-[#273339] py-5">Vote</h2>
                        <div className="el-sds-1 gap-5 py-2">
                            <img src="" alt="" />
                            <div>
                                <h2 className="mt-2 text-lg font-bold text-[#273339]">Vote for Sam vs Ram</h2>
                            </div>
                            <button className="vote-btn">Vote!</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
        </section>
    </div>
}