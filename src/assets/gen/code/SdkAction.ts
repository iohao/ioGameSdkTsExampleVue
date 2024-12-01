// generateTime 2024-11-14 20:17:00
// https://github.com/iohao/ioGame
import * as ioGame from "../common_pb";
import {toBinary} from "@bufbuild/protobuf";
import {CmdKit, RequestCommand, ResponseResult} from "iohao-sdk";

/**
 * My SdkAction
 * @author https://github.com/iohao/ioGame
 */
export class SdkAction {
    private static readonly loginVerify_1_0: number = CmdKit.mappingRequest(65536, "user login");
    private static readonly triggerBroadcast_1_1: number = CmdKit.mappingRequest(65537, "test broadcast");
    private static readonly intValue_1_2: number = CmdKit.mappingRequest(65538, "test int");
    private static readonly longValue_1_3: number = CmdKit.mappingRequest(65539, "test long");
    private static readonly boolValue_1_4: number = CmdKit.mappingRequest(65540, "test boolean");
    private static readonly stringValue_1_5: number = CmdKit.mappingRequest(65541, "test String");
    private static readonly value_1_6: number = CmdKit.mappingRequest(65542, "test Object；测试单个对象的接收与响应。");
    private static readonly listInt_1_12: number = CmdKit.mappingRequest(65548, "test int list");
    private static readonly listLong_1_13: number = CmdKit.mappingRequest(65549, "test Long list");
    private static readonly listBool_1_14: number = CmdKit.mappingRequest(65550, "test Boolean list");
    private static readonly listString_1_15: number = CmdKit.mappingRequest(65551, "test String list");
    private static readonly listValue_1_16: number = CmdKit.mappingRequest(65552, "test Object list");
    private static readonly testError_1_20: number = CmdKit.mappingRequest(65556, "test error code");
    private static readonly noParam_1_60: number = CmdKit.mappingRequest(65596, "noParam method test. 没有参数的方法测试");
    private static readonly noReturn_1_61: number = CmdKit.mappingRequest(65597, "noReturn method test. 没有返回值的方法测试");

    /**
     * user login
     * @param verifyMessage loginVerify
     * @param callback User info (returnType: {@link UserMessage})
     * @returns {@link RequestCommand} request command
     * @example
     * // loginVerify
     * const verifyMessage: LoginVerifyMessage = ...;
     * SdkAction.ofLoginVerify(verifyMessage, result => {
     *     // ioGame: your biz code.
     *     // User info
     *     const value = result.getValue(UserMessageSchema);
     *     result.log(value);
     * });
     */
    static ofLoginVerify(verifyMessage: ioGame.LoginVerifyMessage, callback: (result: ResponseResult) => void): RequestCommand {
        const data = toBinary(ioGame.LoginVerifyMessageSchema, verifyMessage);
        const requestCommand = RequestCommand.of(this.loginVerify_1_0, data).onCallback(callback);
        requestCommand.dataSource = verifyMessage;
        return requestCommand.execute();
    }

    /**
     * user login
     * @param verifyMessage loginVerify
     * @returns {@link ResponseResult} User info (returnType: {@link UserMessage})
     * @example
     * // loginVerify
     * const verifyMessage: LoginVerifyMessage = ...;
     * const result = await SdkAction.ofAwaitLoginVerify(verifyMessage);
     * // ioGame: your biz code.
     * // User info
     * const value = result.getValue(UserMessageSchema);
     * result.log(value);
     */
    static async ofAwaitLoginVerify(verifyMessage: ioGame.LoginVerifyMessage): Promise<ResponseResult> {
        const data = toBinary(ioGame.LoginVerifyMessageSchema, verifyMessage);
        const requestCommand = RequestCommand.of(this.loginVerify_1_0, data);
        requestCommand.dataSource = verifyMessage;
        return await RequestCommand.ofAwaitRequestCommand(requestCommand);
    }

    /**
     * test broadcast
     * @returns RequestCommand void
     * @example
     * SdkAction.ofTriggerBroadcast();
     */
    static ofTriggerBroadcast(): RequestCommand {
        return RequestCommand.of(this.triggerBroadcast_1_1).execute();
    }

    /**
     * test int
     * @param value value
     * @param callback int value (returnType: {@link number})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: number = ...;
     * SdkAction.ofIntValue(value, result => {
     *     // ioGame: your biz code.
     *     // int value
     *     const value = result.getInt();
     *     result.log(value);
     * });
     */
    static ofIntValue(value: number, callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofInt(this.intValue_1_2, value).onCallback(callback).execute();
    }

    /**
     * test int
     * @param value value
     * @returns {@link ResponseResult} int value (returnType: {@link number})
     * @example
     * // value
     * const value: number = ...;
     * const result = await SdkAction.ofAwaitIntValue(value);
     * // ioGame: your biz code.
     * // int value
     * const value = result.getInt();
     * result.log(value);
     */
    static async ofAwaitIntValue(value: number): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitInt(this.intValue_1_2, value);
    }

    /**
     * test long
     * @param value value
     * @param callback long value (returnType: {@link bigint})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: bigint = ...;
     * SdkAction.ofLongValue(value, result => {
     *     // ioGame: your biz code.
     *     // long value
     *     const value = result.getLong();
     *     result.log(value);
     * });
     */
    static ofLongValue(value: bigint, callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofLong(this.longValue_1_3, value).onCallback(callback).execute();
    }

    /**
     * test long
     * @param value value
     * @returns {@link ResponseResult} long value (returnType: {@link bigint})
     * @example
     * // value
     * const value: bigint = ...;
     * const result = await SdkAction.ofAwaitLongValue(value);
     * // ioGame: your biz code.
     * // long value
     * const value = result.getLong();
     * result.log(value);
     */
    static async ofAwaitLongValue(value: bigint): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitLong(this.longValue_1_3, value);
    }

    /**
     * test boolean
     * @param value value
     * @param callback boolean value (returnType: {@link boolean})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: boolean = ...;
     * SdkAction.ofBoolValue(value, result => {
     *     // ioGame: your biz code.
     *     // boolean value
     *     const value = result.getBool();
     *     result.log(value);
     * });
     */
    static ofBoolValue(value: boolean, callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofBool(this.boolValue_1_4, value).onCallback(callback).execute();
    }

    /**
     * test boolean
     * @param value value
     * @returns {@link ResponseResult} boolean value (returnType: {@link boolean})
     * @example
     * // value
     * const value: boolean = ...;
     * const result = await SdkAction.ofAwaitBoolValue(value);
     * // ioGame: your biz code.
     * // boolean value
     * const value = result.getBool();
     * result.log(value);
     */
    static async ofAwaitBoolValue(value: boolean): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitBool(this.boolValue_1_4, value);
    }

    /**
     * test String
     * @param value value
     * @param callback String value (returnType: {@link string})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: string = ...;
     * SdkAction.ofStringValue(value, result => {
     *     // ioGame: your biz code.
     *     // String value
     *     const value = result.getString();
     *     result.log(value);
     * });
     */
    static ofStringValue(value: string, callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofString(this.stringValue_1_5, value).onCallback(callback).execute();
    }

    /**
     * test String
     * @param value value
     * @returns {@link ResponseResult} String value (returnType: {@link string})
     * @example
     * // value
     * const value: string = ...;
     * const result = await SdkAction.ofAwaitStringValue(value);
     * // ioGame: your biz code.
     * // String value
     * const value = result.getString();
     * result.log(value);
     */
    static async ofAwaitStringValue(value: string): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitString(this.stringValue_1_5, value);
    }

    /**
     * test Object；测试单个对象的接收与响应。
     * @param loginVerifyMessage loginVerify；登录对象。
     * @param callback UserMessage；用户数据。 (returnType: {@link UserMessage})
     * @returns {@link RequestCommand} request command
     * @example
     * // loginVerify；登录对象。
     * const loginVerifyMessage: LoginVerifyMessage = ...;
     * SdkAction.ofValue(loginVerifyMessage, result => {
     *     // ioGame: your biz code.
     *     // UserMessage；用户数据。
     *     const value = result.getValue(UserMessageSchema);
     *     result.log(value);
     * });
     */
    static ofValue(loginVerifyMessage: ioGame.LoginVerifyMessage, callback: (result: ResponseResult) => void): RequestCommand {
        const data = toBinary(ioGame.LoginVerifyMessageSchema, loginVerifyMessage);
        const requestCommand = RequestCommand.of(this.value_1_6, data).onCallback(callback);
        requestCommand.dataSource = loginVerifyMessage;
        return requestCommand.execute();
    }

    /**
     * test Object；测试单个对象的接收与响应。
     * @param loginVerifyMessage loginVerify；登录对象。
     * @returns {@link ResponseResult} UserMessage；用户数据。 (returnType: {@link UserMessage})
     * @example
     * // loginVerify；登录对象。
     * const loginVerifyMessage: LoginVerifyMessage = ...;
     * const result = await SdkAction.ofAwaitValue(loginVerifyMessage);
     * // ioGame: your biz code.
     * // UserMessage；用户数据。
     * const value = result.getValue(UserMessageSchema);
     * result.log(value);
     */
    static async ofAwaitValue(loginVerifyMessage: ioGame.LoginVerifyMessage): Promise<ResponseResult> {
        const data = toBinary(ioGame.LoginVerifyMessageSchema, loginVerifyMessage);
        const requestCommand = RequestCommand.of(this.value_1_6, data);
        requestCommand.dataSource = loginVerifyMessage;
        return await RequestCommand.ofAwaitRequestCommand(requestCommand);
    }

    /**
     * test int list
     * @param value value
     * @param callback int list (returnType: list of {@link number})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: number[] = ...;
     * SdkAction.ofListInt(value, result => {
     *     // ioGame: your biz code.
     *     // int list
     *     const value = result.listInt();
     *     result.log(value);
     * });
     */
    static ofListInt(value: number[], callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofIntList(this.listInt_1_12, value).onCallback(callback).execute();
    }

    /**
     * test int list
     * @param value value
     * @returns {@link ResponseResult} int list (returnType: list of {@link number})
     * @example
     * // value
     * const value: number[] = ...;
     * const result = await SdkAction.ofAwaitListInt(value);
     * // ioGame: your biz code.
     * // int list
     * const value = result.listInt();
     * result.log(value);
     */
    static async ofAwaitListInt(value: number[]): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitIntList(this.listInt_1_12, value);
    }

    /**
     * test Long list
     * @param value value
     * @param callback Long list (returnType: list of {@link bigint})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: bigint[] = ...;
     * SdkAction.ofListLong(value, result => {
     *     // ioGame: your biz code.
     *     // Long list
     *     const value = result.listLong();
     *     result.log(value);
     * });
     */
    static ofListLong(value: bigint[], callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofLongList(this.listLong_1_13, value).onCallback(callback).execute();
    }

    /**
     * test Long list
     * @param value value
     * @returns {@link ResponseResult} Long list (returnType: list of {@link bigint})
     * @example
     * // value
     * const value: bigint[] = ...;
     * const result = await SdkAction.ofAwaitListLong(value);
     * // ioGame: your biz code.
     * // Long list
     * const value = result.listLong();
     * result.log(value);
     */
    static async ofAwaitListLong(value: bigint[]): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitLongList(this.listLong_1_13, value);
    }

    /**
     * test Boolean list
     * @param value value
     * @param callback Boolean list (returnType: list of {@link boolean})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: boolean[] = ...;
     * SdkAction.ofListBool(value, result => {
     *     // ioGame: your biz code.
     *     // Boolean list
     *     const value = result.listBool();
     *     result.log(value);
     * });
     */
    static ofListBool(value: boolean[], callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofBoolList(this.listBool_1_14, value).onCallback(callback).execute();
    }

    /**
     * test Boolean list
     * @param value value
     * @returns {@link ResponseResult} Boolean list (returnType: list of {@link boolean})
     * @example
     * // value
     * const value: boolean[] = ...;
     * const result = await SdkAction.ofAwaitListBool(value);
     * // ioGame: your biz code.
     * // Boolean list
     * const value = result.listBool();
     * result.log(value);
     */
    static async ofAwaitListBool(value: boolean[]): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitBoolList(this.listBool_1_14, value);
    }

    /**
     * test String list
     * @param value value
     * @param callback String list (returnType: list of {@link string})
     * @returns {@link RequestCommand} request command
     * @example
     * // value
     * const value: string[] = ...;
     * SdkAction.ofListString(value, result => {
     *     // ioGame: your biz code.
     *     // String list
     *     const value = result.listString();
     *     result.log(value);
     * });
     */
    static ofListString(value: string[], callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofStringList(this.listString_1_15, value).onCallback(callback).execute();
    }

    /**
     * test String list
     * @param value value
     * @returns {@link ResponseResult} String list (returnType: list of {@link string})
     * @example
     * // value
     * const value: string[] = ...;
     * const result = await SdkAction.ofAwaitListString(value);
     * // ioGame: your biz code.
     * // String list
     * const value = result.listString();
     * result.log(value);
     */
    static async ofAwaitListString(value: string[]): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitStringList(this.listString_1_15, value);
    }

    /**
     * test Object list
     * @param value LoginVerifyMessage list
     * @param callback UserMessage list (returnType: list of {@link UserMessage})
     * @returns {@link RequestCommand} request command
     * @example
     * // LoginVerifyMessage list
     * const value: LoginVerifyMessage[] = ...;
     * SdkAction.ofListValue(value, result => {
     *     // ioGame: your biz code.
     *     // UserMessage list
     *     const value = result.listValue(UserMessageSchema);
     *     result.log(value);
     * });
     */
    static ofListValue(value: ioGame.LoginVerifyMessage[], callback: (result: ResponseResult) => void): RequestCommand {
        const dataList = value.map(o => {
            return toBinary(ioGame.LoginVerifyMessageSchema, o);
        });
        const requestCommand = RequestCommand.ofValueList(this.listValue_1_16, dataList).onCallback(callback);
        requestCommand.dataSource = value;
        return requestCommand.execute();
    }

    /**
     * test Object list
     * @param value LoginVerifyMessage list
     * @returns {@link ResponseResult} UserMessage list (returnType: list of {@link UserMessage})
     * @example
     * // LoginVerifyMessage list
     * const value: LoginVerifyMessage[] = ...;
     * const result = await SdkAction.ofAwaitListValue(value);
     * // ioGame: your biz code.
     * // UserMessage list
     * const value = result.listValue(UserMessageSchema);
     * result.log(value);
     */
    static async ofAwaitListValue(value: ioGame.LoginVerifyMessage[]): Promise<ResponseResult> {
        const dataList = value.map(o => {
            return toBinary(ioGame.LoginVerifyMessageSchema, o);
        });

        const requestCommand = RequestCommand.ofValueList(this.listValue_1_16, dataList);
        requestCommand.dataSource = value;

        return await RequestCommand.ofAwaitRequestCommand(requestCommand);
    }

    /**
     * test error code
     * @param value If the value is equal to 2, an error will be thrown
     * @param callback int (returnType: {@link number})
     * @returns {@link RequestCommand} request command
     * @example
     * // If the value is equal to 2, an error will be thrown
     * const value: number = ...;
     * SdkAction.ofTestError(value, result => {
     *     // ioGame: your biz code.
     *     // int
     *     const value = result.getInt();
     *     result.log(value);
     * });
     */
    static ofTestError(value: number, callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofInt(this.testError_1_20, value).onCallback(callback).execute();
    }

    /**
     * test error code
     * @param value If the value is equal to 2, an error will be thrown
     * @returns {@link ResponseResult} int (returnType: {@link number})
     * @example
     * // If the value is equal to 2, an error will be thrown
     * const value: number = ...;
     * const result = await SdkAction.ofAwaitTestError(value);
     * // ioGame: your biz code.
     * // int
     * const value = result.getInt();
     * result.log(value);
     */
    static async ofAwaitTestError(value: number): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitInt(this.testError_1_20, value);
    }

    /**
     * noParam method test. 没有参数的方法测试
     * @param callback counter (returnType: {@link number})
     * @returns {@link RequestCommand} request command
     * @example
     * SdkAction.ofNoParam(result => {
     *     // ioGame: your biz code.
     *     result.log("hello ioGame!");
     *     // counter
     *     const value = result.getInt();
     *     result.log(value);
     * });
     */
    static ofNoParam(callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.of(this.noParam_1_60).onCallback(callback).execute();
    }

    /**
     * noParam method test. 没有参数的方法测试
     * @returns {@link ResponseResult} [counter : {@link number}]
     * @example
     * const result = await SdkAction.ofAwaitNoParam();
     * // ioGame: your biz code.
     * result.log("hello ioGame!");
     * // counter
     * const value = result.getInt();
     * result.log(value);
     */
    static async ofAwaitNoParam(): Promise<ResponseResult> {
        return await RequestCommand.ofAwait(this.noParam_1_60);
    }

    /**
     * noReturn method test. 没有返回值的方法测试
     * @param name name。
     * @returns RequestCommand void
     * @example
     * // name
     * const name: string = ...;
     * SdkAction.ofNoReturnMethod(name);
     */
    static ofNoReturnMethod(name: string): RequestCommand {
        return RequestCommand.ofString(this.noReturn_1_61, name).execute();
    }
}