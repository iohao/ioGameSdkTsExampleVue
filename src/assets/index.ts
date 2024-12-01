import {
    BulletMessageSchema,
    LoginVerifyMessage,
    LoginVerifyMessageSchema,
    UserMessageSchema
} from "./gen/common_pb";
import {SdkAction} from "./gen/code/SdkAction";
import {Listener} from "./gen/code/Listener";
import {create} from "@bufbuild/protobuf";
import {MyAction} from "./gen/code/MyAction";

export async function onIntValue() {
    console.log("------- onIntValue -------");
    /*
     * cn: 下面两个方法仅是编码风格的区别。
     * en: The following two methods are only different in coding style.
     */

    // 编码风格：回调。 优点：简洁，一体化。
    // code style: callback. Advantages: simple, integrated.
    const value = 1;
    SdkAction.ofIntValue(value, result => {
        result.log(result.getInt());
    });

    // 编码风格：async await 机制。 优点：可避免回调地狱。
    // code style: async await. Advantages: Avoid callback hell.
    const result = await SdkAction.ofAwaitIntValue(value);
    result.log(result.getInt());
}

export async function onLongValue() {
    console.log("------- onLongValue -------");

    const value: bigint = BigInt("9223372036854775800");

    // code style: callback.
    SdkAction.ofLongValue(value, result => {
        result.log(result.getLong());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitLongValue(value);
    result.log(result.getLong());
}

export async function onBoolValue() {
    console.log("------- onBoolValue -------");

    const value = true;

    // code style: callback.
    SdkAction.ofBoolValue(value, result => {
        result.log(result.getBool());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitBoolValue(value);
    result.log(result.getBool());
}

export async function onStringValue() {
    console.log("------- onStringValue -------");

    const value = "ioGame-";

    // code style: callback.
    SdkAction.ofStringValue(value, result => {
        result.log(result.getString());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitStringValue(value);
    result.log(result.getString());
}

export async function onValueObject() {
    console.log("------- onValueObject -------");

    const loginVerifyMessage = create(LoginVerifyMessageSchema, {
        jwt: "10000"
    });

    // code style: callback.
    SdkAction.ofValue(loginVerifyMessage, result => {
        const value = result.getValue(UserMessageSchema);
        result.log(value);
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitValue(loginVerifyMessage);
    const value = result.getValue(UserMessageSchema);
    result.log(value);
}

export async function onListInt() {
    console.log("------- onListInt -------");

    const valueList = [1, 2];

    // code style: callback.
    SdkAction.ofListInt(valueList, result => {
        result.log(result.listInt());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitListInt(valueList);
    result.log(result.listInt());
}

export async function onListLong() {
    console.log("------- onListLong -------");

    const valueList = [BigInt("9223372036854775800")];

    // code style: callback.
    SdkAction.ofListLong(valueList, result => {
        result.log(result.listLong());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitListLong(valueList);
    result.log(result.listLong());
}

export async function onListBool() {
    console.log("------- onListBool -------");

    const valueList = [true, false];

    // code style: callback.
    SdkAction.ofListBool(valueList, result => {
        result.log(result.listBool());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitListBool(valueList);
    result.log(result.listBool());
}

export async function onListString() {
    console.log("------- onListString -------");

    const valueList = ["ioGame - "]

    // code style: callback.
    SdkAction.ofListString(valueList, result => {
        result.log(result.listString());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitListString(valueList);
    result.log(result.listString());
}

export async function onListValue() {
    console.log("------- onListValue -------");

    const valueList: LoginVerifyMessage[] = [
        create(LoginVerifyMessageSchema, {jwt: "10"}),
        create(LoginVerifyMessageSchema, {jwt: "11"})
    ];

    // code style: callback.
    SdkAction.ofListValue(valueList, result => {
        const userMessageList = result.listValue(UserMessageSchema);
        result.log(userMessageList);
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitListValue(valueList);
    const userMessageList = result.listValue(UserMessageSchema);
    result.log(userMessageList);
}

let _testErrorValue = 1;

export async function onTestError() {
    console.log("------- onTestError -------");

    if (_testErrorValue > 2)
        _testErrorValue = 1;

    const value = _testErrorValue++;

    // code style: callback.
    SdkAction.ofTestError(value, result => {
        result.log(result.getInt());
    }).onError(result => {
        result.log(result.getErrorInfo());
    });

    // code style: async await.
    const result = await SdkAction.ofAwaitTestError(value);
    if (result.success()) {
        result.log(result.getInt());
    } else {
        result.log(result.getErrorInfo());
    }
}

export function onTriggerBroadcast() {
    // Clicking here will trigger the broadcast.
    console.log("------- onTriggerBroadcast -------");

    SdkAction.ofTriggerBroadcast();
}

export function listen() {
    // listen single value
    Listener.listenIntValue(result => {
        result.log(result.getInt());
    });

    Listener.listenLongValue(result => {
        result.log(result.getLong())
    });

    Listener.listenBoolValue(result => {
        result.log(result.getBool());
    });

    Listener.listenStringValue(result => {
        result.log(result.getString());
    });

    Listener.listenUserMessage(result => {
        result.log(result.getValue(UserMessageSchema));
    });

    // listen list value
    Listener.listenIntValueList(result => {
        result.log(result.listInt());
    });

    Listener.listenLongValueList(result => {
        result.log(result.listLong());
    });

    Listener.listenBoolValueList(result => {
        result.log(result.listBool());
    });

    Listener.listenStringValueList(result => {
        result.log(result.listString());
    });

    Listener.listenUserMessageList(result => {
        const userList = result.listValue(UserMessageSchema);
        result.log(userList);
    });

    // other
    Listener.listenBulletBroadcast(result => {
        const bullet = result.getValue(BulletMessageSchema);
        result.log(bullet);
    })
}

function helloCallback() {
    const name = "Michael Jackson";

    // code style: callback. 编码风格：回调
    MyAction.ofHello(name, result => {
        const value = result.getString();
        result.log(value);
    });
}







async function helloPromise() {
    const name = "Michael Jackson";

    // code style: async await. 编码风格：await promise
    const result = await MyAction.ofAwaitHello(name)
    if (result.success()) {
        result.log(result.getString());
    }
}








function loginVerifyCallback() {
    const message =
        create(LoginVerifyMessageSchema, {
            jwt: "10"
        })

    // code style: callback. 编码风格：回调
    MyAction.ofLoginVerify(message, result => {
        const value = result.getValue(UserMessageSchema);
        result.log(value);
    });
}

async function loginVerifyPromise() {
    const message =
        create(LoginVerifyMessageSchema, {
            jwt: "10"
        })

    // code style: async await. 编码风格：await promise
    const result =
        await MyAction.ofAwaitLoginVerify(message);

    if (result.success()) {
        const value = result.getValue(UserMessageSchema);
        result.log(value);
    }
}


















