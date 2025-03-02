import React, { useState } from 'react';
import '../../styles/Imputation.css';

const DataStatistics: React.FC = () => {
  const [showTables, setShowTables] = useState<boolean>(false);


  const missingDataStats = [
    { dataset: 'PEMSD4', missingNodes: 0.02, missingEdges: 12, missingRate: 12 },
  ];

  // 处理数据统计
  const handleDataStatistics = () => {
    setShowTables(true);
  };

  return (
    <div className="section-card">
      <h2>数据统计</h2>
      <p>
        用于统计数据不规则采样状况
      </p>

      {/* 数据统计按钮 */}
      <button onClick={handleDataStatistics} className="submit-button">
        数据统计
      </button>

      {/* 数据缺失信息表格 */}
      {showTables && (
        <div className="statistics-table">
          <h3>不规则采样状况</h3>
          <table>
            <thead>
              {/* 第一行表头 */}                           
              <tr>
                <th></th> {/* 第一列留空 */}
                <th colSpan={3}>ORIGINAL DATA</th>
              </tr>
              <tr>
                <th>DataSet</th>
                <th>% missing</th>
                <th>avg. block</th>
                <th>median block</th>
              </tr>
            </thead>
            <tbody>
              {missingDataStats.map((stat, index) => (
                <tr key={index}>
                  <td>{stat.dataset}</td>
                  <td>{stat.missingNodes}</td>
                  <td>{stat.missingEdges}</td>
                  <td>{stat.missingRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataStatistics;