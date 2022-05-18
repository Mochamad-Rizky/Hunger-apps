const checkStatusFetchRequest = ({ response, errorMessage }) => {
  if (response.status !== 200) {
    throw new Error(errorMessage);
  }
};

export default checkStatusFetchRequest;
