import tensorflow as tf
from main import get_gray_image

comparasion_image = get_gray_image()
cosine_loss = tf.keras.losses.CosineSimilarity(axis=0)

print(cosine_loss(comparasion_image[0], comparasion_image[1]).numpy())
