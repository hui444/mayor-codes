import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InfoBoxSet from "../components/InfoBoxes/InfoBoxSet";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const TimetableInfoPage = () => {
  const [loadedModuleSet, setLoadedModuleSet] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const setModulesId = useParams().setModulesId;
  useEffect(() => {
    const fetchModuleSet = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/create/${setModulesId}`
        );
        setLoadedModuleSet(responseData.setModules);
      } catch (err) {}
    };
    fetchModuleSet();
  }, [sendRequest, setModulesId]);

  console.log(loadedModuleSet);
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedModuleSet && <InfoBoxSet items={loadedModuleSet} />}
    </React.Fragment>
  );
};

export default TimetableInfoPage;
