const checkStatusFetchRequest = ({ response, errorMessage }) => {
  if (!(response.status >= 200 && response.status <= 300)) {
    throw new Error(errorMessage);
  }
};

export default checkStatusFetchRequest;
