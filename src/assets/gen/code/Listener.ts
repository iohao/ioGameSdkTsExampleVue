// generateTime 2024-11-14 20:17:00
// https://github.com/iohao/ioGame
import * as ioGame from "../common_pb";
import {CmdKit, ListenCommand, ResponseResult} from "iohao-sdk";

/**
 * Broadcast Listener；广播监听；
 * @author https://github.com/iohao/ioGame
 */
export class Listener {
    private static readonly bulletBroadcast_1_1: number = CmdKit.mappingBroadcast(65537,'trigger bullet broadcast; cn:触发子弹广播');
    private static readonly intValue_1_32: number = CmdKit.mappingBroadcast(65568,'IntValue method description');
    private static readonly longValue_1_33: number = CmdKit.mappingBroadcast(65569,'LongValue');
    private static readonly boolValue_1_34: number = CmdKit.mappingBroadcast(65570,'BoolValue');
    private static readonly stringValue_1_35: number = CmdKit.mappingBroadcast(65571,'StringValue');
    private static readonly userMessage_1_36: number = CmdKit.mappingBroadcast(65572,'UserMessage');
    private static readonly intValueList_1_42: number = CmdKit.mappingBroadcast(65578,'IntValueList method description');
    private static readonly longValueList_1_43: number = CmdKit.mappingBroadcast(65579,'LongValueList');
    private static readonly boolValueList_1_44: number = CmdKit.mappingBroadcast(65580,'BoolValueList');
    private static readonly stringValueList_1_45: number = CmdKit.mappingBroadcast(65581,'StringValueList');
    private static readonly userMessageList_1_46: number = CmdKit.mappingBroadcast(65582,'UserMessageList');

    /**
     * trigger bullet broadcast; cn:触发子弹广播
     * @param callback Bullet, {@link BulletMessage}
     * @example
     * Listener.listenBulletBroadcast(result => {
     *     // Bullet
     *     const value = result.getValue(BulletMessageSchema);
     * });
     */
    static listenBulletBroadcast(callback: (result: ResponseResult) => void) {
        // Bullet
        ListenCommand.of(this.bulletBroadcast_1_1, callback);
    }

    /**
     * IntValue method description
     * @param callback biz data description, {@link number}
     * @example
     * Listener.listenIntValue(result => {
     *     // biz data description
     *     const value = result.getInt();
     * });
     */
    static listenIntValue(callback: (result: ResponseResult) => void) {
        // biz data description
        ListenCommand.of(this.intValue_1_32, callback);
    }

    /**
     * LongValue
     * @param callback LongValue, {@link bigint}
     * @example
     * Listener.listenLongValue(result => {
     *     // LongValue
     *     const value = result.getLong();
     * });
     */
    static listenLongValue(callback: (result: ResponseResult) => void) {
        // LongValue
        ListenCommand.of(this.longValue_1_33, callback);
    }

    /**
     * BoolValue
     * @param callback BoolValue, {@link boolean}
     * @example
     * Listener.listenBoolValue(result => {
     *     // BoolValue
     *     const value = result.getBool();
     * });
     */
    static listenBoolValue(callback: (result: ResponseResult) => void) {
        // BoolValue
        ListenCommand.of(this.boolValue_1_34, callback);
    }

    /**
     * StringValue
     * @param callback StringValue, {@link string}
     * @example
     * Listener.listenStringValue(result => {
     *     // StringValue
     *     const value = result.getString();
     * });
     */
    static listenStringValue(callback: (result: ResponseResult) => void) {
        // StringValue
        ListenCommand.of(this.stringValue_1_35, callback);
    }

    /**
     * UserMessage
     * @param callback User, {@link UserMessage}
     * @example
     * Listener.listenUserMessage(result => {
     *     // User
     *     const value = result.getValue(UserMessageSchema);
     * });
     */
    static listenUserMessage(callback: (result: ResponseResult) => void) {
        // User
        ListenCommand.of(this.userMessage_1_36, callback);
    }

    /**
     * IntValueList method description
     * @param callback biz id list, list of {@link number}
     * @example
     * Listener.listenIntValueList(result => {
     *     // biz id list
     *     const value = result.listInt();
     * });
     */
    static listenIntValueList(callback: (result: ResponseResult) => void) {
        // biz id list
        ListenCommand.of(this.intValueList_1_42, callback);
    }

    /**
     * LongValueList
     * @param callback LongValueList, list of {@link bigint}
     * @example
     * Listener.listenLongValueList(result => {
     *     // LongValueList
     *     const value = result.listLong();
     * });
     */
    static listenLongValueList(callback: (result: ResponseResult) => void) {
        // LongValueList
        ListenCommand.of(this.longValueList_1_43, callback);
    }

    /**
     * BoolValueList
     * @param callback BoolValueList, list of {@link boolean}
     * @example
     * Listener.listenBoolValueList(result => {
     *     // BoolValueList
     *     const value = result.listBool();
     * });
     */
    static listenBoolValueList(callback: (result: ResponseResult) => void) {
        // BoolValueList
        ListenCommand.of(this.boolValueList_1_44, callback);
    }

    /**
     * StringValueList
     * @param callback StringValueList, list of {@link string}
     * @example
     * Listener.listenStringValueList(result => {
     *     // StringValueList
     *     const value = result.listString();
     * });
     */
    static listenStringValueList(callback: (result: ResponseResult) => void) {
        // StringValueList
        ListenCommand.of(this.stringValueList_1_45, callback);
    }

    /**
     * UserMessageList
     * @param callback User, list of {@link UserMessage}
     * @example
     * Listener.listenUserMessageList(result => {
     *     // User
     *     const value = result.listValue(UserMessageSchema);
     * });
     */
    static listenUserMessageList(callback: (result: ResponseResult) => void) {
        // User
        ListenCommand.of(this.userMessageList_1_46, callback);
    }

    static listener_ioGame() {
    // all listener

        Listener.listenBulletBroadcast(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.getValue(ioGame.BulletMessageSchema);
            console.log(mergeTitle, title, value);
        });

        Listener.listenIntValue(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.getInt();
            console.log(mergeTitle, title, value);
        });

        Listener.listenLongValue(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.getLong();
            console.log(mergeTitle, title, value);
        });

        Listener.listenBoolValue(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.getBool();
            console.log(mergeTitle, title, value);
        });

        Listener.listenStringValue(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.getString();
            console.log(mergeTitle, title, value);
        });

        Listener.listenUserMessage(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.getValue(ioGame.UserMessageSchema);
            console.log(mergeTitle, title, value);
        });

        Listener.listenIntValueList(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.listInt();
            console.log(mergeTitle, title, value);
        });

        Listener.listenLongValueList(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.listLong();
            console.log(mergeTitle, title, value);
        });

        Listener.listenBoolValueList(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.listBool();
            console.log(mergeTitle, title, value);
        });

        Listener.listenStringValueList(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.listString();
            console.log(mergeTitle, title, value);
        });

        Listener.listenUserMessageList(result => {
            const mergeTitle = CmdKit.toString(result.getCmdMerge());
            const title = CmdKit.getBroadcastTitle(result.getCmdMerge());
            const value = result.listValue(ioGame.UserMessageSchema);
            console.log(mergeTitle, title, value);
        });
    }
}

