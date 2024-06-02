const mataKuliahValidators = {
  postMataKuliah: {
    rule: {
      nama: 'required|min:6',
      kodeMataKuliah: 'required',
      sks: 'required',
      semester: 'required',
    },
    customMessages: {
      'required.nama': 'Nama harus diisi, tidak bisa kosong.',
      'required.kodeMataKuliah': 'Kode mata kuliah harus diisi, tidak bisa kosong.',
      'required.sks': 'SKS harus diisi, tidak bisa kosong.',
      'required.semester': 'Semester harus diisi, tidak bisa kosong.',
    }
  },
  putMataKuliah: {
    rule: {
      nama: 'min:6',
      kodeMataKuliah: '',
      sks: '',
      semester: '',
    },
  }
}

module.exports = { mataKuliahValidators }