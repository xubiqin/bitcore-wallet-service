define({ "api": [
  {
    "type": "get",
    "url": "/v1/preferences/",
    "title": "GetPreferenceInfo",
    "name": "GetPreferenceInfo",
    "group": "Preference",
    "description": "<p>获取用户配置信息</p>",
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Preference",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>配置信息版本，目前固定为&quot;1.0.0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdOn",
            "description": "<p>配置信息的创建时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "copayerId",
            "description": "<p>钱包参与者ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>钱包参与者的电子邮件地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>钱包参与者的语言偏好</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>钱包余额显示单位</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/v1/preferences/",
    "title": "modifyPreferenceInfo",
    "name": "modifyPreferenceInfo",
    "group": "Preference",
    "description": "<p>修改用户配置信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>语言偏好</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>余额显示单位</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Preference",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v2/wallets/:id/copayers/",
    "title": "AddCopayer",
    "name": "AddCopayer",
    "group": "Wallet",
    "description": "<p>增加钱包参与者</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>要加入的钱包的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>钱包参与者名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>期望币种名称，默认为'btc'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "xPubKey",
            "description": "<p>钱包参与者的扩展公钥，由客户端生成</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestPubKey",
            "description": "<p>钱包参与者的请求公钥，由客户端生成</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "copayerSignature",
            "description": "<p>客户端使用请求公钥对应的私钥对此请求进行签名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customData",
            "description": "<p>钱包参与者私有信息，可不填</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dryRun",
            "description": "<p>服务端模拟运行，不实际修改数据库状态，默认为false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "supportBIP44AndP2PKH",
            "description": "<p>是否支持BIP44和P2PKH协议，默认为true</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "copayerId",
            "description": "<p>钱包参与者ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-name",
            "description": "<p>钱包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wallt-m",
            "description": "<p>多签钱包所需的最少有效签名数,如2</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wallt-n",
            "description": "<p>多签钱包总共有多少签名，如3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-pubKey",
            "description": "<p>客户端生成的公钥</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-coin",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-network",
            "description": "<p>币种网络名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "wallt-supportBIP44AndP2PKH",
            "description": "<p>是否支持BIP44和P2PKH协议</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-id",
            "description": "<p>钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "wallt-singleAddress",
            "description": "<p>钱包是否只生成唯一地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/v1/copayers/:id/",
    "title": "AddCopayerAccess",
    "name": "AddCopayerAccess",
    "group": "Wallet",
    "description": "<p>增加钱包参与者的权限</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>钱包参与者ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestPubKey",
            "description": "<p>客户端生成的请求公钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>客户端使用请求公钥对应的私钥对此请求进行签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "copayerId",
            "description": "<p>钱包参与者ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-name",
            "description": "<p>钱包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wallt-m",
            "description": "<p>多签钱包所需的最少有效签名数,如2</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wallt-n",
            "description": "<p>多签钱包总共有多少签名，如3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-pubKey",
            "description": "<p>客户端生成的公钥</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-coin",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-network",
            "description": "<p>币种网络名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "wallt-supportBIP44AndP2PKH",
            "description": "<p>是否支持BIP44和P2PKH协议</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-id",
            "description": "<p>钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "wallt-singleAddress",
            "description": "<p>钱包是否只生成唯一地址</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v1/broadcast_raw/",
    "title": "BroadcastRaw",
    "name": "BroadcastRaw",
    "group": "Wallet",
    "description": "<p>将原始的交易数据广播出去</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>币种网络名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rawTx",
            "description": "<p>交易原始数据的16进制编码序列</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "txid",
            "description": "<p>新生成的交易的ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/addresses/",
    "title": "CreateNewAddress",
    "name": "CreateNewAddress",
    "group": "Wallet",
    "description": "<p>创建新的钱包地址</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>地址信息版本，目前为'1.0.0'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdOn",
            "description": "<p>创建地址的时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>地址所属的钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isChange",
            "description": "<p>是否是找零地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>地址对应的路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publicKeys",
            "description": "<p>地址对应的公钥</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>币种名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>币种网络名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>计算地址的方法</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v2/wallets/",
    "title": "CreateWallet",
    "name": "CreateWallet",
    "group": "Wallet",
    "description": "<p>创建一个新钱包</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>钱包名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "m",
            "description": "<p>多签钱包所需的最少有效签名数,如2</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "n",
            "description": "<p>多签钱包总共有多少签名，如3</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pubKey",
            "description": "<p>客户端生成的公钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>币种名称，默认为'btc'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>币种网络名称，默认为'livenet'</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "supportBIP44AndP2PKH",
            "description": "<p>是否支持BIP44和P2PKH协议，默认为true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>钱包ID，可以不填，由后端生成</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "singleAddress",
            "description": "<p>钱包是否只生成唯一地址，默认为false</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>新创建的钱包的ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/addresses/",
    "title": "GetAllAddresses",
    "name": "GetAllAddresses",
    "group": "Wallet",
    "description": "<p>获取所有的地址列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>总共获取多少条地址，默认为全部地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "reverse",
            "description": "<p>是否按时间倒序显示。默认按时间顺序显示。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>地址信息版本，目前为'1.0.0'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdOn",
            "description": "<p>创建地址的时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>地址所属的钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isChange",
            "description": "<p>是否是找零地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>地址对应的路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publicKeys",
            "description": "<p>地址对应的公钥</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>币种名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>币种网络名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>计算地址的方法</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/balance/",
    "title": "GetBalance",
    "name": "GetBalance",
    "group": "Wallet",
    "description": "<p>获取当前所有地址的余额</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "twoStep",
            "description": "<p>是否分步返回，优化服务端查询效率。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalAmount",
            "description": "<p>钱包总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lockedAmount",
            "description": "<p>钱包锁定的余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalConfirmedAmount",
            "description": "<p>已确认的金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lockedConfirmedAmount",
            "description": "<p>锁定并确认的金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "availableAmount",
            "description": "<p>可用金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "availableConfirmedAmount",
            "description": "<p>可用并确认的金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "byAddress-address",
            "description": "<p>钱包的一个地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "byAddress-path",
            "description": "<p>钱包的一个地址对应的扩展路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "byAddress-amount",
            "description": "<p>钱包的一个地址中的余额</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/eth/address_nonce/:address",
    "title": "GetEthAddressNonce",
    "name": "GetEthAddressNonce",
    "group": "Wallet",
    "description": "<p>获取ETH地址的nonce值</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>ETH地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nonce",
            "description": "<p>此地址的nonce值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v2/feelevels/",
    "title": "GetFeeLevel",
    "name": "GetFeeLevel",
    "group": "Wallet",
    "description": "<p>获取当前交易费率</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coin",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>币种网络名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>费率级别名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nbBlocks",
            "description": "<p>预计交易确认前需要等待的块数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "feePerKb",
            "description": "<p>每千字节需要的交易费用</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/tri/address_nonce/:address",
    "title": "GetTriAddressNonce",
    "name": "GetTriAddressNonce",
    "group": "Wallet",
    "description": "<p>获取TRI地址的nonce值</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>TRI地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nonce",
            "description": "<p>此地址的nonce值</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/txproposals/",
    "title": "GetTxproposal",
    "name": "GetTxproposal",
    "group": "Wallet",
    "description": "<p>获取pending状态的交易信息</p>",
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>配置信息版本，目前固定为&quot;1.0.0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "createdOn",
            "description": "<p>配置信息的创建时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "walletId",
            "description": "<p>钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "copayerId",
            "description": "<p>钱包参与者ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>钱包参与者的电子邮件地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>钱包参与者的语言偏好</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>钱包余额显示单位</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/utxos/",
    "title": "GetUTXO",
    "name": "GetUTXO",
    "group": "Wallet",
    "description": "<p>获取当前可用的未花费的输出</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "txid",
            "description": "<p>交易ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "vout",
            "description": "<p>交易输出的索引</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>交易输出的地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "scriptPubKey",
            "description": "<p>交易输出的解锁脚本</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "satoshis",
            "description": "<p>交易输出的金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "confirmations",
            "description": "<p>交易的确认数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "locked",
            "description": "<p>交易输出是否锁定</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>交易输出的地址对应的路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publicKeys",
            "description": "<p>交易输出的地址对应的公钥</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v2/wallets/",
    "title": "GetWalletInfo",
    "name": "GetWalletInfo",
    "group": "Wallet",
    "description": "<p>获取钱包信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "includeExtendedInfo",
            "description": "<p>是否返回钱包的扩展信息，默认为false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "twoStep",
            "description": "<p>是否分步获取钱包信息，提高服务端处理效率，默认为false</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "input/example.js",
    "groupTitle": "Wallet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-identity",
            "description": "<p>客户端唯一标识，由客户端本地生成</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-signature",
            "description": "<p>对此http请求的签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-name",
            "description": "<p>钱包名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wallt-m",
            "description": "<p>多签钱包所需的最少有效签名数,如2</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "wallt-n",
            "description": "<p>多签钱包总共有多少签名，如3</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-pubKey",
            "description": "<p>客户端生成的公钥</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-coin",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-network",
            "description": "<p>币种网络名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "wallt-supportBIP44AndP2PKH",
            "description": "<p>是否支持BIP44和P2PKH协议</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wallt-id",
            "description": "<p>钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "wallt-singleAddress",
            "description": "<p>钱包是否只生成唯一地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferences-version",
            "description": "<p>配置信息版本，目前固定为&quot;1.0.0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "preferences-createdOn",
            "description": "<p>配置信息的创建时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferences-walletId",
            "description": "<p>钱包ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferences-copayerId",
            "description": "<p>钱包参与者ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferences-email",
            "description": "<p>钱包参与者的电子邮件地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferences-language",
            "description": "<p>钱包参与者的语言偏好</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preferences-unit",
            "description": "<p>钱包余额显示单位</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-totalAmount",
            "description": "<p>钱包总余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-lockedAmount",
            "description": "<p>钱包锁定的余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-totalConfirmedAmount",
            "description": "<p>已确认的金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-lockedConfirmedAmount",
            "description": "<p>锁定并确认的金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-availableAmount",
            "description": "<p>可用金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-availableConfirmedAmount",
            "description": "<p>可用并确认的金额总数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "balance-byAddress-address",
            "description": "<p>钱包的一个地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "balance-byAddress-path",
            "description": "<p>钱包的一个地址对应的扩展路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "balance-byAddress-amount",
            "description": "<p>钱包的一个地址中的余额</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>具体错误原因描述</p>"
          }
        ]
      }
    }
  }
] });
