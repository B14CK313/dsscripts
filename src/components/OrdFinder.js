import React, {useState} from 'react'
import {ord} from "../functions/findOrd";
import Card from "./Card";
import {inputStyle} from "../styles";

export default function OrdFinder() {
    const [result, setResult] = useState(null)
    const [a, setA] = useState("")
    const [n, setN] = useState("")
    const [p, setP] = useState("")
    return (
        <Card>
            <h1>Ordnung Finden:</h1>
            <input value={a} onChange={event => setA(event.target.value)} type ="number" placeholder="a" style={inputStyle}/>
            <input value={n} onChange={event => setN(event.target.value)} type ="number" placeholder="n" style={inputStyle}/>
            <input value={p} onChange={event => setP(event.target.value)} type ="number" placeholder="p" style={inputStyle}/>
            <button onClick={() => setResult(ord(n, a, p))}
                    disabled={a === "0" || n === "0" || p === '0' || a === '' || a === "" || n === ""}>Calculate
            </button>
            <ul>
                {result != null ? result.dividers.map((value, index) =>
                    <li>{a}^{value} mod {n} = {result.ord[index]}</li>
                ) : null}
            </ul>
        </Card>
    )
}