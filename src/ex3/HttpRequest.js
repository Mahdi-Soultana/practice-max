import React, { useState, useEffect, useCallback } from "react";
import Form from "./components/Form/Form";
import { Wrapper } from "./../ex2/components/UI/Warpper";
import Card from "./components/Card/Card";
import styled from "styled-components";
const WrapperStyled = styled(Wrapper)`
  max-width: 900px;
`;
const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 1rem;

  h1 {
    font-size: 3rem;
    color: darkturquoise;
    letter-spacing: 1px;
    text-shadow: 0 0 2px black;
  }
  > h1 {
    padding-bottom: 5rem;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: center;
    font-size: 4rem;
    color: darkturquoise;
    text-shadow: 0 0 2px black;
  }
`;
function HttpRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchDataRef = useCallback(async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-https-573d0-default-rtdb.firebaseio.com/comment.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        setError(true);
      }
      let data = await response.json();
      // console.log(data);
      setError(false);
      const newData = [];

      for (let key in data) {
        newData.push({
          name: data[key].name,
          text: data[key].text,
          time: data[key].time,
          id: key,
        });
      }
      setData(newData);
    } catch (e) {
      setError(true);
      console.log(e);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchDataRef();
  }, [fetchDataRef]);

  const [data, setData] = useState([]);

  async function PostData(data) {
    setLoading(true);
    try {
      await fetch(
        "https://react-https-573d0-default-rtdb.firebaseio.com/comment.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      //   const id = await res.json();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  function HandelSubmit(e) {
    e.preventDefault();
    console.log("submit");
    const name = e.target.name.value;
    const text = e.target.text.value;
    const time = e.target.time.value;

    if (!name.trim() && !text.trim() && !time.trim()) {
      return console.log("Please Fill your Form:!");
    }
    PostData({ name, time, text });

    fetchDataRef();
  }
  let content;
  if (loading) {
    content = <h1>Loading...</h1>;
  }
  if (error) {
    content = <h1>SomeThing Went Wrong !:(</h1>;
  }
  if (!loading && !error) {
    content = (data.length &&
      data.map((item) => (
        <Card
          name={item.name}
          key={item.id}
          text={item.text}
          time={item.time}
        />
      ))) || <h1>No Comment Added Yet :) </h1>;
  }
  return (
    <Container>
      <h1>Free Comments</h1>
      <Form HandelSubmit={HandelSubmit} />
      <WrapperStyled>{content}</WrapperStyled>
    </Container>
  );
}

export default HttpRequest;
