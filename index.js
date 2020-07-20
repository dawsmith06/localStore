window.localStore = (function(){
    return {
        set(key,data){
            let json    = JSON.stringify(data)
            let channel = new BroadcastChannel(key);
            localStorage.setItem(key,btoa(json));
            channel.postMessage(data);
        },

        update(key,data){
            if(this.has(key)){
                let item  = this.get(key);
                let merge = Object.assign({}, item, data);
                this.set(key,merge);
            }
            else{
                this.set(key,data);
            }
        },

        get(key){
            let data   = localStorage.getItem(key);
            let schema = this.getSchemas(key);
            return data == undefined ? schema : JSON.parse(atob(data));
        },

        remove(key){
            return localStorage.removeItem(key);
        },

        has(key){
            let data = localStorage.getItem(key);
            return data == undefined ? false : true;
        },

        hasProperty(key,property){
            return this.has(key) && this.get(key).hasOwnProperty(property);
        },

        subscribe(channelName,callback){
            let channel = new BroadcastChannel(channelName);
            channel.onmessage = ((e) =>{
               callback(e);
            });
        },

        getSchemas(key){
            let data = window.schemas || {};
            return data[key] == undefined ? {} : data[key];
        },

        setSchemas(data){
            window.schemas = data;
        }
    }
}());

module.exports = localStore;