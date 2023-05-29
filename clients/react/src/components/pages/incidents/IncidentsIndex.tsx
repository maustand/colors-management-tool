import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import cx from "classnames";
import SearchBox from "../../common/search-box/SearchBox";
import IncidentTileBox from "../../common/incident-tile-box/incident-tile-box";

function IncidentsIndex() {
  const [isListView, setIsListView] = useState<boolean>(true);
  const activeViewModeStyle = cx("text-primary", "pe-none");

  function toggleViewMode(value: boolean) {
    if (isListView !== value) {
      setIsListView(!isListView);
    }
  }

  function onSearchTextChanged(query: string) {
    console.log(query);
  }

  return (
    <>
      <Row>
        <Col xs="8">
          <h4 className="title">Management Tool</h4>
        </Col>

        <Col xs="4" className="d-flex justify-content-end">
          <Button
            variant=""
            aria-label="view tile mode"
            className={!isListView ? activeViewModeStyle : undefined}
            onClick={() => toggleViewMode(false)}
          >
            <i className="bi bi-microsoft"></i>
          </Button>

          <Button
            variant=""
            aria-label="view cards mode"
            className={isListView ? activeViewModeStyle : undefined}
            onClick={() => toggleViewMode(true)}
          >
            <i className="bi bi-list"></i>
          </Button>

          <Button variant="" aria-label="open create new incident in sidebar">
            <i className="bi bi-plus-circle"></i>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="my-3">
          <SearchBox placeHolder="Find by name..." searchTextChanged={onSearchTextChanged} />
        </Col>
      </Row>

      <Row className="list">
        <div className="col">

          <IncidentTileBox/>
        </div>
      </Row>
    </>
  );
}

export default IncidentsIndex;
