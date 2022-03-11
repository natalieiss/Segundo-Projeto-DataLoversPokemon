
import { orderData, filterByType, typeName, createPropertyArr, createArrWithoutRepeat, percentOfProperty, showSumArr } from '../src/data.js';

const arrTest0 = ["fire", "fire", "fire", "grass", "grass", "water"]
const arrTest = [
  {
    "num": "001",
    "name": "bulbasaur",
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "spawn-chance": "0.69",
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    },
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
  },
  {
    "num": "150",
    "name": "mewtwo",
    "pokemon-rarity": "legendary",
    "type": [
      "psychic"
    ],
    "spawn-chance": "0",
    "stats": {
      "base-attack": "300",
      "base-defense": "182",
      "base-stamina": "214",
      "max-cp": "4178",
      "max-hp": "180"
    },

    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
  },
  {
    "num": "038",
    "name": "ninetales",
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
    "spawn-chance": "0.0077",
    "stats": {
      "base-attack": "169",
      "base-defense": "190",
      "base-stamina": "177",
      "max-cp": "2279",
      "max-hp": "151"
    },
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
  }
]

describe('orderData', () => {
  it('orderData is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('should return "[mewtwo, ninetales, bulbasaur]" for "max-smaller-cp" with array arrTest', () => {
    expect(orderData(arrTest, 'max-smaller-cp')).toStrictEqual([
      {
        "num": "150",
        "name": "mewtwo",
        "pokemon-rarity": "legendary",
        "type": [
          "psychic"
        ],
        "spawn-chance": "0",
        "stats": {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        },

        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ]
      },
      {
        "num": "038",
        "name": "ninetales",
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "spawn-chance": "0.0077",
        "stats": {
          "base-attack": "169",
          "base-defense": "190",
          "base-stamina": "177",
          "max-cp": "2279",
          "max-hp": "151"
        },
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ]
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      }
    ])
  });

  it('should return "[bulbasaur, ninetales, mewtwo]" for "smaller-max-cp" with array arrTest', () => {
    expect(orderData(arrTest, 'smaller-max-cp')).toStrictEqual([
      {
        "num": "001",
        "name": "bulbasaur",
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      },
      {
        "num": "038",
        "name": "ninetales",
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "spawn-chance": "0.0077",
        "stats": {
          "base-attack": "169",
          "base-defense": "190",
          "base-stamina": "177",
          "max-cp": "2279",
          "max-hp": "151"
        },
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ]
      },
      {
        "num": "150",
        "name": "mewtwo",
        "pokemon-rarity": "legendary",
        "type": [
          "psychic"
        ],
        "spawn-chance": "0",
        "stats": {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        },

        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ]
      }
    ])
  });

  it('should return "[bulbasaur, mewtwo, ninetales]" for "name-az" with array arrTest', () => {
    expect(orderData(arrTest, 'name-az')).toStrictEqual([
      {
        "num": "001",
        "name": "bulbasaur",
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ],
      },
      {
        "num": "150",
        "name": "mewtwo",
        "pokemon-rarity": "legendary",
        "type": [
          "psychic"
        ],
        "spawn-chance": "0",
        "stats": {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        },

        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ],
      },
      {
        "num": "038",
        "name": "ninetales",
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "spawn-chance": "0.0077",
        "stats": {
          "base-attack": "169",
          "base-defense": "190",
          "base-stamina": "177",
          "max-cp": "2279",
          "max-hp": "151"
        },
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ],
      },

    ])
  });

  it('should return "[ninetales, mewtwo, bulbasaur]" for "name-za" with array arrTest', () => {
    expect(orderData(arrTest, 'name-za')).toStrictEqual([
      {
        "num": "038",
        "name": "ninetales",
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "spawn-chance": "0.0077",
        "stats": {
          "base-attack": "169",
          "base-defense": "190",
          "base-stamina": "177",
          "max-cp": "2279",
          "max-hp": "151"
        },
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ],
      },
      {
        "num": "150",
        "name": "mewtwo",
        "pokemon-rarity": "legendary",
        "type": [
          "psychic"
        ],
        "spawn-chance": "0",
        "stats": {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        },

        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ],
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ],
      }
    ])
  });

  it('should return "[bulbasaur, mewtwo, ninetales]" for "num" with array arrTest', () => {
    expect(orderData(arrTest, 'num')).toStrictEqual([
      {
        "num": "001",
        "name": "bulbasaur",
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ],
      },
      {
        "num": "038",
        "name": "ninetales",
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "spawn-chance": "0.0077",
        "stats": {
          "base-attack": "169",
          "base-defense": "190",
          "base-stamina": "177",
          "max-cp": "2279",
          "max-hp": "151"
        },
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ],
      },
      {
        "num": "150",
        "name": "mewtwo",
        "pokemon-rarity": "legendary",
        "type": [
          "psychic"
        ],
        "spawn-chance": "0",
        "stats": {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        },

        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ],
      }
    ])
  });

  it('should return "[bulbasaur, ninetales, mewtwo]" for "spawn-chance" with array arrTest', () => {
    expect(orderData(arrTest, 'spawn-chance')).toStrictEqual([
      {
        "num": "001",
        "name": "bulbasaur",
        "pokemon-rarity": "normal",
        "type": [
          "grass",
          "poison"
        ],
        "spawn-chance": "0.69",
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        },
        "weaknesses": [
          "fire",
          "ice",
          "flying",
          "psychic"
        ]
      },
      {
        "num": "038",
        "name": "ninetales",
        "pokemon-rarity": "normal",
        "type": [
          "fire"
        ],
        "spawn-chance": "0.0077",
        "stats": {
          "base-attack": "169",
          "base-defense": "190",
          "base-stamina": "177",
          "max-cp": "2279",
          "max-hp": "151"
        },
        "weaknesses": [
          "water",
          "ground",
          "rock"
        ]
      },
      {
        "num": "150",
        "name": "mewtwo",
        "pokemon-rarity": "legendary",
        "type": [
          "psychic"
        ],
        "spawn-chance": "0",
        "stats": {
          "base-attack": "300",
          "base-defense": "182",
          "base-stamina": "214",
          "max-cp": "4178",
          "max-hp": "180"
        },

        "weaknesses": [
          "bug",
          "ghost",
          "dark"
        ]
      }
    ])
  });

  it('should return "(orderData(arrTest, "weaknesses")[2]) == bulbasaur" for "weaknesses" with array arrTest', () => {
    expect(orderData(arrTest, 'weaknesses')[2]).toStrictEqual({
      "num": "001",
      "name": "bulbasaur",
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
      "spawn-chance": "0.69",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    })
  });
})

const onePokemon = {
  "num": "038",
  "name": "ninetales",
  "pokemon-rarity": "normal",
  "type": [
    "fire"
  ],
  "spawn-chance": "0.0077",
  "stats": {
    "base-attack": "169",
    "base-defense": "190",
    "base-stamina": "177",
    "max-cp": "2279",
    "max-hp": "151"
  },
  "weaknesses": [
    "water",
    "ground",
    "rock"
  ]
}

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function')
  })
  it('should return [ninetales] for arrTest with fire', () => {
    expect(filterByType(arrTest, 'fire')).toEqual([{
      "num": "038",
      "name": "ninetales",
      "pokemon-rarity": "normal",
      "type": [
        "fire"
      ],
      "spawn-chance": "0.0077",
      "stats": {
        "base-attack": "169",
        "base-defense": "190",
        "base-stamina": "177",
        "max-cp": "2279",
        "max-hp": "151"
      },
      "weaknesses": [
        "water",
        "ground",
        "rock"
      ],
    }]);
  });
  it('Should return "[]" for arrTest with ""', () => {
    expect(filterByType(arrTest, "")).toEqual([])
  });
})

describe("typeName", () => {
  it('is a function', () => {
    expect(typeof typeName).toBe('function')
  })

  it('Should return "bulbasaur" for arrTest with "bul"', () => {
    expect(typeName(arrTest, "bul")).toEqual([{
      "num": "001",
      "name": "bulbasaur",
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
      "spawn-chance": "0.69",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    }])
  });
})

describe("createPropertyArr", () => {
  it('is a function', () => {
    expect(typeof createPropertyArr).toBe('function')
  })

  it('Should return "["grass", "poison", "psychic", "fire"]" for arrTest with "type"', () => {
    expect(createPropertyArr(arrTest, "type")).toEqual(["fire", "psychic", "grass", "poison",])
  })
})

describe("createArrWithoutRepeat", () => {
  it('is a function', () => {
    expect(typeof createArrWithoutRepeat).toBe('function')
  })
  it('Should return "["fire", "grass", "water"]" for arrTest0', () => {
    expect(createArrWithoutRepeat(arrTest0)).toEqual(["fire", "grass", "water"])
  })
})

describe("percentOfProperty", () => {
  it('is a function', () => {
    expect(typeof percentOfProperty).toBe('function')
  })

  it('Should return "{qtd: 1, percent: "33.33", status: "fire"}" for arrTest with ["fire", "psychic", "grass", "poison"]', () => {
    expect(percentOfProperty(["fire", "psychic", "grass", "poison"], ["fire", "psychic", "grass", "poison"], arrTest).fire).toEqual({ qtd: 1, percent: "33.33", status: "fire" })
  })
})

const sum = percentOfProperty(["fire", "psychic", "grass", "poison"], ["fire", "psychic", "grass", "poison"], arrTest)
//export const showSumArr = (onePokemon, statusPokemon, sum, arrWithoutRepeat)
describe("showSumArr", () => {
  it('is a function', () => {
    expect(typeof showSumArr).toBe('function')
  })
  it('Should return "{qtd: 22, percent: "8.76", status: "fire"}"', () => {
    expect(showSumArr(onePokemon, "type", sum, ["fire", "psychic", "grass", "poison"])).toEqual([{ qtd: 1, percent: "33.33", status: "fire" }])
  })
})
