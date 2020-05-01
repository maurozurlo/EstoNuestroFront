//Setting Mock Data for first time access
export const userList = {
  '29-04-2020':{
    17: 'belu.piccoli',
    18: 'leia_oriana',
    20: 'kiefa',
    21: 'santile.n',
    22: 'pachaysuimaginario',
    23: 'textotendido',
    0: 'matias.va.con.tilde'
  },
  '30-04-2020': {
    17: 'sol.morgante',
    18: 'valentinaliff',
    19: 'deboh.ingenia',
    20: 'flordelsur.cl',
    21: 'ema_sementa87',
    22: 'mateo.zucco',
    23: 'musicamistica'
  }
}

export const getAllListItems = () => new Promise(
  function (resolve, reject) {
    if (localStorage.getItem('estoNuestro')) {
      resolve(JSON.parse(localStorage.getItem('estoNuestro')))
    } else {
      const errMsg = new Error('No hay nada anotado para este día')
      reject(errMsg)
    }
  }
)


export const addItemToList = (itemName) => new Promise(
  function (resolve, reject) {
    let list = JSON.parse(localStorage.getItem('supermarketList'))
    if (itemName !== '') {
      list.push(itemName)
      localStorage.setItem('supermarketList', JSON.stringify(list))
      resolve()
    } else {
      const errMsg = new Error("Can't add null item")
      reject(errMsg)
    }
  }
)

export const deleteItemFromList = (id) => new Promise(
  function (resolve, reject) {
    let list = JSON.parse(localStorage.getItem('supermarketList'))
    if (id >= 0 && id <= list.length) {
      list.splice(id, 1);
      localStorage.setItem('supermarketList', JSON.stringify(list))
      resolve()
    } else {
      const errMsg = new Error("Can't delete item")
      reject(errMsg)
    }
  }
)

export default {
  userList,
  getAllListItems,
  deleteItemFromList,
  addItemToList
}