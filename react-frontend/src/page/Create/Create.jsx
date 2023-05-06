import React, { useEffect, useState } from 'react'
import './create.css'
import LoginHead from "../../components/LoginHeader"
import {useDropzone} from 'react-dropzone';
import { useNavigate } from "react-router-dom";
import { Web3Storage } from 'web3.storage'
import Web3 from 'web3/dist/web3.min.js'
import { imageStorageToken, imageStorageAbi } from '../../contracts/imageStorage';
import Swal from 'sweetalert2'

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

        if (file && client){
            const res = await client.put(file)
            
            const web3 = new Web3(Web3.givenProvider)

            const contract = new web3.eth.Contract(imageStorageAbi, imageStorageToken);
            const gas = await contract.methods.addImage(await res, encodeURI(file.name)).estimateGas({ from: accounts });
            await contract.methods.addImage(await res, file.name).send({
                from: accounts,
                gas,
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