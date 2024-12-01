// generateTime 2024-11-14 20:17:00
// https://github.com/iohao/ioGame
import * as ioGame from "../common_pb";
import {toBinary} from "@bufbuild/protobuf";
import {CmdKit, RequestCommand, ResponseResult} from "iohao-sdk";

/**
 * My Action; 我的 Action
 * @author https://github.com/iohao/ioGame
 */
export class MyAction {
    private static readonly hello_2_1: number = CmdKit.mappingRequest(131073, "this is hello action. 这是我提供的 hello action。");
    private static readonly loginVerify_2_2: number = CmdKit.mappingRequest(131074, "我的登录验证 action。My loginVerify action");

    /**
     * this is hello action. 这是我提供的 hello action。
     * @param name your name; 你的名字
     * @param callback 我的响应内容; My Response (returnType: {@link string})
     * @returns {@link RequestCommand} request command
     * @example
     * // your name; 你的名字
     * const name: string = ...;
     * MyAction.ofHello(name, result => {
     *     // ioGame: your biz code.
     *     // 我的响应内容; My Response
     *     const value = result.getString();
     *     result.log(value);
     * });
     */
    static ofHello(name: string, callback: (result: ResponseResult) => void): RequestCommand {
        return RequestCommand.ofString(this.hello_2_1, name).onCallback(callback).execute();
    }

    /**
     * this is hello action. 这是我提供的 hello action。
     * @param name your name; 你的名字
     * @returns {@link ResponseResult} 我的响应内容; My Response (returnType: {@link string})
     * @example
     * // your name; 你的名字
     * const name: string = ...;
     * const result = await MyAction.ofAwaitHello(name);
     * // ioGame: your biz code.
     * // 我的响应内容; My Response
     * const value = result.getString();
     * result.log(value);
     */
    static async ofAwaitHello(name: string): Promise<ResponseResult> {
        return await RequestCommand.ofAwaitString(this.hello_2_1, name);
    }

    /**
     * 我的登录验证 action。My loginVerify action
     * @param verifyMessage 我的验证信息。verifyMessage
     * @param callback 我的用户信息。My UserMessage (returnType: {@link UserMessage})
     * @returns {@link RequestCommand} request command
     * @example
     * // 我的验证信息。verifyMessage
     * const verifyMessage: LoginVerifyMessage = ...;
     * MyAction.ofLoginVerify(verifyMessage, result => {
     *     // ioGame: your biz code.
     *     // 我的用户信息。My UserMessage
     *     const value = result.getValue(UserMessageSchema);
     *     result.log(value);
     * });
     */
    static ofLoginVerify(verifyMessage: ioGame.LoginVerifyMessage, callback: (result: ResponseResult) => void): RequestCommand {
        const data = toBinary(ioGame.LoginVerifyMessageSchema, verifyMessage);
        const requestCommand = RequestCommand.of(this.loginVerify_2_2, data).onCallback(callback);
        requestCommand.dataSource = verifyMessage;
        return requestCommand.execute();
    }

    /**
     * 我的登录验证 action。My loginVerify action
     * @param verifyMessage 我的验证信息。verifyMessage
     * @returns {@link ResponseResult} 我的用户信息。My UserMessage (returnType: {@link UserMessage})
     * @example
     * // 我的验证信息。verifyMessage
     * const verifyMessage: LoginVerifyMessage = ...;
     * const result = await MyAction.ofAwaitLoginVerify(verifyMessage);
     * // ioGame: your biz code.
     * // 我的用户信息。My UserMessage
     * const value = result.getValue(UserMessageSchema);
     * result.log(value);
     */
    static async ofAwaitLoginVerify(verifyMessage: ioGame.LoginVerifyMessage): Promise<ResponseResult> {
        const data = toBinary(ioGame.LoginVerifyMessageSchema, verifyMessage);
        const requestCommand = RequestCommand.of(this.loginVerify_2_2, data);
        requestCommand.dataSource = verifyMessage;
        return await RequestCommand.ofAwaitRequestCommand(requestCommand);
    }
}