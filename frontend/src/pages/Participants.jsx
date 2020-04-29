import React, {useState, useEffect} from 'react'

import './styles.css'
import api from '../services/api'
import GroupParticipants from '../components/GroupParticipants.jsx'

export default function Participants() {

  const [group1, setGroup1] = useState([])
  const [group2, setGroup2] = useState([])
  const [group3, setGroup3] = useState([])
  const [group4, setGroup4] = useState([])

    useEffect(() => {
      api.get('/participants').then(res => {
        let groupP1 = res.data.participants[0]
        let groupP2 = res.data.participants[1]
        let groupP3 = res.data.participants[2]
        let groupP4 = res.data.participants[3]
        setGroup1([...groupP1])
        setGroup2([...groupP2])
        setGroup3([...groupP3])
        setGroup4([...groupP4])
      })
    }, [])

  return (
    <>
      <div className="row-first">
        <div className="group1">
          <h2>Participantes do grupo 1</h2>
          <GroupParticipants participants={group1}/>
        </div>
        <div className="group2">
          <h2>Participantes do grupo 2</h2>
          <GroupParticipants participants={group2}/>
        </div>
      </div>
      <div className="row-second">
        <div className="group3">
          <h2>Participantes do grupo 3</h2>
          <GroupParticipants participants={group3}/>
        </div>
        <div className="group4">
          <h2>Participantes do grupo 4</h2>
          <GroupParticipants participants={group4}/>
        </div>
      </div>
    </>
  )
}