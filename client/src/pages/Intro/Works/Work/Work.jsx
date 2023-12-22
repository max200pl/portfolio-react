import s from "./Work.module.scss";
import { getFolderName, getImageName, getYear } from "../../../../assets/helpers/helpers";
import ImageLazyLoad from "../../../../assets/components/ImageLazyLoad/ImageLazyLoad";

export const Work = ({
    category,
    date,
    name,
    cardImage,
    onCardClick,
    onClickEditWork
}) => {
    const imageName = getImageName(cardImage.name)
    const folderName = getFolderName(cardImage.name)
    const urlImage = `http://localhost:8000/works/image?project=${folderName}&name=${imageName}`;

    return (
        <div className={s.work}
            onClick={() => onCardClick()}
        >

            <button className={s.work__edit_button} onClick={(e) => {
                e.stopPropagation()
                onClickEditWork()
            }}>
                Edit work
            </button>

            <div
                className={s.work__container}
            >
                <div className={s.work__image}>
                    <ImageLazyLoad
                        mixin="work"
                        blurHash={cardImage.blurHash}
                        name={cardImage.name}
                        url={urlImage}
                    />
                </div>

                <div className={s.work__content}>
                    <div className={s.work__cat}>{category}</div>
                    <div className={s.work__title}>
                        {name}
                        <time className={s.work__date}>{getYear(date)}</time>
                    </div>
                </div>
            </div>
        </div>
    );
};