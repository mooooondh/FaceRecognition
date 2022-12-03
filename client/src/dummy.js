import React from "react";
import { useState, useEffect } from "react";
function Dummy() {
  // state
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // 받아온 데이터를 data 변수에 update
        setData(data);
      })
      .catch((err) => console.log(`err : ${err}`));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>test 하는 중...</h1>
      <div>
        {/* 삼항연산자 */}
        {loading ? (
          // fetch가 완료되지 않았을 경우에 대한 처리
          <p>loding...</p>
        ) : (
          data.members.map((u) => <p>{u.name}</p>)
        )}
      </div>
    </div>
  );
}

export default Dummy;
