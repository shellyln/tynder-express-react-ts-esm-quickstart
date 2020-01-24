
import React,
       { useState,
         useEffect }               from 'react';
import * as querystring            from 'querystring';

import { ValidationContext }       from 'tynder/modules/types';
import { deserializeFromObject }   from 'tynder/modules/serializer';
import { validate,
         getType }                 from 'tynder/modules/validator';

import { GreetingRequestMessage,
         GreetingResponseMessage } from './schema-types/greeting';
import GreetingSchema              from './schema-compiled/greeting';

import logo                        from './logo.svg';
import                                  './App.css';



const schema = deserializeFromObject(GreetingSchema);
const initialGreet = {greeting: '', to: ''};


const App: React.FC = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [greet, setGreet] = useState(initialGreet);


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });


    const calloutGreeting = async (name: string) => {
        try {
            const params: GreetingRequestMessage = {
                name,
            };
            {
                const ctx: Partial<ValidationContext> = {};
                const validated = validate<GreetingRequestMessage>(params, getType(schema, 'GreetingRequestMessage'), ctx);

                if (! validated) {
                    console.log('Validation of request failed on client side:');
                    console.log(ctx.errors);
                    setGreet(initialGreet);
                    return;
                }
            }

            const resp = await fetch(`/api?${querystring.stringify(params as any)}`, {
                method: 'GET',
                // mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                // headers: {
                //     'Content-Type': 'application/json; charset=utf-8',
                // },
                redirect: 'follow',
                referrer: 'no-referrer',
                // body: JSON.stringify({}),
            });

            if (! resp.ok) {
                console.log('Fetch failed:');
                console.log(resp.statusText);
                setGreet(initialGreet);
            }

            const payload: GreetingResponseMessage = await resp.json();
            {
                const ctx: Partial<ValidationContext> = {};
                const validated = validate<GreetingResponseMessage>(payload, getType(schema, 'GreetingResponseMessage'), ctx);

                if (! validated) {
                    console.log('Validation of response failed on client side:');
                    console.log(ctx.errors);
                    setGreet(initialGreet);
                    return;
                }

                setGreet(validated.value);
            }
        } catch (e) {
            console.log('Fetch failed:');
            console.log(e);
            setGreet(initialGreet);
        }
    };


    const buttonClick = () => {
        setCount(count + 1);
        calloutGreeting(name);
    };


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    Learn React
                </a>
            <div>
                <p>You clicked {count} times</p>
                <p>
                    <input value={name} placeholder="Your name" onChange={(ev) => setName(ev.target.value)}></input>
                    <button onClick={buttonClick}>
                        Click me
                    </button>
                </p>
                <p>{greet.greeting ? `${greet.greeting}, ${greet.to}!` : ''}</p>
            </div>
            </header>
        </div>
    );
}

export default App;
