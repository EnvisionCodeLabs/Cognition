import weaviate

client = weaviate.Client("http://127.0.0.1:8080")

schemaConfig = {
    'class': 'Images',
    'vectorizer': 'img2vec-neural',
    'vectorIndexType': 'hnsw',
    'moduleConfig': {
        'img2vec-neural': {
            'imageFields': [
                'image'
            ]
        }
    },
    'properties': [
        {
            'name': 'image',
            'dataType': ['blob']
        },
        {
            'name': 'ipfs',
            'dataType': ['string']
        }
    ]
}

client.schema.create_class(schemaConfig)
