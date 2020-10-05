CNN으로 남성, 여성 구분하기
=============
본 내용은 요약본입니다.</br>
자세한 내용은 블로그에서 확인하실 수 있습니다.</br>
https://w-storage.tistory.com/30

1.데이터 수집
-------------------------
데이터는 크롤링을 할 수도 있으나 크롤링 된 데이터를 다시 가공해야 하는 과정이 필요 하기에 kaggle데이터셋을 활용했다.
www.kaggle.com/elangojoseph/face-detection 

2.전처리
-------------------------
이미지를 남자, 여자로 구분하고 잘못된 데이터를 제거한 뒤 이미지 크기를 60x60px로 수정했다.</br>
남성 100장, 여성 100장은 test set으로 분류했다. </br>
이후 데이터를 numpy array 형태로 사용했다.

3.신경망 구축
-------------------------
<img src= "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FersIJA%2FbtqJ4GQXIMd%2FHO9A1wdH3mcDnokkIf5jB0%2Fimg.png"></img>

4.학습결과
-------------------------
epoch= 30 으로 수행 결과</br>
마지막 epoch에서 loss: 0.1617,  accuracy: 0.9450</br>
<img src= "https://user-images.githubusercontent.com/25631105/95103642-d28aad00-076f-11eb-9d99-f6002536936f.png"></img>

test set을 이용한 검증한 정확도: 95.0%

5.간단한 테스트
-------------------------
1번</br>
> <img src= "https://user-images.githubusercontent.com/25631105/95016953-56219c80-0691-11eb-9dbe-00972f155a8b.jpg"></img></br>
> 예측: 여성 97.3%</br>
> 정답: 여성</br>

2번</br>
> <img src= "https://user-images.githubusercontent.com/25631105/95016955-5752c980-0691-11eb-93e0-98e2d79e3dbb.jpg"></img></br>
> 예측: 여성 99.1%</br>
> 정답: 여성</br>

3번</br>
> <img src= "https://user-images.githubusercontent.com/25631105/95016956-57eb6000-0691-11eb-840c-7d99cad07648.jpg"></img></br>
> 예측: 남성 96.1%</br>
> 정답: 남성</br>

4번</br>
> <img src= "https://user-images.githubusercontent.com/25631105/95016957-57eb6000-0691-11eb-878d-5c0b6ff8d003.jpg"></img></br>
> 예측: 여성 79.9%</br>
> 정답: 남성</br>

일부러 중성적인 이미지, 헷갈리는 이미지로 고른 1, 3번은 정확하게 구분했는데 4번은 틀렸다.</br>
여러 가설을 세워본 결과 train데이터와 차이가 있기 때문에 잘못된 출력이 나온것으로 추측했다.</br>
입력데이터를 아래처럼 수정하니 정답을 출력했다.</br>
> <img src= "https://user-images.githubusercontent.com/25631105/95019062-49577580-069e-11eb-9acb-22f0ba933086.jpg"></img></br>
> 예측: 남성 95.5%</br>
> 정답: 남성</br>

6.아쉬운 점, 더 해봐야 할 것들
-----------
* 딥러닝의 단점 중 하나로 꼽히는 많은 하이퍼 파라미터가 고민이다. 어떤 값을 수정해야 정확도를 높일 수 있는지는 시행착오를 거쳐야 할 것 같다.
* GPU를 이용한 학습을 하기 위해 하루종일 인터넷을 뒤져봤는데 자꾸 오류만 나왔다. GPU를 이용하면 더 깊은 NN, 더 많은 epoch, 더 큰 이미지를 이용해 학습할 수 있을것 같다. GPU를 정상적으로 사용하는 방법을 더 찾아봐야 할 것 같다.
* 본 프로젝트는 단순히 얼굴을 이용한 남성, 여성만을 분류했으나 이를 확장하여 얼굴의 장신구(안경, 귀걸이 등...)을 찾아내거나 표정분석, 동영상 등에서 실시간 얼굴 인식 등 다양하게 확장할 수 있을 것 같다.
* 동일한 조건에서 학습을 처음부터 다시 수행하면 loss, accuracy, test set의 정확도가 바뀐다. "그렇다면 이 중 가장 좋은 결과를 출력하는 신경망을 저장하고 사용하는것이 옳은것인가?"를 고민해봐야 할 것 같다.

