const loadState: (stateKey: string) => {} = (stateKey) => {
    try {
        const serializedState: string | null = localStorage.getItem(stateKey);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const saveState: (state: {}, key: string) => void = (state, key) => {
    try {
        const serializedState: string | null = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.log("save state to localstorage error:", error);
    }
};

export {loadState, saveState}