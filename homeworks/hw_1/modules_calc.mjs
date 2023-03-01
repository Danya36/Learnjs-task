const calculation = {
  adduction: function (num_1, num_2) {
    let result = [];
    if (
      num_1 >= 9007199254740992 ||
      num_2 >= 9007199254740992 ||
      num_1 <= -9007199254740992 ||
      num_2 <= -9007199254740992
    ) {
      result = BigInt(num_1) + BigInt(num_2);
      return result;
    } else {
      result = Number(num_1) + Number(num_2);
      return result;
    }
  },

  subtraction: function (num_1, num_2) {
    let result = [];
    if (
      num_1 >= 9007199254740992 ||
      num_2 >= 9007199254740992 ||
      num_1 <= -9007199254740992 ||
      num_2 <= -9007199254740992
    ) {
      result = BigInt(num_1) - BigInt(num_2);
      return result;
    } else {
      result = Number(num_1) - Number(num_2);
      return result;
    }
  },

  multiply: function (num_1, num_2) {
    let result = [];
    if (
      num_1 >= 9007199254740992 ||
      num_2 >= 9007199254740992 ||
      num_1 <= -9007199254740992 ||
      num_2 <= -9007199254740992
    ) {
      result = BigInt(num_1) * BigInt(num_2);
      return result;
    } else {
      result = Number(num_1) * Number(num_2);
      return result;
    }
  },

  divide: function (num_1, num_2) {
    let result = [];
    if (
      num_1 >= 9007199254740992 ||
      num_2 >= 9007199254740992 ||
      num_1 <= -9007199254740992 ||
      num_2 <= -9007199254740992
    ) {
      result = BigInt(num_1) / BigInt(num_2);
      return result;
    } else {
      result = Number(num_1) / Number(num_2);
      return result;
    }
  },
};

export const add = calculation.adduction;
export const sub = calculation.subtraction;
export const multi = calculation.multiply;
export const div = calculation.divide;
