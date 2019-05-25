define({ "api": [
  {
    "type": "response",
    "url": "/",
    "title": "tetramino information",
    "name": "ExampleResponse",
    "group": "API",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/ 200 OK\n{\n   \"type\": \"null\",\n   \"tetramino\":[],\n   \"board-info\": {\n     \"width\": 10,\n     \"hight\": 20\n   },\n   \"move\": {\n     \"down\": false,\n     \"right\": false,\n     \"left\": false\n   },\n   \"turn\": {\n     \"left\": false,\n     \"right\": false\n   },\n   \"tetramino-state\": [],\n   \"position-in-board\": {\n     \"values-to-zero\": {\n       \"position-one\": null,\n       \"position-two\": null,\n       \"position-three\": null,\n       \"position-four\": null\n     },\n     \"values-to-one\": {\n       \"position-one\": null,\n       \"position-two\": null,\n       \"position-three\": null,\n       \"position-four\": null\n     }\n   },\n   \"tetramino-periphery-positions\":{\n     \"down\":{\n       \"position-one\": null,\n       \"position-two\": null,\n       \"position-three\": null,\n       \"position-four\": null\n     },\n     \"left\":{\n       \"position-one\": null,\n       \"position-two\": null,\n       \"position-three\": null,\n       \"position-four\": null\n     },\n     \"right\":{\n       \"position-one\": null,\n       \"position-two\": null,\n       \"position-three\": null,\n       \"position-four\": null\n     },\n     \"turn\":{\n\n     }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "App/index.js",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "/decline/:seconds/:values_down",
    "title": "Request decline tetramino",
    "version": "1.0.0",
    "name": "GetDecline",
    "group": "Decline",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "seconds",
            "description": "<p>The seconds wait in decline tetramine</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "values_down",
            "description": "<p>The values below the tetramine 1=full 0=empty.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://host/decline/5/1,1",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tetramino",
            "description": "<p>information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/decline 200 OK\n{\n   infoTetramino: ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uninitializedTetramino",
            "description": "<p>The tetramino has not been initialized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/ 500 Error\n{\n   error: 'uninitialized tetramine'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/index.js",
    "groupTitle": "Decline"
  },
  {
    "type": "get",
    "url": "/displace/:direction/:values",
    "title": "Request displace tetramino",
    "version": "1.0.0",
    "name": "GetDisplace",
    "group": "Displace",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>The direction left or right.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "values",
            "description": "<p>The values to the left or right of the tetramine 1=full 0=empty.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://host/displace/left/0,1,0",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tetramino",
            "description": "<p>information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/displace/ 200 OK\n{\n   infoTetramino: ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uninitializedTetramino",
            "description": "<p>The tetramino has not been initialized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/500 Error\n{\n   error: 'uninitialized tetramine'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/index.js",
    "groupTitle": "Displace"
  },
  {
    "type": "get",
    "url": "/newTetramino",
    "title": "Request new tetramino",
    "version": "1.0.0",
    "name": "GetNewTetramino",
    "group": "New",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://host/newTetramino",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tetramino",
            "description": "<p>information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/newTetramino 200 OK\n{\n   infoTetramino: ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uninitializedTetramino",
            "description": "<p>The tetramino has not been initialized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/ 500 Error\n{\n   error: 'uninitialized tetramine'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/index.js",
    "groupTitle": "New"
  },
  {
    "type": "get",
    "url": "/turn/:direction/:values",
    "title": "Request turn tetramino",
    "version": "1.0.0",
    "name": "GetTurnMain",
    "group": "Turn",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>The direction left or right | (or null if Square Tetramino).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "values",
            "description": "<p>The values in the position of turn 1=full 0=empty | (or null if Square Tetramino).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://host/turn/right/0,0,0",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tetramino",
            "description": "<p>information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/turn 200 OK\n{\n   \"infoTetramino\": \"...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uninitializedTetramino",
            "description": "<p>The tetramino has not been initialized.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/turn 500 Error\n{\n   \"error\": \"uninitialized tetramine\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/index.js",
    "groupTitle": "Turn"
  },
  {
    "type": "get",
    "url": "/turn/",
    "title": "Request turn tetramino",
    "version": "1.0.0",
    "name": "GetTurnSquare",
    "group": "Turn",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://host/turn/",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tetramino",
            "description": "<p>information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/turn/ 200 OK\n{\n   infoTetramino: ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uninitializedTetramino",
            "description": "<p>The tetramino has not been initialized or use with tetramino l.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/ 500 Error\n{\n   error: 'uninitialized tetramine'\n}\nHTTP/ 500 Error\n{\n   error: 'No available for tetramino l'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/index.js",
    "groupTitle": "Turn"
  }
] });
