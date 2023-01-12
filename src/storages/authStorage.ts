const key = 'auth';

const authStorage = {
    get() { 
        const data = localStorage.getItem(key);
        if (!data) return null;
        try {
            const auth = JSON.parse(data);
            return auth;
        } catch (e) {
            return null;
        }
    },

    set(data : any) {
        localStorage.setItem(key, JSON.stringify({
            uid: data.uid,
            token: data.token
        }));
    },

    clear() { 
        return localStorage.removeItem(key);
    }
}

export default authStorage;