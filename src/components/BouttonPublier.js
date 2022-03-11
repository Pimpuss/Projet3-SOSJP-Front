import './Styles/BouttonPublier.css'
import axios from "axios"

const BouttonPublier = (props) => {
  const {article,collectDatas}=props
  const sendDatas = (event) =>{
    event.preventDefault()
    console.log('COLLECT DATAS ======>',article)
    axios.post(`http://localhost:4242/articles`,{article}).
      then(response=>console.log(response,article)).catch(error=>console.error('---Erreur envoi article--- ',error))
  }
  return (
    <div>
      <button
        onClick={(collectDatas, sendDatas)}
        className="button2 adminButton"
      >
        Publier l'article
      </button>
    </div>
  )
}
export default BouttonPublier
