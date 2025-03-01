import React from 'react';
import DataPreprocessing from '../components/Prediction/DataPreprocessing';
import DataStatistics from '../components/Prediction/DataStatistics';
import ParameterSettings from '../components/Prediction/ParameterSettings';
import ModelTraining from '../components/Prediction/ModelTraining';
import TrainingProcess from '../components/Prediction/TrainingProcess';
import ModelTesting from '../components/Prediction/ModelTesting';
import PredictionTest from '../components/Prediction/PredictionTest';
import '../styles/Imputation.css';

const Imputation: React.FC = () => {
  return (
    <div className="imputation-page">
      <h1>不规则采样多元时间序列预测</h1>
      <DataPreprocessing />
      <DataStatistics />
      <ParameterSettings />
      <ModelTraining />
      <TrainingProcess />
      <ModelTesting />
      <PredictionTest />
    </div>
  );
};

export default Imputation;