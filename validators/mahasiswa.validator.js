const Validator = require('validatorjs');

Validator.register('array_of_integers', (val, requirement, attribute) => {
  if (!Array.isArray(val)) return false;
  return val.every(item => typeof item === 'number');
}, 'The :attribute must be an array of integers.')

const mahasiswaValidators = {
  postMahasiswa: {
    rule: {
      nama: 'required|min:2',
      usia: 'required|min:18',
    },
    customMessages: {
      'required.nama': 'Nama harus diisi, tidak bisa kosong.',
      'required.usia': 'Usia harus diisi, tidak bisa kosong.',
    }
  },
  putMahasiswa: {
    rule: {
      nama: 'min:2',
      usia: 'min:18',
    }
  },
  postRencanaStudi: {
    rule: {
      'mataKuliahIds': 'array|min:1|max:3|array_of_integers',
    }
  },
  putRencanaStudi: {
    rule: {
      'mataKuliahIds': 'array|min:1|max:3|array_of_integers',
    }
  }
}

module.exports = { mahasiswaValidators }