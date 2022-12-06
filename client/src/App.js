import React from "react";
import { useState, useRef } from "react";
import "./styles/app.css";
import Spinner from "./images/Spinner.gif";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [resultState, setResultState] = useState(false);
  const [imgReady, setImgReady] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const [gender, setGender] = useState("");
  const [accuracy, setAccuracy] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
    setResultState(false);
    setImgReady(true);
  };

  const analyze = async () => {
    // setLoading(true);
    // const formData = new FormData();
    // formData.append("file", imgRef.current.files[0]);
    // try {
    //   const response = await axios.post("/api/image", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   const result = response.data;
    //   console.log(result);
    //   setGender(result.res.gender);
    //   setAccuracy(result.res.acc);
    //   setResultState(true);
    // } catch (e) {
    //   console.log("api오류 : " + e);
    // } finally {
    //   setLoading(false);
    // }
    setResultState(true);
  };
  return (
    <div className="App">
      {loading ? (
        <div className="Loading">
          <img src={Spinner} alt="로딩" />
          <span>잠시만 기다려주세요</span>
        </div>
      ) : null}
      <div className="Description">
        <h1>FaceRecongnition</h1>
        <p>
          이 페이지는 CNN으로 남성, 여성 구분하기 테스트를 위한 페이지 입니다.
        </p>
        <p>
          mooooondh 님의 FaceRecongnition Repository의 코드이며
          <strong>인물한명만 </strong>
          인식합니다.
        </p>
        <p>자세한 코드는 아래서 확인하실 수 있습니다.</p>
        <a href="https://github.com/mooooondh/FaceRecognition">
          https://github.com/mooooondh/FaceRecognition
        </a>
      </div>
      <div className="MainDiv">
        <div className="BoxDiv">
          {resultState ? (
            <div className="Result">
              <p className="ResultText">정답 : {gender}</p>
              <p className="ResultText">정확도 : {accuracy}</p>
            </div>
          ) : null}
          {imgReady ? <img src={imgFile} alt="이미지"></img> : null}
        </div>
        <input
          type="file"
          accept="image/*"
          className="customInput"
          id="inputImg"
          onChange={saveImgFile}
          ref={imgRef}
        ></input>
        <label className="inputButton" htmlFor="inputImg">
          {imgReady ? "이미지 다시 올리기" : "이미지 업로드"}
        </label>
        <br />
        {imgReady ? <button onClick={analyze}>결과 분석하기</button> : null}
      </div>
    </div>
  );
}

export default App;
