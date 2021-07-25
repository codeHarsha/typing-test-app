import React, { useEffect, useRef, useState } from 'react'
import './typer.css';

export default function Typer(props) {

    //const [countDownDate, setcountDownDate] = useState(new Date().getTime() + 60000);
    var [correct, setCorrect] = useState([]);
    var [distance, setdistance] = useState();
    const comp = useRef();
    const comp2 = useRef();
    const liveWPMHandler = useRef(null);
    const liveAccuHandler = useRef(null);
    const text = "The Taj Mahal is a beautiful monument built in 1631 by an Emperor named Shah Jahan in memory of his wife Mumtaz Mahal. It is situated on the banks of river Yamuna at Agra. It looks beautiful in the moonlight. The Taj Mahal is made up of white marble. In front of the monument, there is a beautiful garden known as the Charbagh. Inside the monument, there are two tombs. These tombs are of Shah Jahan and his wife Mumtaz Mahal. The Taj Mahal is considered as one of the Seven Wonders of the World. Many tourists come to see this beautiful structure from different parts of the world.";
    const textArray = text.split(" ");
    const [inputText, setinputText] = useState({ text: "" });
    var message = "";
    var [deps, setdeps] = useState(0);
    var [liveWPM, setliveWPM] = useState(0);
    var [liveAccu, setliveAccu] = useState("0%");

    const handleInput = (e) => {
        let s = e.target.value;
        setinputText(prevState => {
            return { ...prevState, text: s }  /** usage of prevState to avoid direct change of current state */
        });
        let arrayInput = s.split(" ");
        textCompare(arrayInput);
        calculateLiveWPMAndAccu();
    }

    const calculateLiveWPMAndAccu = () => {
        console.log(correct);
        setliveWPM(0);
        let liveWpmForPercentage=0;
        // for (let index = 0; index < correct.length - 1; index++) {
        //     let temp = correct[index] ? setliveWPM(prevlive => prevlive+1) : 0;
        // }
        correct.forEach((temp) => {
            if(temp) {
                setliveWPM(prevlive => prevlive+1);
                liveWpmForPercentage++;
            }
        });
        let percentagelive = Math.floor((liveWpmForPercentage/correct.length)*100)+"%";
        setliveAccu(percentagelive==="NaN%" ? "0%" : percentagelive);
    }

    const textCompare = (obj) => {
        if(obj.length===1 && obj[0]==="") {
            correct.length = 0;
        }
        console.log(textArray);
        console.log(obj);
        let len = obj.length - 1;
        console.log(len);
        console.log(textArray[len] +"  "+obj[len]);
        if(obj[len]!=='' && textArray[len].startsWith(obj[len]) && textArray[len].length===obj[len].length){
            correct[len] = true;
            console.log("same");
        }
        else {
            correct[len] = false;
            console.log("not same");
        }
        console.log(correct);
    }

// Update the count down every 1 second
function starTimer(){
    if(distance===0 && message==="e") {
        var writingDone = true;
        var countDownDate = new Date().getTime() + 60000;
        comp2.current.value = "";
        comp2.current.readOnly = false;
        message="";
    }
    if(writingDone) {
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            distance = countDownDate - now;
        
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("timer").innerHTML = seconds;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                let a=0;
                correct.forEach((temp) => temp ? a++ : 0);
                props.setResultFunc(a);
                let percentage = Math.floor((a/correct.length)*100)+"%";
                props.setAccuracyFunc(percentage==="NaN%" ? "0%" : percentage);
                correct.length = 0;
                comp2.current.readOnly = true;
                setdeps(prevDeps => prevDeps+1);
                window.scrollTo({
                    top: 1500,
                    behavior: "smooth"
                });
            }
        }, 1000);
        writingDone = false;
    }
}

    useEffect(() => {
        comp2.current.value = "Start Typing .........";
        liveWPMHandler.current.innerHTML = 0;
        liveAccuHandler.current.innerHTML = "0%";
        document.getElementById("timer").innerHTML = "60";
        distance = 0;
        message = "e";
    }, [deps])

    useEffect(() => {
        liveWPMHandler.current.innerHTML = liveWPM;
        liveAccuHandler.current.innerHTML = liveAccu;
    }, [liveWPM,liveAccu])

    useEffect(() => {
        comp.current.value = textArray.join(" ");
    }, [])

    return (
        <div className="typer-inner">
            <section className="bot-text">
                <div className="bot">
                    <textarea ref={comp} rows="11" cols="55" className="comp-textarea" readOnly></textarea>
                </div>
                <div className="text">
                     <textarea ref={comp2} wrap="off" rows="1" cols="55" className="textarea" onChange={handleInput} onClick={starTimer}></textarea>
                </div>
            </section>
            <section className="user-text">
                <div id="timer" className="timer"></div>
                <h6 className="seconds">SECONDS</h6>
                <div ref={liveWPMHandler} id="wordpermin" className="timer"></div>
                <h6 className="seconds">WPM</h6>
                <div ref={liveAccuHandler} id="accuracy" className="timer percentager"></div>
                <h6 className="seconds">ACCURACY</h6>
            </section>
        </div>
    )
}
