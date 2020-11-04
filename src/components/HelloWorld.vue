<template>
  <div class="qrcode-container q-ma-md">
    <!-- 报错信息 -->
    <p>
      <b class="error">{{ error }}</b>
    </p>
    <!-- 摄像头扫描 -->
    <qrcode-stream
      v-if="error === null"
      class="qrcode-stream"
      :camera="camera"
      @init="onInit"
      @decode="processResult"
    >
      <div class="line"></div>
      <div class="angle"></div>
    </qrcode-stream>
    <!-- 拖拽图片 -->
    <qrcode-drop-zone
      @detect="onInit"
      @dragover="onDragOver"
      @init="logErrors"
    >
      <div
        class="drop-area"
        :class="{ 'dragover': dragover }"
      >
        <div class="q-pt-md">
          请将二维码图片拖入此区域，或者选择图片
        </div>
        <div class="q-pt-sm">
          <qrcode-capture @detect="onInit" />
        </div>
      </div>
    </qrcode-drop-zone>
    <!-- 扫描结果 -->
    <p class="decode-result">
      扫描结果：
    </p>
    <p v-if="isOutsideUrl">
      <a
        :href="result"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{result}}
      </a>
    </p>
    <p v-else>
      <b>
        {{ result }}
      </b>
    </p>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: 'HelloWorld',
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },

  data () {
    return {
      result: '',
      error: null,
      // 摄像头
      camera: 'rear',
      // 拖拽
      dragover: false,
      isOutsideUrl: false
    }
  },

  methods: {
    async onInit (promise) {
      try {
        const { content } = await promise
        if (content === null) {
          this.error = 'ERROR: 未检测到二维码'
          return
        }
        this.processResult(content)
        this.error = null
      } catch (error) {
        // 处理 error
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: 需要授予相机访问权限'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: 未检测到摄像头'
        } else if (error.name === 'NotSupportedError' || error.name === 'InsecureContextError') {
          this.error = 'ERROR: 调用摄像头需要安全的上下文环境(HTTPS，localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: 相机被占用'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: 设备无法使用'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: 当前浏览器不支持此功能'
        } else if (error.name === 'DropImageFetchError') {
          this.error = 'ERROR: 无法解析跨域图片'
        } else if (error.name === 'DropImageDecodeError') {
          this.error = 'ERROR: 仅支持图片格式文件'
        } else {
          this.error = error
        }
      }
    },
    logErrors (promise) {
      promise.catch(console.error)
    },
    onDragOver (isDraggingOver) {
      this.dragover = isDraggingOver
    },
    processResult (result) {
      this.isOutsideUrl = false
      // eslint-disable-next-line no-useless-escape
      const urlregex = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
      // 是否为网址
      if (urlregex.test(result)) {
        this.isOutsideUrl = true
      }
      // TODO 临时展示
      this.result = result
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}

.qrcode-container .qrcode-stream {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  border: 0.1rem solid rgba(0, 255, 51, 0.2);
}

.qrcode-container .line {
  height: calc(100% - 2px);
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%);
  border-bottom: 3px solid #00ff33;
  transform: translateY(-100%);
  animation: radar-beam 2s infinite;
  animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
  animation-delay: 1.4s;
}

@keyframes scanLine {
  from {
    top: 2px;
  }
  to {
    top: 144px;
  }
}

.qrcode-container .qrcode-stream:after,
.qrcode-container .qrcode-stream:before,
.qrcode-container .angle:after,
.qrcode-container .angle:before {
  content: "";
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;

  border: 3px solid transparent;
}

.qrcode-container .qrcode-stream:after,
.qrcode-container .qrcode-stream:before {
  top: 0;
  border-top-color: #00ff33;
}

.qrcode-container .angle:after,
.qrcode-container .angle:before {
  bottom: 0;
  border-bottom-color: #00ff33;
}

.qrcode-container .qrcode-stream:before,
.qrcode-container .angle:before {
  left: 0;
  border-left-color: #00ff33;
}

.qrcode-container .qrcode-stream:after,
.qrcode-container .angle:after {
  right: 0;
  border-right-color: #00ff33;
}

@keyframes radar-beam {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
/* 拖拽 */
.drop-area {
  height: 300px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.5);
}

.dragover {
  background-color: rgba(0, 0, 0, 0.8);
}

.drop-error {
  color: red;
  font-weight: bold;
}
</style>
