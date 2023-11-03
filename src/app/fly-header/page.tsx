import style from "./page.module.scss";

const FlyHeaderPage = () => {
  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          debitis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quam similique aut, tempora rem dolorum?
        </p>
        <div className={style.copyCTA}>
          <span>Explore</span>
          <button className={style.eyeButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-eye"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"></path>
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={style.headerRight}></div>
    </div>
  );
};
export default FlyHeaderPage;
