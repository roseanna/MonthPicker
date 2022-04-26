import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { MonthBox } from "./components/MonthBox";

import Picker from 'react-month-picker';

import "./ui/MonthPicker.css";

export function MonthPicker({ DateAttribute, MinDateAttribute, MaxDateAttribute }) { 
    const pickerLang = {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        from: 'From', to: 'To',
    }

    const makeText = m => {
        if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
        return '?'
    }

    return <div>
        <Picker
            // ref={this.pickAMonth}
            years={[2008, 2011, 2012, 2014, 2016, 2018, 2020]}
            value={{year: 2014, month: 11}}
            lang={pickerLang.months}
            // onChange={this.handleAMonthChange}
            // onDismiss={this.handleAMonthDissmis}
        >
        {/* <MonthBox value={makeText({year: 2014, month: 11})} /> */}
        </Picker>
    </div>;
}
