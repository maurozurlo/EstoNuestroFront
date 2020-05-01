const [selectedTime, setSelectedTime] = useState(null);
setSelectedTime(val); //Save selectedTimeInComponent
/* try{
      await addItemToList(value)
      .then(fetchData())
    } catch(err){
      console.log(err)
    } */

//List handling
const [list, setList] = useState([]);
//Get all data
async function fetchData() {
  try {
    const res = await getAllListItems()
    setList(res)
  } catch (err) {
    console.log(err)
  }
}

//Initialize list
useEffect(() => {
  fetchData()
}, [])