import React, { useEffect } from 'react'
import './score.css'

export default function Score(props) {

    return (
        <div className="score-inner">
            <section className="wpm">
                <div className="square">
                    <h1 className="score-text">Your WPM</h1>
                    <h1 className="score-number">{props.score}</h1>
                </div>
                <div className="square">
                    <h1 className="score-text">Your Accuracy</h1>
                    <h1 className="score-number">{props.accu}</h1>
                </div>
            </section>
        </div>
    )
}
