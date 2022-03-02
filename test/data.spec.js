import { it } from 'eslint/lib/rule-tester/rule-tester';
import { orderData, filterByType } from '../src/data.js';


const arrTest = [
  {
    "num": "001",
    "name": "bulbasaur",
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

/*const arrTestFilter = ['grass', 'poison', 'fire', 'flying', 'water', 'bug', 'normal', 'electric', 'ground', 'fighting', 'psychic', 'rock', 'ice', 'ghost', 'dragon', 'fairy', 'dark', 'steel']*/

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function')
  })
  it('should return [ninetales] for arrTest with fire', () => {
    expect(filterByType(arrTest, 'fire')).toEqual([{
      "num": "038",
      "name": "ninetales",
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

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });.
