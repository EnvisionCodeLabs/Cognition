import React, { useEffect, useState } from 'react';
import LoginHead from '../../components/LoginHeader';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { Web3Storage } from 'web3.storage';
import Web3 from 'web3/dist/web3.min.js';
import { imageStorageToken, imageStorageAbi } from '../../contracts/imageStorage';
import "../Home/home.css"

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: '16px',
  border: '1px solid #eaeaea',
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: '800px',
  height: '400px',
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

function Create() {
  const client = new Web3Storage({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQzNTlmMTdGNzU0YTFENUIzZUJCRTUxNzQ1Y0NjRjU0NkM2QzM3QmMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODMzMzA1MzEyODIsIm5hbWUiOiJDb2duaXRpdmUifQ.UOBH08zAsSD-wSFiR5F0bgOiYQsX__HCTufl828JN_U',
  });

  const navigator = useNavigate();
  const [file, setFile] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts && accounts.length > 0) {
          setAccounts(accounts[0]);
        } else {
          navigator('/');
        }
      } catch (err) {
        navigator('/');
      }
    }

    fetchAccounts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file && client) {
      try {
        const cid = await client.put(file);
        const web3 = new Web3(Web3.givenProvider);
        const contract = new web3.eth.Contract(imageStorageAbi, imageStorageToken);
        await contract.methods.addImage(cid, file.name).send({
          from: accounts,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleFileChange = (e) => {

    setFile(e.target.files[0]);
  };

  return (
    <section>
      {accounts && <LoginHead account={accounts} />}
      <form onSubmit={e => handleSubmit(e)}>
        <input type="file" onChange={e => handleFileChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Create;
