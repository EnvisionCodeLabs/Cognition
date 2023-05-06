import cv2
import tensorflow as tf 

import numpy as np

import matplotlib.image as myimg
from tensorflow.keras import datasets, layers, models


  
image1 = cv2.imread('test.jpg')
image2 = cv2.imread('test3.jpg')
img = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
img2 = cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)


width = 256
height = 256

dim = (width, height)
  
resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
resized2 = cv2.resize(img2, dim, interpolation = cv2.INTER_AREA)


image_array_normalized = np.array(resized / 256)
image_array_normalized2= np.array(resized2 / 256)


image_array_normalized = tf.reshape(image_array_normalized, [1, 256, 256, 1])
image_array_normalized2 = tf.reshape(image_array_normalized2, [1, 256, 256, 1])


max_pool_2d = tf.keras.layers.MaxPooling2D(pool_size=(1, 1), strides=(2, 2), padding='valid')
max_pool_2d2 = tf.keras.layers.MaxPooling2D(pool_size=(1, 1), strides=(2, 2), padding='valid')

new_ar = max_pool_2d( image_array_normalized )
new_ar2 = max_pool_2d2( image_array_normalized2 )


reshaped_gray_scale_image = tf.reshape(new_ar, [128,128])
reshaped_gray_scale_image2 = tf.reshape(new_ar2, [128,128])

cv2.imshow('test', reshaped_gray_scale_image.numpy())
cv2.imshow('test2', reshaped_gray_scale_image2.numpy())

cv2.waitKey(0)
cv2.destroyAllWindows()

def get_gray_image():
    return [reshaped_gray_scale_image.numpy() , reshaped_gray_scale_image2.numpy()]
