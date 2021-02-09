import { React, useState } from "react";
import { data } from "./data";
import Questions from "./Questions";
const Accordion = () => {
  const [details, setDetails] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question And Answers About Login</h3>
        <section className="info">
          {details.map((solution) => {
            return <Questions key={solution.id} {...solution} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
