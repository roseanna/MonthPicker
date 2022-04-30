import { createElement, useRef } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { MonthBox } from "./components/MonthBox";

import Picker from 'react-month-picker';

import "./ui/MonthPicker.css";

export function MonthPicker({ DateAttribute, MinDateAttribute, MaxDateAttribute, SelectPlaceholder }) { 
    const pickerRef = useRef(null)

    const pickerLang = {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        from: 'From', to: 'To',
    }

    const makeText = m => {
        if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
        return '?'
    }


    const handleClickMonthBox = (e) => {
        pickerRef.current.show()
    }

    const handleAMonthChange = (year, month) => {
        console.log('year: ' + year + ' month: ' + month)
        let newDate;
        if (year != null && month != null)
            newDate = new Date(year, month-1, 1)
        DateAttribute.setValue(newDate)
        //
    }

    const toString = () => {
        console.log('Date Attribute value: ' + DateAttribute.value) //Sat Feb 01 2014 00:00:00 GMT-0500 (Eastern Standard Time)
        const dateValue = new Date(DateAttribute.value)    
        return dateValue == 'Invalid Date' ? SelectPlaceholder : makeText({year: dateValue.getFullYear(), month: dateValue.getMonth()+1})
    }

    const generateYears = () => {
        console.log('Max Date Attribute: ' + MaxDateAttribute)
        console.log('Min Date Attribute: ' + MinDateAttribute)
        
        // MinYear/maxYear not setting correctly with the right value. Need to take closer look.  (and to remove line 52/53)
        let minYear = MinDateAttribute === undefined ? 2020 : new Date(MinDateAttribute.value).getFullYear()
        let maxYear = MaxDateAttribute === undefined ? new Date().getFullYear() + 100 : new Date(MaxDateAttribute.value).getFullYear()
        console.log('Min Year: ' + minYear + ', Max Year: ' + maxYear)
        let years = []

        minYear = isNaN(minYear) ? 2020 : minYear
        maxYear = isNaN(maxYear) ? new Date().getFullYear() + 10 : maxYear
        console.log('Min Year: ' + minYear + ', Max Year: ' + maxYear)

        for (let i = minYear; i < maxYear; i++) {
            years.push(i)
        }
        console.log('Years: ' + years)

        return years
    }

    return <div className="edit">
        <Picker
            ref={pickerRef}
            years={generateYears()}
            value={{year: new Date().getFullYear(), month: new Date().getMonth()}}
            lang={pickerLang.months}
            onChange={handleAMonthChange}
            // onDismiss={this.handleAMonthDissmis}
        >
        <MonthBox value={toString()} onClick={handleClickMonthBox} />

        </Picker>
    </div>;
}
