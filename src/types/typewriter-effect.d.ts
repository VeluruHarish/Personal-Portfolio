declare module 'typewriter-effect/dist/core' {
    interface TypewriterOptions {
        strings?: string[];
        autoStart?: boolean;
        loop?: boolean;
        delay?: number;
        deleteSpeed?: number;
        cursor?: string;
    }

    export default class Typewriter {
        constructor(
            element: string | HTMLElement,
            options?: TypewriterOptions
        );
        start(): void;
        stop(): void;
    }
    const Typewriter: any;
    export default Typewriter;
}
