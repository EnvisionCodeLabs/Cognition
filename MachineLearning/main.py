import cv2
import tensorflow as tf 

import numpy as np

import matplotlib.image as myimg
from tensorflow.keras import datasets, layers, models


  
image = cv2.imread('test.jpg')
img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  

width = 256
height = 256
dim = (width, height)
  
resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
 
image_array_normalized = np.array(resized / 256)

image_array_normalized = tf.reshape(image_array_normalized, [1, 256, 256, 1])
max_pool_2d = tf.keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(1, 1), padding='valid')
new_ar = max_pool_2d( image_array_normalized )
print(new_ar.shape)
g = tf.reshape(new_ar, [255,255])
cv2.imshow('wtf', g.numpy())

print(g.numpy())
cv2.waitKey(0)
cv2.destroyAllWindows()