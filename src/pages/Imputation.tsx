import React from 'react';
import DataPreprocessing from '../components/DataPreprocessing';
import DataStatistics from '../components/DataStatistics';
import ParameterSettings from '../components/ParameterSettings';
import ModelTraining from '../components/ModelTraining';
import TrainingProcess from '../components/TrainingProcess';
import ModelTesting from '../components/ModelTesting';
import ImputationTest from '../components/ImputationTest';
import '../styles/Imputation.css';

const Imputation: React.FC = () => {
  return (
    <div className="imputation-page">
      <h1>缺失值自适应时序插补</h1>
      <DataPreprocessing />
      <DataStatistics />
      <ParameterSettings />
      <ModelTraining />
       <TrainingProcess />
       <ModelTesting />
        <ImputationTest />
    </div>
  );
};

export default Imputation;