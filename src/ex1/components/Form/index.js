import React from "react";
import { Container, Form, Main, Button } from "./form";

function Index(props) {
  return (
    <Container>
      <Form onSubmit={props.dispatch.handelSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={props.state.name}
            onChange={(e) => props.dispatch.handleName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note">Note</label>
          <input
            type="text"
            id="note"
            value={props.state.info}
            onChange={(e) => props.dispatch.handleInfo(e.target.value)}
          />
        </div>
        <div>
          <Button ml="0" width="100%">
            AddNote
          </Button>
        </div>
      </Form>
      <Main>
        {(props.state.data &&
          props.state.data.map((item) => (
            <article key={item.id}>
              <div>{item.name}</div>
              <div>{item.info}</div>
              <Button onClick={() => props.dispatch.handelRemove(item.id)}>
                REMOVE
              </Button>
            </article>
          ))) || <h1>There Is No Note</h1>}
      </Main>
    </Container>
  );
}

export default Index;
