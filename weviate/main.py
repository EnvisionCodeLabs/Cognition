import weaviate

client = weaviate.Client("http://127.0.0.1:8080")

# res = client.schema.get()

# print(res)

from fastapi import FastAPI, File, UploadFile
from typing import List
import base64

app = FastAPI()

@app.get('/info')
def info():
    
    return client.schema.get()

@app.post("/convert_image/")
async def convert_image(file: UploadFile = File(...), hash: str = None):
    contents = await file.read()
    encoded = base64.b64encode(contents)
    
    client.data_object.create({
        'image':  encoded.decode("utf-8"),
        'ipfs' : hash
    }, "Images")
    
    return "The image has been created"
    


if __name__ == "main.py":
    app.run()
