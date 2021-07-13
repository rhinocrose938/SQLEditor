import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/sql/sql";
import "codemirror/theme/dracula.css";
import Button from '@material-ui/core/Button';
import { tableHeaderData, candidatesData } from "../../mock/candidateData";
import { queriesToCandidateIdMap, queriesList } from "../../mock/sqlQueriesData";
import PaginationTable from "../Table/PaginationTable";
import './SQLEditor.css';

const initialQuery = queriesList[0];

export default function SQLEditor({outputText, setOutputText, setSelectedIndex}) {

  const filterCandidatesFromIds = (candidateIds = []) => {
    return candidateIds.map((candidateId) =>
      candidatesData.find((candidateData) => candidateData.id === candidateId)
    );
  };  const [rows, setRows] = useState(filterCandidatesFromIds(queriesToCandidateIdMap[outputText]));
  const [error, setError] = useState(false);

  const onChangeInput = (editor) => {
    let empty = [];
    setRows(empty);
    setError(false);
    setOutputText(editor.getValue());
  };

  const runQuery = () => {
    if (queriesList.includes(outputText)) {
      const candidatesIds = queriesToCandidateIdMap[outputText];
      const rowsData = filterCandidatesFromIds(candidatesIds);
      setRows(rowsData);
      setError(false);
    } else {
      let empty = [];
      setRows(empty);
      setError(true);
    }
  };

  const resetQuery = () => {
    let empty = [];
    setRows(empty);
    setError(false);
    setOutputText(initialQuery);
    setSelectedIndex(0);
  };


  return (
    <>
      <div className="main-container">
        <div className="second-container">
          <div className="codemirror-container">
            <CodeMirror
              value={outputText}
              options={{
                mode: "sql",
                theme: "default",
                lineNumbers: true,
                highlightFormatting: true,
              }}
              onBeforeChange={(editor, data, value) => {
                setOutputText(value);
              }}
              onChange={onChangeInput}
            />
          </div>
          <span className="button-container">
            <Button size="medium" variant="contained" color="primary" onClick={runQuery}>Run</Button>
            <Button size="medium" variant="contained" onClick={resetQuery}>Reset</Button>
          </span>
          {error && (
            <div className="error-message">Error: Not a valid query. Please try running one of the queries from the list</div>
          )}
           <PaginationTable rows={rows} columns={tableHeaderData}/>
        </div>
      </div>
    </>
  );
}
