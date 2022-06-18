import { useEffect, useState } from "react";

const Ticker = () => {
    const [hour, sethour] = useState(18);
    const [minutes, setminutes] = useState(25);
    const [seconds, setseconds] = useState(32);
    useEffect(() => {
        const interval = setInterval(() => {
        if(seconds ==0 ){
            setminutes(minutes=>minutes-1)
            setseconds(seconds=>59)
        }
        else{
            setseconds(seconds => seconds-1)
        }
        if(minutes ==0 ){
            sethour(hour=>hour-1)
            setminutes(minutes=>59)
            setseconds(seconds=>59)
        }
        }, 1000);
        
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <>
            <div className="counter"> 
                <div><span className="count"> {hour}</span> <br />Hours</div>
                <div><span className="count"> {minutes}</span> <br />Mins</div>
                <div><span className="count"> {seconds}</span> <br />Secs</div>
            </div>
        </>
    )
};
export default Ticker