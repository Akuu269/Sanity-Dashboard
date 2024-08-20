const determineHealthState = (pipelineIssues) => {
    if (pipelineIssues > 20) {
      return 'red';  // High number of issues, critical state
    } else if (pipelineIssues > 5) {
      return 'yellow';  // Moderate number of issues, warning state
    } else {
      return 'green';  // Few or no issues, healthy state
    }
  };
  
  export default determineHealthState;