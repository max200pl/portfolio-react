import React from "react";
import s from "./FilterWorks.module.scss";

export default function FilterWorks(props) {
  return (
    <div className={s.filterWorks__nav}>
      <button
        onClick={props.filterWork}
        className={s.filterWorks__nav_link}
        data-filter="all"
      >
        All
      </button>
      <button
        onClick={props.filterWork}
        className={s.filterWorks__nav_link}
        data-filter="landing"
      >
        Landing
      </button>
      <button
        onClick={props.filterWork}
        className={s.filterWorks__nav_link}
        data-filter="website"
      >
        Websites
      </button>
    </div>
  );
}
