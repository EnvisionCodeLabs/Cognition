import weaviate
from fastapi import FastAPI, File, UploadFile
import base64
from fastapi.responses import JSONResponse
import tempfile


client = weaviate.Client("http://127.0.0.1:8080")

# res = client.schema.get()

# print(res)

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
    



@app.post('/compare')
async def compare_image(file: UploadFile = File(...)) -> bool:
    contents = await file.read()
    encoded = base64.b64encode(contents).decode('utf-8')
    decoded = base64.b64decode(encoded)
    with tempfile.NamedTemporaryFile(delete=False) as f:
        f.write(decoded)
        image_path = f.name
    ret = client.query.get("Images", ['image']).with_near_image({
        'image': image_path
    }).with_limit(3)

    res = ret.do()['data']['Get']['Images']

    # return JSONResponse(res)

    for img in res:


        if str(encoded) == str(img['image']):

            return True

        


    return False



if __name__ == "main.py":
    app.run()
