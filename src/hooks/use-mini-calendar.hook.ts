import { useCallback, useEffect, useMemo, useState } from 'react';
import { Value } from 'react-calendar/src/shared/types';


export interface IUseMiniCalendarProps {
    initialValue?: string | null;
    resetId?: string | number | undefined;
    disabled?: boolean;
}

export interface IUseMiniCalendar {
    selectedDate: Value;
    onCalendarChange: (date: Value) => void;
    disabled?: boolean;
}

export const useMiniCalendar = function (props: IUseMiniCalendarProps): IUseMiniCalendar {
    const [ selectedDate, setSelectedDate ] = useState<Value>(props.initialValue
                                                              ? new Date(props.initialValue)
                                                              : null,
    );
    const onCalendarChange                  = useCallback<(value: Value) => void>((date: Value) => {
        setSelectedDate(date);
    }, [ setSelectedDate ]);

    useEffect(() => {
        const date: Date | null = props.initialValue
                                  ? new Date(props.initialValue)
                                  : null;
        if ((date && date.toISOString()) !== (selectedDate && (selectedDate as Date).toISOString())) {
            setSelectedDate(props.initialValue
                            ? new Date(props.initialValue)
                            : null);
        }
    }, [ props.initialValue ]);

    useEffect(() => {
        const date: Date | null = props.initialValue
                                  ? new Date(props.initialValue)
                                  : null;

        setSelectedDate(date);
    }, [ props.resetId ]);

    return useMemo(() => ({
        selectedDate,
        onCalendarChange,
        disabled: props.disabled,
    }), [ selectedDate, onCalendarChange, props.disabled ]);
};