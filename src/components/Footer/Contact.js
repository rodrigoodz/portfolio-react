import React from "react";

// bg-white fill-current text-red-500
const Contact = () => {
  return (
    <div className="flex ">
      <a
        href="https://www.linkedin.com/in/rodrigo-ortiz-de-z%C3%A1rate-82a1681a6/"
        target="blank"
      >
        <svg
          className="md:h-10 md:w-10 h-8 w-8 mx-2 text-white fill-current rounded-full hover:text-gray-300 transition duration-300 ease-in-out "
          viewBox="0 0 24 24"
        >
          <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
        </svg>
      </a>
      <a href="https://github.com/rodrigoodz" target="blank">
        <svg
          className="md:h-10 md:w-10 h-8 w-8 mx-2 text-white fill-current  "
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <a href="mailto:rodrigoodz@gmail.com" target="blank">
        <svg
          className="md:h-10 md:w-10 h-8 w-8 mx-2 text-white fill-current "
          viewBox="0 0 24 24"
        >
          <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zM18.99 7L12 12.666 5.009 7H18.99zM19 17H5V8.495l7 5.673 7-5.672V17z" />
        </svg>
      </a>

      <a href="/" target="blank">
        <svg
          className="md:h-10 md:w-10 h-8 w-8 mx-2 bg-white rounded-full "
          viewBox="-8 -8 40 40"
        >
          <path d="M15 2v5h5v15H4V2h11zm1-2H2v24h20V6l-6-6z" />
        </svg>
      </a>
    </div>
  );
};

export default Contact;
