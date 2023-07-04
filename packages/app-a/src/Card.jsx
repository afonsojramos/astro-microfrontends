import React from "react";

const Card = ({ href, title, body }) => (
  <li className="link-card-a group flex max-w-xs list-none rounded-md bg-white bg-gradient bg-400% bg-[100%] p-1 shadow-md focus-within:bg-[0] hover:bg-[0]">
    <a
      href={href}
      className="w-full rounded-md bg-white p-4 no-underline opacity-80"
    >
      <h2 className="mb-2 text-xl font-bold text-black group-focus-within:text-[rgb(var(--accent))] group-hover:text-[rgb(var(--accent))]">
        {title} <span>→</span>
      </h2>
      <p className="text-gray-500">{body}</p>
    </a>
  </li>
);

export default Card;
