export default function proxyEvents(from, to, events) {
    const eventFunctions = {};
    for (const event of events) {
        const eventFunction = (...arguments_) => {
            to.emit(event, ...arguments_);
        };
        eventFunctions[event] = eventFunction;
        from.on(event, eventFunction);
    }
    return () => {
        for (const [event, eventFunction] of Object.entries(eventFunctions)) {
            from.off(event, eventFunction);
        }
    };
}
