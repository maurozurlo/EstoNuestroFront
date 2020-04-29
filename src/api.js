//Setting Mock Data for first time access
if (!localStorage.getItem('estoNuestro')) {
  const todaysList =
  {
    '20200410':
      {
        17: 'elmiauro',
        18: 'lucreseoane',
        19: 'nicocane93',
        20: 'falopitaelpayaso',
        21: 'dukissj',
        22: 'romicampi',
        0: 'elculodetinelli',
        1: 'celacosari'
      }
  }

  localStorage.setItem('estoNuestro', JSON.stringify(todaysList))
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
  getAllListItems,
  deleteItemFromList,
  addItemToList
}