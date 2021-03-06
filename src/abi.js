export default {
  "contractName": "DemoToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6107f48061001e6000396000f30060606040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100a457806318160ddd146100da57806323b872dd146100ff578063661884631461012757806370a0823114610149578063a9059cbb14610168578063d73dd6231461018a578063dd62ed3e146101ac575b61009733346101d1565b15156100a257600080fd5b005b34156100af57600080fd5b6100c6600160a060020a03600435166024356102b8565b604051901515815260200160405180910390f35b34156100e557600080fd5b6100ed610324565b60405190815260200160405180910390f35b341561010a57600080fd5b6100c6600160a060020a036004358116906024351660443561032a565b341561013257600080fd5b6100c6600160a060020a03600435166024356104aa565b341561015457600080fd5b6100ed600160a060020a03600435166105a4565b341561017357600080fd5b6100c6600160a060020a03600435166024356105bf565b341561019557600080fd5b6100c6600160a060020a03600435166024356106d1565b34156101b757600080fd5b6100ed600160a060020a0360043581169060243516610775565b60008082116101df57600080fd5b6001546101f2908363ffffffff6107a016565b600155600160a060020a03831660009081526020819052604090205461021e908363ffffffff6107a016565b600160a060020a0384166000818152602081905260409081902092909255907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968859084905190815260200160405180910390a2600160a060020a03831660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60015490565b6000600160a060020a038316151561034157600080fd5b600160a060020a03841660009081526020819052604090205482111561036657600080fd5b600160a060020a038085166000908152600260209081526040808320339094168352929052205482111561039957600080fd5b600160a060020a0384166000908152602081905260409020546103c2908363ffffffff6107b616565b600160a060020a0380861660009081526020819052604080822093909355908516815220546103f7908363ffffffff6107a016565b600160a060020a038085166000908152602081815260408083209490945587831682526002815283822033909316825291909152205461043d908363ffffffff6107b616565b600160a060020a03808616600081815260026020908152604080832033861684529091529081902093909355908516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120548083111561050757600160a060020a03338116600090815260026020908152604080832093881683529290529081205561053e565b610517818463ffffffff6107b616565b600160a060020a033381166000908152600260209081526040808320938916835292905220555b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a03831615156105d657600080fd5b600160a060020a0333166000908152602081905260409020548211156105fb57600080fd5b600160a060020a033316600090815260208190526040902054610624908363ffffffff6107b616565b600160a060020a033381166000908152602081905260408082209390935590851681522054610659908363ffffffff6107a016565b60008085600160a060020a0316600160a060020a031681526020019081526020016000208190555082600160a060020a031633600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a350600192915050565b600160a060020a033381166000908152600260209081526040808320938616835292905290812054610709908363ffffffff6107a016565b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020849055919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591905190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b6000828201838110156107af57fe5b9392505050565b6000828211156107c257fe5b509003905600a165627a7a723058207954ccbfffb55eabfe4edf8d632054389425a1e2808de869ae4afff0731d9d110029",
  "deployedBytecode": "0x60606040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100a457806318160ddd146100da57806323b872dd146100ff578063661884631461012757806370a0823114610149578063a9059cbb14610168578063d73dd6231461018a578063dd62ed3e146101ac575b61009733346101d1565b15156100a257600080fd5b005b34156100af57600080fd5b6100c6600160a060020a03600435166024356102b8565b604051901515815260200160405180910390f35b34156100e557600080fd5b6100ed610324565b60405190815260200160405180910390f35b341561010a57600080fd5b6100c6600160a060020a036004358116906024351660443561032a565b341561013257600080fd5b6100c6600160a060020a03600435166024356104aa565b341561015457600080fd5b6100ed600160a060020a03600435166105a4565b341561017357600080fd5b6100c6600160a060020a03600435166024356105bf565b341561019557600080fd5b6100c6600160a060020a03600435166024356106d1565b34156101b757600080fd5b6100ed600160a060020a0360043581169060243516610775565b60008082116101df57600080fd5b6001546101f2908363ffffffff6107a016565b600155600160a060020a03831660009081526020819052604090205461021e908363ffffffff6107a016565b600160a060020a0384166000818152602081905260409081902092909255907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968859084905190815260200160405180910390a2600160a060020a03831660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60015490565b6000600160a060020a038316151561034157600080fd5b600160a060020a03841660009081526020819052604090205482111561036657600080fd5b600160a060020a038085166000908152600260209081526040808320339094168352929052205482111561039957600080fd5b600160a060020a0384166000908152602081905260409020546103c2908363ffffffff6107b616565b600160a060020a0380861660009081526020819052604080822093909355908516815220546103f7908363ffffffff6107a016565b600160a060020a038085166000908152602081815260408083209490945587831682526002815283822033909316825291909152205461043d908363ffffffff6107b616565b600160a060020a03808616600081815260026020908152604080832033861684529091529081902093909355908516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120548083111561050757600160a060020a03338116600090815260026020908152604080832093881683529290529081205561053e565b610517818463ffffffff6107b616565b600160a060020a033381166000908152600260209081526040808320938916835292905220555b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a03831615156105d657600080fd5b600160a060020a0333166000908152602081905260409020548211156105fb57600080fd5b600160a060020a033316600090815260208190526040902054610624908363ffffffff6107b616565b600160a060020a033381166000908152602081905260408082209390935590851681522054610659908363ffffffff6107a016565b60008085600160a060020a0316600160a060020a031681526020019081526020016000208190555082600160a060020a031633600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a350600192915050565b600160a060020a033381166000908152600260209081526040808320938616835292905290812054610709908363ffffffff6107a016565b600160a060020a0333811660008181526002602090815260408083209489168084529490915290819020849055919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591905190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b6000828201838110156107af57fe5b9392505050565b6000828211156107c257fe5b509003905600a165627a7a723058207954ccbfffb55eabfe4edf8d632054389425a1e2808de869ae4afff0731d9d110029",
  "sourceMap": "95:484:1:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "95:484:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;542:27;547:10;559:9;542:4;:27::i;:::-;534:36;;;;;;;;95:484;1798:183:24;;;;;;;;;;-1:-1:-1;;;;;1798:183:24;;;;;;;;;;;;;;;;;;;;;;;;371:83:19;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:24;;;;;;;;;;-1:-1:-1;;;;;736:439:24;;;;;;;;;;;;3602:398;;;;;;;;;;-1:-1:-1;;;;;3602:398:24;;;;;;;1189:107:19;;;;;;;;;;-1:-1:-1;;;;;1189:107:19;;;;;608:379;;;;;;;;;;-1:-1:-1;;;;;608:379:19;;;;;;;2883:257:24;;;;;;;;;;-1:-1:-1;;;;;2883:257:24;;;;;;;2300:126;;;;;;;;;;-1:-1:-1;;;;;2300:126:24;;;;;;;;;;194:293:1;254:4;278:10;;;270:19;;;;;;314:12;;:24;;331:6;314:24;:16;:24;:::i;:::-;299:12;:39;-1:-1:-1;;;;;364:13:1;;:8;:13;;;;;;;;;;;:25;;382:6;364:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;348:13:1;;:8;:13;;;;;;;;;;;;:41;;;;:13;399:17;;409:6;;399:17;;;;;;;;;;;;;-1:-1:-1;;;;;426:33:1;;443:1;426:33;452:6;426:33;;;;;;;;;;;;;;-1:-1:-1;476:4:1;194:293;;;;:::o;1798:183:24:-;-1:-1:-1;;;;;1885:10:24;1877:19;;1865:4;1877:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;:38;;;1865:4;;1877:29;:19;1921:38;;1909:6;;1921:38;;;;;;;;;;;;;-1:-1:-1;1972:4:24;1798:183;;;;:::o;371:83:19:-;437:12;;371:83;:::o;736:439:24:-;818:4;-1:-1:-1;;;;;838:17:24;;;;830:26;;;;;;-1:-1:-1;;;;;880:15:24;;:8;:15;;;;;;;;;;;870:25;;;862:34;;;;;;-1:-1:-1;;;;;920:14:24;;;;;;;:7;:14;;;;;;;;935:10;920:26;;;;;;;;;;910:36;;;902:45;;;;;;-1:-1:-1;;;;;972:15:24;;:8;:15;;;;;;;;;;;:27;;992:6;972:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;954:15:24;;;:8;:15;;;;;;;;;;;:45;;;;1021:13;;;;;;;:25;;1039:6;1021:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1005:13:24;;;:8;:13;;;;;;;;;;;:41;;;;1081:14;;;;;:7;:14;;;;;1096:10;1081:26;;;;;;;;;;;:38;;1112:6;1081:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;1052:14:24;;;;;;;:7;:14;;;;;;;;1067:10;1052:26;;;;;;;;;;;:67;;;;1125:28;;;;;;1146:6;;1125:28;;;;;;;;;;;;;-1:-1:-1;1166:4:24;736:439;;;;;:::o;3602:398::-;-1:-1:-1;;;;;3721:10:24;3713:19;;3685:4;3713:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;3752:27;;;3748:164;;;-1:-1:-1;;;;;3797:10:24;3789:19;;3821:1;3789:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;:33;3748:164;;;3875:30;:8;3888:16;3875:30;:12;:30;:::i;:::-;-1:-1:-1;;;;;3851:10:24;3843:19;;;;;;:7;:19;;;;;;;;:29;;;;;;;;;:62;3748:164;-1:-1:-1;;;;;3926:10:24;3917:61;;3948:19;;;;:7;:19;;;;;;;;3917:61;;;3948:29;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;-1:-1:-1;3991:4:24;;3602:398;-1:-1:-1;;;3602:398:24:o;1189:107:19:-;-1:-1:-1;;;;;1275:16:19;1245:15;1275:16;;;;;;;;;;;;1189:107::o;608:379::-;671:4;-1:-1:-1;;;;;691:17:19;;;;683:26;;;;;;-1:-1:-1;;;;;742:10:19;733:20;:8;:20;;;;;;;;;;;723:30;;;715:39;;;;;;-1:-1:-1;;;;;856:10:19;847:20;:8;:20;;;;;;;;;;;:32;;872:6;847:32;:24;:32;:::i;:::-;-1:-1:-1;;;;;833:10:19;824:20;;:8;:20;;;;;;;;;;;:55;;;;901:13;;;;;;;:25;;919:6;901:25;:17;:25;:::i;:::-;885:8;:13;894:3;-1:-1:-1;;;;;885:13:19;-1:-1:-1;;;;;885:13:19;;;;;;;;;;;;:41;;;;953:3;-1:-1:-1;;;;;932:33:19;941:10;-1:-1:-1;;;;;932:33:19;;958:6;932:33;;;;;;;;;;;;;;-1:-1:-1;978:4:19;608:379;;;;:::o;2883:257:24:-;-1:-1:-1;;;;;3013:10:24;3005:19;;2961:4;3005:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;:46;;3039:11;3005:46;:33;:46;:::i;:::-;-1:-1:-1;;;;;2981:10:24;2973:19;;;;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;;:78;;;:29;;:19;;3057:61;;2973:78;3057:61;;;;;;;;;;;;;-1:-1:-1;3131:4:24;2883:257;;;;:::o;2300:126::-;-1:-1:-1;;;;;2396:15:24;;;2374:7;2396:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;2300:126::o;1008:129:17:-;1066:7;1093:5;;;1111:6;;;;1104:14;;;;1131:1;1008:129;-1:-1:-1;;;1008:129:17:o;836:110::-;894:7;916:6;;;;909:14;;;;-1:-1:-1;936:5:17;;;836:110::o",
  "source": "pragma solidity ^0.4.19;\n\nimport \"zeppelin-solidity/contracts/token/ERC20/StandardToken.sol\";\n\ncontract DemoToken is StandardToken {\n    event Mint(address indexed to, uint256 amount);\n    \n    function mint(address _to, uint256 _value) private returns (bool) {\n        require(_value > 0);\n        totalSupply_ = totalSupply_.add(_value);\n        balances[_to] = balances[_to].add(_value);\n        Mint(_to, _value);\n        Transfer(address(0), _to, _value);\n        return true;\n    }\n    \n    function () public payable {\n        require(mint(msg.sender, msg.value));\n    }\n}",
  "sourcePath": "/home/anibal/Documentos/ConsenSys/TokenFoundryProject/token-contracts/contracts/example/DemoToken.sol",
  "ast": {
    "absolutePath": "/home/anibal/Documentos/ConsenSys/TokenFoundryProject/token-contracts/contracts/example/DemoToken.sol",
    "exportedSymbols": {
      "DemoToken": [
        131
      ]
    },
    "id": 132,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 59,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".19"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 132,
        "sourceUnit": 1519,
        "src": "26:67:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 61,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1518,
              "src": "117:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$1518",
                "typeString": "contract StandardToken"
              }
            },
            "id": 62,
            "nodeType": "InheritanceSpecifier",
            "src": "117:13:1"
          }
        ],
        "contractDependencies": [
          1068,
          1145,
          1177,
          1518
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 131,
        "linearizedBaseContracts": [
          131,
          1518,
          1068,
          1145,
          1177
        ],
        "name": "DemoToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 68,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 68,
                  "src": "148:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "148:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 68,
                  "src": "168:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "168:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "147:36:1"
            },
            "src": "137:47:1"
          },
          {
            "body": {
              "id": 116,
              "nodeType": "Block",
              "src": "260:227:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "278:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "287:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "278:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 77,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1533,
                      "src": "270:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 81,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "270:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 82,
                  "nodeType": "ExpressionStatement",
                  "src": "270:19:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 83,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 987,
                      "src": "299:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "331:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 84,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 987,
                          "src": "314:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 915,
                        "src": "314:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 87,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "314:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "299:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "299:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 985,
                        "src": "348:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 92,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "357:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "348:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 97,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "382:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 985,
                            "src": "364:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 95,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "373:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "364:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 915,
                        "src": "364:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 98,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "364:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "348:41:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "348:41:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 102,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "404:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 103,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "409:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 101,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68,
                      "src": "399:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "399:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 105,
                  "nodeType": "ExpressionStatement",
                  "src": "399:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "443:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "435:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "435:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 110,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "447:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 111,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "452:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 106,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1176,
                      "src": "426:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "426:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 113,
                  "nodeType": "ExpressionStatement",
                  "src": "426:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "476:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 76,
                  "id": 115,
                  "nodeType": "Return",
                  "src": "469:11:1"
                }
              ]
            },
            "id": 117,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 70,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "208:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 72,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "221:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:29:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 75,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "254:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:6:1"
            },
            "scope": 131,
            "src": "194:293:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 129,
              "nodeType": "Block",
              "src": "524:53:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 122,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1530,
                              "src": "547:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "547:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 124,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1530,
                              "src": "559:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "559:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 121,
                          "name": "mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117,
                          "src": "542:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) returns (bool)"
                          }
                        },
                        "id": 126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "542:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 120,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1533,
                      "src": "534:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "534:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 128,
                  "nodeType": "ExpressionStatement",
                  "src": "534:36:1"
                }
              ]
            },
            "id": 130,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "506:2:1"
            },
            "payable": true,
            "returnParameters": {
              "id": 119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "524:0:1"
            },
            "scope": 131,
            "src": "497:80:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 132,
        "src": "95:484:1"
      }
    ],
    "src": "0:579:1"
  },
  "legacyAST": {
    "absolutePath": "/home/anibal/Documentos/ConsenSys/TokenFoundryProject/token-contracts/contracts/example/DemoToken.sol",
    "exportedSymbols": {
      "DemoToken": [
        131
      ]
    },
    "id": 132,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 59,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".19"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 132,
        "sourceUnit": 1519,
        "src": "26:67:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 61,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1518,
              "src": "117:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$1518",
                "typeString": "contract StandardToken"
              }
            },
            "id": 62,
            "nodeType": "InheritanceSpecifier",
            "src": "117:13:1"
          }
        ],
        "contractDependencies": [
          1068,
          1145,
          1177,
          1518
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 131,
        "linearizedBaseContracts": [
          131,
          1518,
          1068,
          1145,
          1177
        ],
        "name": "DemoToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 68,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 68,
                  "src": "148:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "148:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 66,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 68,
                  "src": "168:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "168:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "147:36:1"
            },
            "src": "137:47:1"
          },
          {
            "body": {
              "id": 116,
              "nodeType": "Block",
              "src": "260:227:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 78,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "278:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "287:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "278:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 77,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1533,
                      "src": "270:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 81,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "270:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 82,
                  "nodeType": "ExpressionStatement",
                  "src": "270:19:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 83,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 987,
                      "src": "299:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 86,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "331:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 84,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 987,
                          "src": "314:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 85,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 915,
                        "src": "314:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 87,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "314:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "299:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 89,
                  "nodeType": "ExpressionStatement",
                  "src": "299:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 985,
                        "src": "348:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 92,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 91,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "357:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "348:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 97,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 72,
                          "src": "382:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 985,
                            "src": "364:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 95,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 70,
                            "src": "373:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "364:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 96,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 915,
                        "src": "364:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 98,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "364:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "348:41:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "348:41:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 102,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "404:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 103,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "409:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 101,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68,
                      "src": "399:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "399:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 105,
                  "nodeType": "ExpressionStatement",
                  "src": "399:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "443:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "435:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 109,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "435:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 110,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "447:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 111,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "452:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 106,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1176,
                      "src": "426:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "426:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 113,
                  "nodeType": "ExpressionStatement",
                  "src": "426:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "476:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 76,
                  "id": 115,
                  "nodeType": "Return",
                  "src": "469:11:1"
                }
              ]
            },
            "id": 117,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 70,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "208:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 72,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "221:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:29:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 75,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 117,
                  "src": "254:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:6:1"
            },
            "scope": 131,
            "src": "194:293:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 129,
              "nodeType": "Block",
              "src": "524:53:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 122,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1530,
                              "src": "547:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "547:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 124,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1530,
                              "src": "559:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 125,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "559:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 121,
                          "name": "mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 117,
                          "src": "542:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) returns (bool)"
                          }
                        },
                        "id": 126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "542:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 120,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1533,
                      "src": "534:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "534:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 128,
                  "nodeType": "ExpressionStatement",
                  "src": "534:36:1"
                }
              ]
            },
            "id": 130,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "506:2:1"
            },
            "payable": true,
            "returnParameters": {
              "id": 119,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "524:0:1"
            },
            "scope": 131,
            "src": "497:80:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 132,
        "src": "95:484:1"
      }
    ],
    "src": "0:579:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-03-27T16:00:41.979Z"
}