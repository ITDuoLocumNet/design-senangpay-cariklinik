// services
const general = require('~/assets/icon/services/kesihatan-am.svg')
const man = require('~/assets/icon/services/kesihatan-lelaki.svg')
const injury = require('~/assets/icon/services/rawatan-luka-moden.svg')
const weight = require('~/assets/icon/services/pengurusan-berat-badan.svg')
const ultrasound = require('~/assets/icon/services/ultrasound.svg')
const pregnant = require('~/assets/icon/services/penjagaan-kehamilan.svg')
const cancerWoman = require('~/assets/icon/services/saringan-kanser-wanita.svg')
const bone = require('~/assets/icon/services/rawatan-tulang-otot.svg')
const blood = require('~/assets/icon/services/pengendalian-darah-tinggi.svg')
const diabetes = require('~/assets/icon/services/pengendalian-kencing-manis.svg')
// const chronic = require('~/assets/icon/services/aa.svg')
const athma = require('~/assets/icon/services/rawatan-asma.svg')
const minorSurgery = require('~/assets/icon/services/pembedahan-kecil.svg')
const firstAid = require('~/assets/icon/services/rawatan-awal-kecemasan.svg')

// panels
const cash = require('~/assets/icon/panels/cash.svg')
const card = require('~/assets/icon/panels/credit-card.svg')
const aia = require('~/assets/icon/panels/aia.svg')
const mediclinic = require('~/assets/icon/panels/mediclinic.svg')
const micare = require('~/assets/icon/panels/micare.svg')
const healthConnect = require('~/assets/icon/panels/health-connect.svg')
// const datalink = require('~/assets/icon/panels/datalink.svg')
const affin = require('~/assets/icon/panels/affin-bank.svg')
const compumed = require('~/assets/icon/panels/compumed.svg')
const asp = require('~/assets/icon/panels/asp-medical-group.svg')
// const mib = require('~/assets/icon/panels/cash.svg')
const pmcare = require('~/assets/icon/panels/pmcare.svg')
const mediviron = require('~/assets/icon/panels/mediviron.svg')

export const state = () => ({
  services: [
    { id: 60, name: 'Kesihatan Am', value: 'general', src: general },
    { id: 31, name: 'Kesihatan Lelaki', value: 'man', src: man },
    { id: 30, name: 'Penjagaan Luka', value: 'injury', src: injury },
    { id: 49, name: 'Pengurusan Berat Badan', value: 'weight', src: weight },
    { id: 1, name: 'Ultrasound', value: 'ultrasound', src: ultrasound },
    { id: 2, name: 'Wanita Mengangung', value: 'pregnant', src: pregnant },
    {
      id: 1,
      name: 'Saringan Kanser Wanita Bersama Doktor Wanita',
      value: 'cancer-woman',
      src: cancerWoman,
    },
    { id: 50, name: 'Rawatan Berkaitan Tulang', value: 'bone', src: bone },
    { id: 46, name: 'Darah Tinggi', value: 'blood', src: blood },
    { id: 45, name: 'Kencing Manis', value: 'diabetes', src: diabetes },
    { id: 1, name: 'Penyakit Kronik', value: 'chronic', src: '' },
    { id: 58, name: 'Asma', value: 'athma', src: athma },
    {
      id: 14,
      name: 'Pembedahan Kecil',
      value: 'minor-surgery',
      src: minorSurgery,
    },
    { id: 66, name: 'Rawatan Kecemasan', value: 'first-aid', src: firstAid },
  ],
  panels: [
    { id: 40, name: 'Tunai', value: 'cash', src: cash },
    { id: 41, name: 'Kad Kredit', value: 'card', src: card },
    { id: 1, name: 'AIA', value: 'aia', src: aia },
    { id: 1, name: 'Mediclinic', value: 'mediclinic', src: mediclinic },
    { id: 1, name: 'Micare', value: 'micare', src: micare },
    {
      id: 1,
      name: 'Health Connect',
      value: 'healthConnect',
      src: healthConnect,
    },
    { id: 1, name: 'Datalink', value: '', src: '' },
    { id: 1, name: 'Affin Bank', value: 'affin', src: affin },
    { id: 5, name: 'Compumed', value: 'compumed', src: compumed },
    { id: 3, name: 'Asp', value: 'asp', src: asp },
    { id: 1, name: 'MIB', value: '', src: '' },
    { id: 1, name: 'PMCare', value: 'pmcare', src: pmcare },
    { id: 1, name: 'Mediviron', value: 'mediviron', src: mediviron },
  ],
})

export const mutations = {
  panel(state, payload) {
    state.panels = payload
  },
  service(state, payload) {
    state.services = payload
  },
}

export const actions = {
  updatePanel({ commit }, payload) {
    commit('panel', payload)
  },
  updateService({ commit }, payload) {
    commit('service', payload)
  },
}
