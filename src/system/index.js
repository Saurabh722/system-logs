import { LocalStorage } from "node-localstorage";

if ( !global.localStorage ) {
    global.localStorage = new LocalStorage('./src/system/LOG_DB');
}

const system = {
    key: 'demyst-app-server-log',
    get: () => {
        return localStorage.getItem(system.key) || '';
    },
    set: (value) => {
        const date = new Date();
        const dateString = date.toISOString();
        let prevLogs = system.get();
        prevLogs = prevLogs ? `${prevLogs}\r\n` : '';
        const updateLogs = `${prevLogs}${dateString} : ${value}`;

        localStorage.setItem(system.key, updateLogs);
        
        return system.get();
    },
    clear: () => {
        localStorage.clear();
        return true;
    }
};

export default system;
