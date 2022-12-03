from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from keras.models import load_model
from tensorflow.keras.utils import *
from tensorflow.image import *

from PIL import Image
import pandas as pd
import matplotlib.pyplot as plt
import os
import numpy as np

print('hello')


app=Flask(__name__)
@app.route('/api/users')
def users():
	# users 데이터를 Json 형식으로 반환한다
    return {"members": [{ "id" : 1, "name" : "yerin" },
    					{ "id" : 2, "name" : "dalkong" }]}
           

@app.route('/api/image', methods = ['POST', "GET"])
def image():
    
    learn_model()
    if request.method == 'POST':
        f = request.files['file']
        # return f.filename
        f.save(secure_filename(f.filename))
        return 'file 이 저장되었습니다.'
    
    else :
        return render_template('file.html')

# KakaoTalk_20221013_155231096_01.jpg
def learn_model() :
    target_img=0
    model = load_model('girl_boy_predict_epoch40.h5')
    # print("model", model)
    a = np.array([0,1,2,3,4])
    print(a)
    target = os.listdir("./웹이미지")
    # for file in target:
    #     img_data = load_img("./웹이미지/" + file)
    #     print(img_data)
    #     # img_data = Image.open("./웹이미지/" + file)
    #     # img_data.show()
    #     # img_black = img_data.convert("L")
    #     # img_black.show()
    #     # img = img_black.resize((48
    #     # 0,480))
    #     img_arr= img_to_array(img_data)/255
    #     print(img_arr.size)

    #     img= img_arr.reshape((1,)+ img_arr.shape)
    #     print(img.size)
    #     target_img = img

    #     # target_img = np.vstack(target_img,img)
    #     # img= img_arr.reshape((1,)+ img_arr.shape)
        
    #     print(file)
    # y_test_what= np.array([0]* 1) 
    # y_test_1= np.array([1]* 1)
    # y_test_what= np.append(y_test_what, y_test_1)

    # Y_test = model.predict(target_img)
    # Y_test1 = Y_test.argmax(axis=-1)
    
    # print(Y_test1)

if __name__ == "__main__":
    app.run(debug = True)

