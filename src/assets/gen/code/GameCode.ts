// generateTime 2024-11-14 20:17:00
// https://github.com/iohao/ioGame

import {CmdKit} from "iohao-sdk";

/**
 * GameCode、ErrorCode. 游戏错误码
 * @author https://github.com/iohao/ioGame
 */
export class GameCode {
    /** 绑定的游戏逻辑服不存在 */
    static FindBindingLogicServerNotExist: number = CmdKit.mappingErrorCode(-1008, "绑定的游戏逻辑服不存在");
    /** 强制玩家下线 */
    static ForcedOffline: number = CmdKit.mappingErrorCode(-1007, "强制玩家下线");
    /** 数据不存在 */
    static DataNotExist: number = CmdKit.mappingErrorCode(-1006, "数据不存在");
    /** class 不存在 */
    static ClassNotExist: number = CmdKit.mappingErrorCode(-1005, "class 不存在");
    /** 请先登录 */
    static VerifyIdentity: number = CmdKit.mappingErrorCode(-1004, "请先登录");
    /** 心跳超时相关 */
    static IdleErrorCode: number = CmdKit.mappingErrorCode(-1003, "心跳超时相关");
    /** 路由错误 */
    static CmdInfoErrorCode: number = CmdKit.mappingErrorCode(-1002, "路由错误");
    /** 参数验错误 */
    static ValidateErrCode: number = CmdKit.mappingErrorCode(-1001, "参数验错误");
    /** 系统其它错误 */
    static SystemOtherErrCode: number = CmdKit.mappingErrorCode(-1000, "系统其它错误");
    /** login error */
    static LoginError: number = CmdKit.mappingErrorCode(1, "login error");
    /** test error */
    static TestError: number = CmdKit.mappingErrorCode(2, "test error");

    static init() {
        // trigger errorCodeMapping init.
        // 调用一次方法，触发错误码的初始化操作。
    }
}