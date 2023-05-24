import { useContext, useState } from 'react'
import '../css/InfoCard.css'
import { Card } from 'react-bootstrap';
import { AppContext } from '../contexts/AppContext';

function elem({info}) {
  const { state } = useContext(AppContext)
  const [showPin, setShowPin] = useState(false)
  const lang = "tc"
  // Sample
  // "LOCATION_ID": "H1",
  // "DESTINATION_ID": "CH",
  // "CAPTURE_DATE": "2023-05-23T14:27:00",
  // "JOURNEY_TYPE": "1",
  // "JOURNEY_DATA": "13",
  // "COLOUR_ID": "2",
  // "JOURNEY_DESC": ""

  const getName = (id, typeName, lang) => {
    if (typeof id === "undefined") return null
    const name = state.info.data[typeName][id][`name_${lang}`]
    if (name.trim() !== "")
      return name
    return null
  }

  return (
    <div className="infoCardContainer rounded">
      <Card className="infoCard">
        <Card.Body bg="primary">
          <div className="card-text">
            <div className="row justify-content-right">
              <div className="col-lg-11 col-10 pe-2 pe-sm-0">
                <div>
                  {getName(info.DESTINATION_ID, "destinations", lang)} ({getName(info.LOCATION_ID, "locations", lang)})
                </div>
              </div>
              <div className="col-lg-1 col-2 pe-0 pe-sm-2">
                <Card className="info float-end">
                  <div className="card-text">
                    <div className="myClass d-flex justify-content-center align-items-center">
                      <div>{info.JOURNEY_DATA}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>            
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default elem