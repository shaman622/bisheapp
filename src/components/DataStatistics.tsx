import React, { useState } from 'react';
import '../styles/Imputation.css';

const DataStatistics: React.FC = () => {
  const [showTables, setShowTables] = useState<boolean>(false);

  // 模拟数据
  const adjacencyStats = [
    { dataset: 'METR-LA', type: 'directed', nodes: 207, edges: 1515, mean: 7.32, median: 7.0, isolatedNodes: 5 },
  ];

  const missingDataStats = [
    { dataset: 'METR-LA', missingNodes: 8.10, missingEdges: 12.44, missingRate: 9.0 },
  ];

  // 处理数据统计
  const handleDataStatistics = () => {
    setShowTables(true);
  };

  return (
    <div className="section-card">
      <h2>数据统计</h2>
      <p>
        数据统计用于分析数据的分布特征，帮助选择合适的插补方法。
      </p>

      {/* 数据统计按钮 */}
      <button onClick={handleDataStatistics} className="submit-button">
        数据统计
      </button>

      {/* 邻接信息统计表格 */}
      {showTables && (
        <div className="statistics-table">
          <h3>邻接信息统计</h3>
          <table>
            <thead>
              {/* 第一行表头 */}
              <tr>
                <th></th> {/* 第一列留空 */}
                <th colSpan={3}>GRAPH</th>
                <th colSpan={3}>N.NEIGHBORS</th>
              </tr>
              {/* 第二行表头 */}
              <tr>
                <th>DataSet</th> {/* 第二行第一列显示 DataSet */}
                <th>type</th>
                <th>nodes</th>
                <th>edges</th>
                <th>mean</th>
                <th>median</th>
                <th>isolated Nodes</th>
              </tr>
            </thead>
            <tbody>
              {adjacencyStats.map((stat, index) => (
                <tr key={index}>
                  <td>{stat.dataset}</td>
                  <td>{stat.type}</td>
                  <td>{stat.nodes}</td>
                  <td>{stat.edges}</td>
                  <td>{stat.mean}</td>
                  <td>{stat.median}</td>
                  <td>{stat.isolatedNodes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 数据缺失信息表格 */}
      {showTables && (
        <div className="statistics-table">
          <h3>数据缺失信息</h3>
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