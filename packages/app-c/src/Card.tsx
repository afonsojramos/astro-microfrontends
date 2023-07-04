import styles from "./Card.module.css";

interface CardProps {
  href: string;
  title: string;
  body: string;
}

const Card = (props: CardProps) => (
  <li
    class={`${styles["link-card-c"]} group flex max-w-xs list-none rounded-md bg-white bg-gradient bg-400% bg-[100%] p-1 shadow-md focus-within:bg-[0] hover:bg-[0]`}
  >
    <a
      href={props.href}
      class="w-full rounded-md bg-white p-4 no-underline opacity-80"
    >
      <h2 class="mb-2 text-xl font-bold text-black group-focus-within:text-[rgb(var(--accent))] group-hover:text-[rgb(var(--accent))]">
        {props.title} <span>→</span>
      </h2>
      <p class="text-gray-500">{props.body}</p>
    </a>
  </li>
);

export default Card;
