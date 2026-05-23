export const tools = [
  {
    "slug": "2048",
    "name": "2048",
    "category": "Games / Fun",
    "summary": "2048 as a lightweight interactive lab with live controls.",
    "tags": [
      "games / fun",
      "2048"
    ],
    "engine": "canvas-lab",
    "defaults": {
      "layers": 5,
      "amplitude": 41,
      "phase": 5
    },
    "controls": [
      {
        "type": "range",
        "key": "layers",
        "label": "Layers",
        "min": 2,
        "max": 12,
        "step": 1,
        "value": 5
      },
      {
        "type": "range",
        "key": "amplitude",
        "label": "Amplitude",
        "min": 8,
        "max": 64,
        "step": 1,
        "value": 41
      },
      {
        "type": "range",
        "key": "phase",
        "label": "Phase",
        "min": 0,
        "max": 24,
        "step": 1,
        "value": 5
      }
    ],
    "preset": {
      "variant": "waves",
      "hue": 287,
      "defaults": {
        "layers": 5,
        "amplitude": 32,
        "phase": 0
      }
    }
  },
  {
    "slug": "a-visualization",
    "name": "A* visualization",
    "category": "Maths / Cool Nerd Stuff",
    "summary": "A* visualization as a lightweight interactive lab with live controls.",
    "tags": [
      "maths / cool nerd stuff",
      "a",
      "visualization"
    ],
    "engine": "canvas-lab",
    "defaults": {
      "layers": 5,
      "amplitude": 39,
      "phase": 9
    },
    "controls": [
      {
        "type": "range",
        "key": "layers",
        "label": "Layers",
        "min": 2,
        "max": 12,
        "step": 1,
        "value": 5
      },
      {
        "type": "range",
        "key": "amplitude",
        "label": "Amplitude",
        "min": 8,
        "max": 64,
        "step": 1,
        "value": 39
      },
      {
        "type": "range",
        "key": "phase",
        "label": "Phase",
        "min": 0,
        "max": 24,
        "step": 1,
        "value": 9
      }
    ],
    "preset": {
      "variant": "waves",
      "hue": 159,
      "defaults": {
        "layers": 5,
        "amplitude": 32,
        "phase": 0
      }
    }
  },
  {
    "slug": "achievement-popup-system",
    "name": "Achievement popup system",
    "category": "Extra",
    "summary": "Achievement popup system as a lightweight interactive lab with live controls.",
    "tags": [
      "extra",
      "achievement",
      "popup",
      "system"
    ],
    "engine": "canvas-lab",
    "defaults": {
      "spacing": 32,
      "tilt": 8
    },
    "controls": [
      {
        "type": "range",
        "key": "spacing",
        "label": "Spacing",
        "min": 12,
        "max": 72,
        "step": 1,
        "value": 32
      },
      {
        "type": "range",
        "key": "tilt",
        "label": "Tilt",
        "min": 0,
        "max": 30,
        "step": 1,
        "value": 8
      }
    ],
    "preset": {
      "variant": "grid",
      "hue": 258,
      "defaults": {
        "spacing": 28,
        "tilt": 10
      }
    }
  }
];
