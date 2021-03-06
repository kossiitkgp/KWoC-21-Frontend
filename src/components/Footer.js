import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <div className="footer-column">
          {/* TODO: add all the links here, more if needed */}
          <h3>Social Groups </h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/groups/kwoc2016"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/showcase/kharagpur-winter-of-code/posts/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/kossiitkgp"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/#tline">Timeline</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/#about">About KWoC</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Other</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://kossiitkgp.org"
              >
                About KOSS
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/kossiitkgp/kwoc-bugs"
              >
                Report a Bug!
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="footer-title">
        <h1>Kharagpur Winter of Code</h1>
        <h2>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://kossiitkgp.org"
          >
            With &#10084; by KOSS
          </a>
        </h2>
      </div>
    </div>
  );
}
