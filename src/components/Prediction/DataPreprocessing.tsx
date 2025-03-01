import React, { useState } from 'react';
import '../../styles/Imputation.css';

const DataPreprocessing: React.FC = () => {
  const [selectedFeatureFile, setSelectedFeatureFile] = useState<File | null>(null);
  const [featureFileName, setFeatureFileName] = useState<string>('未选择文件');
  const [selectedAdjacencyFile, setSelectedAdjacencyFile] = useState<File | null>(null);

  // 处理数据集特征文件选择
  const handleFeatureFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFeatureFile(file);
      setFeatureFileName(file.name);
    }
  };

  // 处理数据集邻接矩阵文件选择
  const handleAdjacencyFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedAdjacencyFile(file);
    }
  };

  // 处理数据集特征文件上传
  const handleFeatureUpload = () => {
    if (selectedFeatureFile) {
      console.log('上传数据集特征文件:', selectedFeatureFile.name);
      alert(`数据集特征文件 "${selectedFeatureFile.name}" 上传成功！`);
    } else {
      alert('请先选择一个数据集特征文件！');
    }
  };


  return (
    <div className="section-card">
  <h2>数据预处理</h2>
  {/* 数据集特征部分上传 */}
  <div className="file-upload-row">
    <h3>数据集特征部分上传</h3>
    <div className="file-upload-container">
      <label htmlFor="feature-file-input" className="file-label">
        选择文件
      </label>
      <input
        id="feature-file-input"
        type="file"
        onChange={handleFeatureFileChange}
        style={{ display: 'none' }}
      />
      <span className="file-name">{featureFileName}</span>
      <button onClick={handleFeatureUpload} className="upload-button-custom">
        上传
      </button>
    </div>
  </div>
</div>
  );
};

export default DataPreprocessing; 