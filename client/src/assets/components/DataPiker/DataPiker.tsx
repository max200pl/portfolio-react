import { FC, useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataPiker.scss"


type DatePickerProps = {
    startDateHandler: (startDate: number | undefined) => void
    endDateHandler: (endDate: number | undefined) => void
}

const DataPiker: FC<DatePickerProps> = ({ endDateHandler, startDateHandler }) => {
    const [rangeStart, setRangeStart] = useState<Date>();
    const [rangeEnd, setRangeEnd] = useState<Date>();

    const selectStartDate = useCallback((StartDate: Date) => {
        setRangeStart(StartDate)
        const unixTimestamp: number | undefined = StartDate ? Math.floor(StartDate.getTime() / 1000) : undefined;
        startDateHandler(unixTimestamp)
    }, [startDateHandler])

    const selectEndDate = useCallback((EndDate: Date) => {
        setRangeEnd(EndDate)
        const unixTimestamp: number | undefined = EndDate ? Math.floor(EndDate.getTime() / 1000) : undefined;
        endDateHandler(unixTimestamp)
    }, [endDateHandler])

    return (
        <div className="data_piker">
            <div className="form_control">
                <DatePicker
                    className="form_control__input"
                    selectsStart
                    selected={rangeStart}
                    endDate={rangeEnd}
                    onChange={selectStartDate}
                    showTimeInput
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    popperClassName="popup_data_piker"
                    placeholderText="From"
                    clearButtonClassName="popup_data_piker__action_button"
                    isClearable
                />
                <span className="animation-bg"></span>
            </div>

            <div className="form_control"  >
                <DatePicker
                    className="form_control__input"
                    selectsEnd
                    selected={rangeEnd}
                    startDate={rangeStart}
                    endDate={rangeEnd}
                    onChange={selectEndDate}
                    showTimeInput
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    popperClassName="popup_data_piker"
                    placeholderText="To"
                    clearButtonClassName="popup_data_piker__action_button"
                    isClearable
                />
                <span className="animation-bg"></span>
            </div>
        </div>
    );
}


export default DataPiker