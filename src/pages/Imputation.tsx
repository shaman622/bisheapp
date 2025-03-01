import React from 'react';
import DataPreprocessing from '../components/Imputation/DataPreprocessing';
import DataStatistics from '../components/Imputation/DataStatistics';
import ParameterSettings from '../components/Imputation/ParameterSettings';
import ModelTraining from '../components/Imputation/ModelTraining';
import TrainingProcess from '../components/Imputation/TrainingProcess';
import ModelTesting from '../components/Imputation/ModelTesting';
import ImputationTest from '../components/Imputation/ImputationTest';
import '../styles/Imputation.css';

const Imputation: React.FC = () => {
  return (
    <div className="imputation-page">
      <h1>不规则采样多元时间序列插补</h1>
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