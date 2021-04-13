//module pattern
const UICtrl = (function () {
    let text = "Hello World";

    //private
    const changeText = function (newText) {
        text = newText;
    };

    //public
    return {
        getText: function () {
            console.log(text);
        },
        setText: function (newText) {
            changeText(newText);
        },
    };
})();

UICtrl.getText();
UICtrl.setText("blah");
UICtrl.getText();

//revealing module pattern
const ItemCtrl = (function () {
    let data = [];

    function add(item) {
        data.push(item);
        console.log("Item added...");
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get,
    };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));

//singleton
const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object("object instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();

console.log(inst1 === inst2);

//factory
function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        if (type === "simple") {
            member = new SimpleMembership(name);
        } else if (type === "standard") {
            member = new StandardMembership(name);
        } else if (type === "super") {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        };

        return member;
    };
}

const SimpleMembership = function (name) {
    this.name = name;
    this.cost = "$5";
};

const StandardMembership = function (name) {
    this.name = name;
    this.cost = "$15";
};

const SuperMembership = function (name) {
    this.name = name;
    this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Chris Jackson", "super"));
members.push(factory.createMember("Janice Williams", "simple"));
members.push(factory.createMember("Tom Smith", "standard"));

// console.log(members);

members.forEach(function (member) {
    member.define();
});

//observer
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
    click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
    click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
    click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function () {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

//mediator
const User = function (name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    },
};

const Chatroom = function () {
    let users = {}; // list of users

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        },
    };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send("Hello Jeff", jeff);
sara.send("Hello Brad, you are the best dev ever!", brad);
jeff.send("Hello Everyone!!!!");
