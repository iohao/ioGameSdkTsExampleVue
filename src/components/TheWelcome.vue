<script setup>
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
import Community from './icons/IconCommunity.vue'
import Documentation from './icons/IconDocumentation.vue'

import {MyNetConfig} from "../assets/config/MyNetConfig";
import {
  onBoolValue,
  onIntValue, onListBool,
  onListInt,
  onListLong, onListString, onListValue,
  onLongValue,
  onStringValue, onTestError, onTriggerBroadcast,
  onValueObject
} from "../assets/index";

MyNetConfig.startNet();

</script>
<template>
  <h2>ioGameTsSDK + protobuf + websocket</h2><br>
  CN: ioGame 在 Vue 中的使用示例。

  测试由 <a href="https://github.com/iohao/ioGame" target="_blank" rel="noopener">ioGame</a> Sdk 生成的相关代码，包括
  action、广播、错误码。

  请打开控制台观察数据，每次点击按钮控制台会发生变化。

  <br><br>

  EN: Examples of Using ioGame in Vue.

  Test the relevant code generated by the <a href="https://github.com/iohao/ioGame" target="_blank" rel="noopener">ioGame</a>
  Sdk, including actions, broadcasts, and error codes.

  Please open the console to observe the data. Each time the button is clicked, changes will occur in the console.
  <WelcomeItem>
    <template #icon>
      <Documentation/>
    </template>
    <template #heading>Triggering broadcasts and errors</template>
    <button @click="onTriggerBroadcast()">onTriggerBroadcast</button>
    <button @click="onTestError()">onTestError</button>
    <br>
    测试错误码和广播的接收
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Community/>
    </template>
    <template #heading>Testing of a single object</template>
    <button @click="onIntValue()">onIntValue</button>
    <button @click="onLongValue()">onLongValue</button>
    <button @click="onBoolValue()">onBoolValue</button>
    <button @click="onStringValue()">onStringValue</button>
    <button @click="onValueObject()">onValueObject</button>
    <br>
    单个对象的测试
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon/>
    </template>
    <template #heading>Testing of the object list</template>
    <button @click="onListInt()">onListInt</button>
    <button @click="onListLong()">onListLong</button>
    <button @click="onListBool()">onListBool</button>
    <button @click="onListString()">onListString</button>
    <button @click="onListValue()">onListValue</button>
    <br>
    List 对象的测试
  </WelcomeItem>
</template>
<style scoped>
button {
  margin: 5px;
}
</style>