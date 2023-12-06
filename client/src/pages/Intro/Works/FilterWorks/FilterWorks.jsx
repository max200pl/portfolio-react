import React from "react";
import s from "./FilterWorks.module.scss";

export default function FilterWorks({
    onFilterChange,
    categories
}) {
    return (
        <div className={s.filterWorks__nav}>
            <button
                onClick={() => onFilterChange({ category: "" })}
                className={s.filterWorks__nav_link}
            >
                All
            </button>
            {categories.map(category => (
                <button key={category}
                    onClick={() => onFilterChange({ category })}
                    className={s.filterWorks__nav_link}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
