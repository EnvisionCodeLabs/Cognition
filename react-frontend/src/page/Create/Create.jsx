import React, { useEffect, useState } from 'react'
import './create.css'
import LoginHead from "../../components/LoginHeader"
import {useDropzone} from 'react-dropzone';
import { useNavigate } from "react-router-dom";
import { Web3Storage } from 'web3.storage'
import Web3 from 'web3/dist/web3.min.js'
import { imageTokenAddress, allImageAbi } from '../../contracts/allInOneImage';
import Swal from 'sweetalert2'
import axios from "axios"

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: "16px",
  border: '1px solid #eaeaea',

};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: "800px",
  height: "400px",
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit:"contain"
};


function Create() {

    const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQzNTlmMTdGNzU0YTFENUIzZUJCRTUxNzQ1Y0NjRjU0NkM2QzM3QmMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODMzMzA1MzEyODIsIm5hbWUiOiJDb2duaXRpdmUifQ.UOBH08zAsSD-wSFiR5F0bgOiYQsX__HCTufl828JN_U"})

    const navigator = useNavigate()
    const [file, setFile] = useState(null)
    const [showimg, setShowImg] = useState(null)

    const [accounts, setAccounts] = useState(null);

    useEffect(() => {
        const { ethereum } = window

        ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
            if (accounts){
                setAccounts(ethereum.selectedAddress)
            }
        }).catch(err => {
            navigator('/')
        })

       
    }, [])

    const submit =async  (e) => {
        e.preventDefault()


        if (file && client && accounts){

          let data = new FormData();
          let headers = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          data.append('data', file[0])

            let resp = await axios.post("http://127.0.0.1:8000/compare", data, headers)

            console.log(resp)
            return
            const res = await client.put(file)
            
            const web3 = new Web3(Web3.givenProvider)

            const contract = new web3.eth.Contract(allImageAbi, imageTokenAddress);

            console.log(res, file[0].name, accounts)
            
            await contract.methods.addImage( res, file[0].name, true).send({
                from: accounts
            });
            Swal.fire({
              icon: 'success',
              title: 'The file has been sucessfully uploaded',
              showConfirmButton: false,
              
            })
            console.log(encodeURI(e.target.name))
        }

        else{
          Swal.fire({
            icon: 'error',
            title: 'We have detected that the image has already been deployed!',
            showConfirmButton: true,
            showCancelButton: true,
              confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Schedule Voting!'
          })
        }

    }


    function handleUpload(e){
        setFile(e.target.files)
        setShowImg(URL.createObjectURL(e.target.files[0]))
        console.log(e.target.files[0])
    }
  


  return (
    <section className='hero__container'>
      { accounts && <LoginHead account={accounts} />}
      <img src={showimg} className='show-img-detail'/>
      <form onSubmit={e => submit(e)}>
            <input type="file" onChange={handleUpload}/>
            <button type='submit' className='mt-5 submit-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Create