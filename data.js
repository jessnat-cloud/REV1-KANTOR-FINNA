var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0777321809810374,
          "pitch": 0.052359393022708645,
          "rotation": 1.5707963267948966,
          "target": "1-live-studio"
        },
        {
          "yaw": -0.3043935399583848,
          "pitch": 0.08293905422087988,
          "rotation": 4.71238898038469,
          "target": "4-office-1a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-live-studio",
      "name": "Live Studio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.139415693669239,
          "pitch": -0.014674755830059283,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-meeting-room-1",
      "name": "Meeting Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-meeting-room-1a"
        },
        {
          "yaw": 3.091300595753559,
          "pitch": 0.03975093069066382,
          "rotation": 0,
          "target": "7-office-3a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-meeting-room-1a",
      "name": "Meeting Room 1A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-meeting-room-1"
        },
        {
          "yaw": 3.121295742228792,
          "pitch": 0.0007122277369440155,
          "rotation": 0,
          "target": "7-office-3a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office-1a",
      "name": "Office 1A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.012995892599995784,
          "pitch": 0,
          "rotation": 0,
          "target": "5-office-2a"
        },
        {
          "yaw": -1.3804064981266322,
          "pitch": 0.08505520152791135,
          "rotation": 0,
          "target": "10-ruang-manager"
        },
        {
          "yaw": -3.0925292976084116,
          "pitch": -0.052760119352544876,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-office-2a",
      "name": "Office 2A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8912948952951538,
          "pitch": 0.13201111225916407,
          "rotation": 7.853981633974483,
          "target": "4-office-1a"
        },
        {
          "yaw": -0.7714769327827469,
          "pitch": 0.08188757795522683,
          "rotation": 4.71238898038469,
          "target": "7-office-3a"
        },
        {
          "yaw": -0.03773193275487685,
          "pitch": 0.062052139587361665,
          "rotation": 0,
          "target": "6-office-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-office-2b",
      "name": "Office 2B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.00185525728337943,
          "pitch": 0,
          "rotation": 0,
          "target": "5-office-2a"
        },
        {
          "yaw": 0.880224821566868,
          "pitch": 0.11826006024593383,
          "rotation": 7.853981633974483,
          "target": "4-office-1a"
        },
        {
          "yaw": -0.751746704773641,
          "pitch": 0.13223796852508407,
          "rotation": 4.71238898038469,
          "target": "7-office-3a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-office-3a",
      "name": "Office 3A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0.07093925166059734,
          "rotation": 0,
          "target": "2-meeting-room-1"
        },
        {
          "yaw": -0.5705518186553196,
          "pitch": 0.2312614297100204,
          "rotation": 4.71238898038469,
          "target": "8-multimedia-room"
        },
        {
          "yaw": -0.26456113647792456,
          "pitch": 0.09615178391874224,
          "rotation": 4.71238898038469,
          "target": "9-pantry"
        },
        {
          "yaw": 3.1010851381245015,
          "pitch": 0.029097579886720126,
          "rotation": 0,
          "target": "6-office-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-multimedia-room",
      "name": "Multimedia Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1331858838787756,
          "pitch": 0.009455171730182954,
          "rotation": 0,
          "target": "7-office-3a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pantry",
      "name": "Pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5683211243430382,
          "pitch": 0.003505599975619944,
          "rotation": 4.71238898038469,
          "target": "7-office-3a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ruang-manager",
      "name": "Ruang Manager",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.085589157339035,
          "pitch": 0.025423184874323823,
          "rotation": 0,
          "target": "4-office-1a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "REV1 KANTOR FINNA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
