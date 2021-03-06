import Fuse from "fuse.js";
import parse from "html-react-parser";
import React, { useState } from "react";
import FAQs from "../data/faq.json";

export default function FAQ() {
  const [query, setQuery] = useState("");

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const fuse = new Fuse(FAQs, {
    keys: ["q"],
  });

  const results = fuse.search(query);

  console.log(results);
  const searchResults = query ? results.map((result) => result.item) : FAQs;

  return (
    <div className="faq">
      <section className="faq-hero">
        <h1 className="title">Frequently Asked Questions</h1>
        <p>Wanna ask us a question? Check these first.</p>
      </section>

      <div className="faq-search-box">
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="Search your query"
            onChange={onChangeHandler}
            value={query}
          ></input>
        </div>
      </div>

      <div className="container">
        <ul>
          {searchResults.map((FAQ) => {
            const { q, a } = FAQ;
            return (
              <li>
                <div>
                  <strong>{q}</strong>
                </div>
                <div>
                  <ul>
                    {a.map((ele) => {
                      return <li>{parse(ele)}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
