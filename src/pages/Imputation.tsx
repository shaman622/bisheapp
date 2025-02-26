import React from 'react';
import DataPreprocessing from '../components/DataPreprocessing';
import DataStatistics from '../components/DataStatistics';
import ParameterSettings from '../components/ParameterSettings';
import '../styles/Imputation.css';

const Imputation: React.FC = () => {
  return (
    <div className="imputation-page">
      <h1>缺失值自适应时序插补</h1>
      <DataPreprocessing />
      <DataStatistics />
      <ParameterSettings />
    </div>
  );
};

export default Imputation;