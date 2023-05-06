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

@app.post("/upload/")
async def upload_image(file: UploadFile = File(...), hash: str = None):
    contents = await file.read()
    encoded = base64.b64encode(contents)
    
    client.data_object.create({
        'image':  encoded.decode("utf-8"),
        'ipfs' : hash
    }, "Images")
    
    return "The image has been created"
    
@app.post('/')
async def compare_image(file: UploadFile = File(...)):
    
    contents = await file.read()
    encoded = base64.b64encode(contents).decode("utf-8")
    
    ret = await client.query.get("Images", ['image']).with_near_image({'image': encoded}).with_limit(3)
    
    res = ret.do()
    
    return 1


if __name__ == "main.py":
    app.run()
