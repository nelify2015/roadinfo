import '../css/InfoCard.css'
import { Card } from 'react-bootstrap';

function elem({info}) {

  // Sample
  // "LOCATION_ID": "H1",
  // "DESTINATION_ID": "CH",
  // "CAPTURE_DATE": "2023-05-23T14:27:00",
  // "JOURNEY_TYPE": "1",
  // "JOURNEY_DATA": "13",
  // "COLOUR_ID": "2",
  // "JOURNEY_DESC": ""

  return (
    <div className="infoCardContainer rounded">
      <Card className="infoCard">
        <Card.Body bg="primary">
          <div className="card-text">
            <div className="row justify-content-right">
              <div className="col-lg-11 col-10">
                <div>{info.LOCATION_ID}</div>
                <div>{info.DESTINATION_ID}</div>
              </div>
              <div className="col-lg-1 col-2">
                <Card className="info">
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