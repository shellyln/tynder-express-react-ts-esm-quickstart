/** Greeting API request message */
export interface GreetingRequestMessage {
    /** My name */
    name: string;
}

/** Greeting API response message */
export interface GreetingResponseMessage {
    /** Greeting words */
    greeting: string;
    /** Greeting to */
    to: string;
}

