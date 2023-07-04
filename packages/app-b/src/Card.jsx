const Card = ({ href, title, body }) => (
  <li className="link-card-b">
    <a href={href}>
      <h2>
        {title}
        <span>&rarr;</span>
      </h2>
      <p>{body}</p>
    </a>
  </li>
);

export default Card;
